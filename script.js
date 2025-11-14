// Global state
let currentTab = 'storage';
let editingSection = null;
let sections = {};

// Fullscreen and tab monitoring
function requestFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
        });
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || 
              document.mozFullScreenElement || document.msFullscreenElement);
}

// Monitor fullscreen changes
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
    if (!isFullscreen()) {
        alert('⚠️ WARNING: You have exited fullscreen mode! Please return to fullscreen.');
        // Attempt to re-enter fullscreen
        setTimeout(() => {
            requestFullscreen();
        }, 100);
    }
}

// Monitor tab visibility - close window if user switches tabs
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // User switched to another tab or minimized window
        alert('⚠️ SECURITY ALERT: Tab switching detected! The website will now close.');
        // Close the window/tab
        window.close();
        // If window.close() doesn't work (some browsers block it), crash the page
        setTimeout(() => {
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-size:24px;font-family:monospace;">WEBSITE CLOSED - TAB SWITCHING DETECTED</div>';
            throw new Error('Tab switching detected - Application terminated');
        }, 100);
    }
});

// Prevent right-click and common shortcuts that might help escape fullscreen
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', function(e) {
    // Block F11 (fullscreen toggle)
    if (e.key === 'F11') {
        e.preventDefault();
    }
    // Block Escape key to prevent exiting fullscreen, but allow it for modals
    if (e.key === 'Escape') {
        const sectionModal = document.getElementById('sectionModal');
        const viewModal = document.getElementById('viewModal');
        
        // Only allow Escape if a modal is open
        if (sectionModal && sectionModal.classList.contains('active')) {
            // Let modal close handler deal with it
            return;
        }
        if (viewModal && viewModal.classList.contains('active')) {
            // Let modal close handler deal with it
            return;
        }
        
        // Otherwise block Escape to prevent fullscreen exit
        e.preventDefault();
        return false;
    }
}, true); // Use capture phase to intercept before other handlers

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Request fullscreen immediately on page load
    setTimeout(() => {
        requestFullscreen();
    }, 500);
    
    initializeTabs();
    initializeModal();
    initializeViewModal();
    initializeSections();
    loadAllSections();
});

// Tab switching functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(tabName) {
    currentTab = tabName;
    
    // Remove active class from all tabs and buttons
    const allTabContents = document.querySelectorAll('.tab-content');
    const allTabButtons = document.querySelectorAll('.tab-button');
    
    allTabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    allTabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Add active class to selected tab and button
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

// Section Management
function initializeSections() {
    const addSectionButtons = document.querySelectorAll('.add-section-btn');
    
    addSectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            openModal(tabName);
        });
    });
}

function loadAllSections() {
    const tabs = ['storage', 'ecs', 'database', 'network'];
    
    tabs.forEach(tab => {
        const savedSections = localStorage.getItem(`sections-${tab}`);
        if (savedSections) {
            sections[tab] = JSON.parse(savedSections);
        } else {
            sections[tab] = [];
        }
        renderSections(tab);
    });
}

function renderSections(tabName) {
    const container = document.getElementById(`${tabName}-sections`);
    const tabSections = sections[tabName] || [];
    
    if (tabSections.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>No sections yet</h3>
                <p>Click "Add Section" to create your first section</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    tabSections.forEach((section, index) => {
        const sectionCard = createSectionCard(section, index, tabName);
        container.appendChild(sectionCard);
    });
}

function createSectionCard(section, index, tabName) {
    const card = document.createElement('div');
    card.className = 'section-card';
    card.setAttribute('data-index', index);
    
    card.innerHTML = `
        <div class="section-header">
            <h3 class="section-title">${escapeHtml(section.title)}</h3>
            <div class="section-actions">
                <button class="section-btn view-btn" onclick="viewSection('${tabName}', ${index})" title="View full content">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="section-btn edit-btn" onclick="editSection('${tabName}', ${index})" title="Edit section">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="section-btn delete-btn" onclick="deleteSection('${tabName}', ${index})" title="Delete section">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="section-content">${escapeHtml(section.content)}</div>
    `;
    
    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Modal Management
function initializeModal() {
    const modal = document.getElementById('sectionModal');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelModal');
    const saveBtn = document.getElementById('saveSection');
    
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    saveBtn.addEventListener('click', saveSection);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(tabName, sectionIndex = null) {
    const modal = document.getElementById('sectionModal');
    const modalTitle = document.getElementById('modalTitle');
    const titleInput = document.getElementById('sectionTitle');
    const contentInput = document.getElementById('sectionContent');
    
    currentTab = tabName;
    editingSection = sectionIndex;
    
    if (sectionIndex !== null) {
        // Editing existing section
        const section = sections[tabName][sectionIndex];
        modalTitle.textContent = 'Edit Section';
        titleInput.value = section.title;
        contentInput.value = section.content;
    } else {
        // Adding new section
        modalTitle.textContent = 'Add New Section';
        titleInput.value = '';
        contentInput.value = '';
    }
    
    modal.classList.add('active');
    titleInput.focus();
}

function closeModal() {
    const modal = document.getElementById('sectionModal');
    modal.classList.remove('active');
    editingSection = null;
}

function saveSection() {
    const titleInput = document.getElementById('sectionTitle');
    const contentInput = document.getElementById('sectionContent');
    
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    
    if (!title) {
        alert('Please enter a section title');
        titleInput.focus();
        return;
    }
    
    if (!content) {
        alert('Please enter some content');
        contentInput.focus();
        return;
    }
    
    const section = {
        title: title,
        content: content,
        timestamp: new Date().toISOString()
    };
    
    if (editingSection !== null) {
        // Update existing section
        sections[currentTab][editingSection] = section;
    } else {
        // Add new section
        if (!sections[currentTab]) {
            sections[currentTab] = [];
        }
        sections[currentTab].push(section);
    }
    
    saveSectionsToStorage(currentTab);
    renderSections(currentTab);
    closeModal();
    showSaveStatus('Section saved successfully');
}

function viewSection(tabName, index) {
    const section = sections[tabName][index];
    openViewModal(section);
}

function editSection(tabName, index) {
    openModal(tabName, index);
}

function deleteSection(tabName, index) {
    const section = sections[tabName][index];
    const confirmed = confirm(`Are you sure you want to delete the section "${section.title}"?`);
    
    if (confirmed) {
        sections[tabName].splice(index, 1);
        saveSectionsToStorage(tabName);
        renderSections(tabName);
        showSaveStatus('Section deleted');
    }
}

function saveSectionsToStorage(tabName) {
    localStorage.setItem(`sections-${tabName}`, JSON.stringify(sections[tabName]));
}

// Status Messages
function showSaveStatus(message) {
    const saveStatus = document.querySelector('.save-status span');
    const originalText = saveStatus.textContent;
    
    saveStatus.textContent = message;
    
    setTimeout(() => {
        saveStatus.textContent = originalText;
    }, 2000);
}

// View Modal Management
function initializeViewModal() {
    const viewModal = document.getElementById('viewModal');
    const closeViewBtn = document.getElementById('closeViewModal');
    const closeBtn = document.getElementById('closeViewBtn');
    
    closeViewBtn.addEventListener('click', closeViewModal);
    closeBtn.addEventListener('click', closeViewModal);
    
    // Close modal when clicking outside
    viewModal.addEventListener('click', function(e) {
        if (e.target === viewModal) {
            closeViewModal();
        }
    });
}

function openViewModal(section) {
    const viewModal = document.getElementById('viewModal');
    const titleElement = document.getElementById('viewSectionTitle');
    const contentElement = document.getElementById('viewSectionContent');
    
    titleElement.textContent = section.title;
    contentElement.textContent = section.content;
    
    viewModal.classList.add('active');
}

function closeViewModal() {
    const viewModal = document.getElementById('viewModal');
    viewModal.classList.remove('active');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Close view modal with Escape
    const viewModal = document.getElementById('viewModal');
    if (e.key === 'Escape' && viewModal.classList.contains('active')) {
        closeViewModal();
        return;
    }
    
    // Ctrl/Cmd + 1-4 for quick tab switching
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const tabs = ['storage', 'ecs', 'database', 'network'];
        const tabIndex = parseInt(e.key) - 1;
        switchTab(tabs[tabIndex]);
    }
    
    // Ctrl/Cmd + N to add new section
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        openModal(currentTab);
    }
});
