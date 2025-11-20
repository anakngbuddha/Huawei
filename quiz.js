const quizStyles = `
  /* Quiz Container */
  .quiz-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  /* Question Styling */
  .question-text {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
    font-weight: 600;
  }

  /* Options Styling */
  .option {
    padding: 1rem;
    margin: 0.5rem 0;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .option:hover {
    background: #f8fafc;
    border-color: #cbd5e0;
  }

  .option.selected {
    background: #ebf8ff;
    border-color: #4299e1;
  }

  /* Navigation Buttons */
  .quiz-nav-btn {
    padding: 0.75rem 1.5rem;
    background: #4299e1;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .quiz-nav-btn:hover {
    background: #3182ce;
    transform: translateY(-1px);
  }
`;

// Quiz data with 30+ professional questions
const quizData = [
    {
        question: "A client wants to deploy their web application to the internet while protecting their backend database servers. What is the best architectural approach?",
        type: "multiple",
        options: [
            "Place all servers in a public subnet with EIPs assigned to each",
            "Use NAT Gateway + ECS in public subnet + RDS in private subnet + Security Groups",
            "Deploy everything in a single subnet with Network ACL protection",
            "Use VPC Peering Connection to isolate frontend and backend"
        ],
        correct: [1],
        explanation: "The best practice is to use a NAT Gateway for outbound internet access, place web servers in a public subnet, keep databases in a private subnet, and use security groups for access control. This follows the principle of least privilege and network segmentation."
    },
    {
        question: "An organization needs to store archived financial records that must be retained for 7 years but will rarely be accessed. Which OBS storage class is most cost-effective?",
        type: "multiple",
        options: [
            "OBS Standard",
            "OBS Infrequent Access",
            "OBS Archive",
            "EVS with snapshot backup"
        ],
        correct: [2],
        explanation: "OBS Archive storage class has the lowest unit price and is specifically designed for data that is seldom accessed but cannot be discarded. It requires restoration before access, making it perfect for long-term archival needs like financial records."
    },
    {
        question: "Two ECSs in different VPCs within the same region cannot communicate by default. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [0],
        explanation: "True. VPCs are logically isolated from each other by default. To enable communication between ECSs in different VPCs, you need to create a VPC peering connection and configure appropriate routes."
    },
    {
        question: "Which of the following statements about EVS disk reliability are correct? (Select all that apply)",
        type: "checkbox",
        options: [
            "EVS uses three-copy redundancy within a single AZ",
            "EVS provides 99.9999999% (9 nines) durability",
            "EVS backups are stored across multiple AZs automatically",
            "Snapshots can be used to quickly restore data from misoperations"
        ],
        correct: [0, 1, 3],
        explanation: "EVS uses three-copy redundancy in a single AZ (not across AZs) and provides 9 nines of durability. Snapshots enable quick data restoration. However, three-copy redundancy only exists within one AZ, not across multiple AZs - backups to OBS provide cross-AZ protection."
    },
    {
        question: "A company needs to allow multiple ECSs in a private subnet to access the internet for software updates without assigning individual EIPs. What service should they use?",
        type: "multiple",
        options: [
            "VPC Peering Connection",
            "NAT Gateway with SNAT rules",
            "Security Groups",
            "Network ACL"
        ],
        correct: [1],
        explanation: "NAT Gateway with SNAT (Source Network Address Translation) rules allows multiple servers in a private subnet to share EIPs for outbound internet access, which is cost-effective and secure."
    },
    {
        question: "What is the maximum size of a single EVS disk?",
        type: "multiple",
        options: [
            "16 TB",
            "32 TB",
            "48 TB",
            "Unlimited"
        ],
        correct: [1],
        explanation: "According to the documentation, EVS supports disks up to 32 TB per disk. This is different from OBS which has no storage space limits and supports objects up to 48 TB."
    },
    {
        question: "Network ACLs deny all traffic by default when first associated with a subnet. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [0],
        explanation: "True. After a network ACL is associated with a subnet, it denies all traffic to and from that subnet by default until you add rules to allow specific traffic. This is a security-first approach."
    },
    {
        question: "Which billing mode offers the most stable discounts for long-term ECS usage?",
        type: "multiple",
        options: [
            "Pay-per-use",
            "Spot pricing",
            "Yearly/Monthly subscription",
            "Reserved instances"
        ],
        correct: [2],
        explanation: "Yearly/Monthly subscription billing offers stable discounts and is most suitable for long-term use. While reserved instances also offer stable discounts, the subscription model provides the most traditional and stable pricing for committed usage."
    },
    {
        question: "An ECS instance with specifications c6.8xlarge.4 has how many vCPUs?",
        type: "multiple",
        options: [
            "4 vCPUs",
            "8 vCPUs",
            "16 vCPUs",
            "32 vCPUs"
        ],
        correct: [2],
        explanation: "The '8xlarge' indicates the instance size. An xlarge typically has 2 vCPUs, so 8xlarge would have 8 × 2 = 16 vCPUs. The '.4' indicates a 4:1 memory-to-vCPU ratio (4 GiB per vCPU)."
    },
    {
        question: "Which services can be used to establish connectivity between VPCs? (Select all that apply)",
        type: "checkbox",
        options: [
            "VPC Peering Connection",
            "Security Groups",
            "VPN Connection",
            "EIP"
        ],
        correct: [0, 2],
        explanation: "VPC Peering Connection is specifically designed to connect VPCs in the same region. VPN connections can also be used to connect VPCs (mentioned in extended questions). Security Groups and EIP are not used for VPC-to-VPC connectivity."
    },
    {
        question: "OBS provides 99.9999999999% (12 nines) durability. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [0],
        explanation: "True. OBS provides 12 nines of durability (99.9999999999%) through multiple copies across multiple AZs, making it extremely reliable for data storage."
    },
    {
        question: "What is the primary difference between SNAT and DNAT in NAT Gateway?",
        type: "multiple",
        options: [
            "SNAT is for outbound traffic, DNAT is for inbound traffic",
            "SNAT is free, DNAT requires payment",
            "SNAT works with TCP only, DNAT works with UDP only",
            "SNAT requires EIP, DNAT does not"
        ],
        correct: [0],
        explanation: "SNAT (Source NAT) translates source IP addresses for outbound traffic, enabling private servers to access the internet. DNAT (Destination NAT) translates destination IP addresses for inbound traffic, allowing internet users to access services on private servers."
    },
    {
        question: "A security group has an inbound rule allowing ICMP from 0.0.0.0/0 and an outbound rule allowing all traffic to 0.0.0.0/0. What can instances in this security group do?",
        type: "multiple",
        options: [
            "Only respond to ping requests",
            "Ping other servers and be pinged by others",
            "Access any internet resource but cannot be accessed",
            "Both ping and establish any outbound connection"
        ],
        correct: [3],
        explanation: "With ICMP allowed inbound (for ping), all traffic allowed outbound, and security groups being stateful, instances can both ping others and be pinged, plus establish any outbound connections. The outbound rule allows all protocols and ports."
    },
    {
        question: "Which OBS storage class requires restoration before data can be accessed?",
        type: "multiple",
        options: [
            "OBS Standard",
            "OBS Infrequent Access",
            "OBS Archive",
            "All OBS storage classes"
        ],
        correct: [2],
        explanation: "OBS Archive storage class requires restoration before data can be accessed. This is a trade-off for the lowest storage costs and is designed for rarely accessed archival data."
    },
    {
        question: "SFS (Scalable File Service) can be accessed by ECSs in different VPCs without any additional configuration. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [1],
        explanation: "False. ECSs can only access an SFS file system in the same VPC. To access from another VPC, you need additional configurations like VPN or Direct Connect to establish connectivity between VPCs."
    },
    {
        question: "Which features are provided by Bare Metal Server (BMS)? (Select all that apply)",
        type: "checkbox",
        options: [
            "Dedicated computing resources with no virtualization overhead",
            "VPCs and security groups for network isolation",
            "Automatic scaling based on demand",
            "Disk backup and restoration"
        ],
        correct: [0, 1, 3],
        explanation: "BMS provides dedicated physical servers with no virtualization, network isolation through VPCs and security groups, and disk backup capabilities. However, BMS does not support automatic scaling like ECS, as it's a physical server dedicated to a single user."
    },
    {
        question: "What is the correct process for configuring a VPC peering connection?",
        type: "multiple",
        options: [
            "Create connection → Verify connectivity → Add routes",
            "Add routes → Create connection → Verify connectivity",
            "Create connection → Add routes → Verify connectivity",
            "Verify connectivity → Create connection → Add routes"
        ],
        correct: [2],
        explanation: "The correct order is: 1) Create a VPC peering connection selecting local and peer VPCs, 2) Add routes to the route tables of both local and peer VPCs, 3) Verify network connectivity between the VPCs."
    },
    {
        question: "An ECS has a local disk attached. What happens to the data on the local disk if the ECS is stopped?",
        type: "multiple",
        options: [
            "Data is preserved and available when ECS restarts",
            "Data is lost permanently",
            "Data is automatically backed up to OBS",
            "Data is migrated to EVS"
        ],
        correct: [1],
        explanation: "Local disks provide super-low latency and high IOPS but data is lost if ECSs are stopped or crashed. They offer no HA design and should only be used for temporary or easily reproducible data."
    },
    {
        question: "Which statement about EIP (Elastic IP) is correct?",
        type: "multiple",
        options: [
            "EIP can be bound to multiple cloud resources simultaneously",
            "EIP can only be billed by bandwidth",
            "EIP provides static public IP addresses with scalable bandwidth",
            "EIP is required for all ECS instances"
        ],
        correct: [2],
        explanation: "EIP provides static public IP addresses and scalable bandwidths. It can be bound to many cloud resources but only ONE at any given time. It supports multiple billing modes (bandwidth or traffic for pay-per-use). Not all ECS instances require EIP."
    },
    {
        question: "In a VPC with CIDR block 192.168.0.0/16, which subnet CIDR blocks are valid? (Select all that apply)",
        type: "checkbox",
        options: [
            "192.168.0.0/24",
            "192.168.1.0/24",
            "192.168.2.0/24",
            "10.0.0.0/24"
        ],
        correct: [0, 1, 2],
        explanation: "Subnets must be within the VPC's CIDR block. Since the VPC is 192.168.0.0/16, all subnets starting with 192.168.x.x are valid. The 10.0.0.0/24 subnet is outside the VPC's address range and therefore invalid."
    },
    {
        question: "Dedicated Host (DeH) allows multiple tenants to share the same physical server resources. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [1],
        explanation: "False. DeH provides a physical server fully dedicated for your own services in a single-tenant environment. The physical resources are not shared with others, meeting compliance requirements for exclusive use."
    },
    {
        question: "What is the durability level of SFS (Scalable File Service)?",
        type: "multiple",
        options: [
            "99.9999999% (9 nines)",
            "99.99999999% (10 nines)",
            "99.9999999999% (12 nines)",
            "99.999999999% (11 nines)"
        ],
        correct: [1],
        explanation: "SFS provides 10 nines of durability (99.99999999%) through three-copy redundancy across multiple AZs. This is higher than EVS (9 nines) but lower than OBS (12 nines)."
    },
    {
        question: "Which protocols does SFS support for file system access? (Select all that apply)",
        type: "checkbox",
        options: [
            "Full NFS protocol support",
            "Full CIFS protocol support",
            "Partial CIFS protocol support",
            "iSCSI protocol"
        ],
        correct: [0, 2],
        explanation: "SFS provides full NFS protocol support and partial CIFS protocol support. It does not support iSCSI, which is typically used for block storage protocols."
    },
    {
        question: "When creating a private image from an ECS, what is the recommended state for the ECS?",
        type: "multiple",
        options: [
            "Running",
            "Stopped",
            "Deleted",
            "Restarting"
        ],
        correct: [1],
        explanation: "When creating an image from an ECS, the ECS should be stopped. This ensures data consistency and prevents any file system corruption during the image creation process."
    },
    {
        question: "EVS billing is based on the amount of disk space actually used. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [1],
        explanation: "False. EVS pricing is based on the allocated disk size, regardless of how much space is actually used. Even if you only use 1 MB, the entire disk capacity is billed. This is different from OBS which bills based on actual usage."
    },
    {
        question: "Which services provide encryption capabilities? (Select all that apply)",
        type: "checkbox",
        options: [
            "EVS encryption",
            "OBS encryption",
            "SFS encryption",
            "VPC encryption"
        ],
        correct: [0, 1, 2],
        explanation: "EVS, OBS, and SFS all provide encryption capabilities for data security. VPC itself doesn't provide encryption, though VPN connections used with VPCs do encrypt traffic."
    },
    {
        question: "What is the maximum size of a single object in OBS?",
        type: "multiple",
        options: [
            "5 GB",
            "32 TB",
            "48 TB",
            "Unlimited"
        ],
        correct: [2],
        explanation: "OBS allows for the upload of a single object up to 48 TB. OBS has no limits on bucket quantity and storage space, but individual objects are capped at 48 TB."
    },
    {
        question: "A route table in a VPC can be deleted if it's no longer needed. True or False?",
        type: "boolean",
        options: ["True", "False"],
        correct: [1],
        explanation: "False. The default route table that comes with each VPC cannot be deleted. You can add, delete, or modify routes within it, but the table itself cannot be deleted as it's essential for VPC operations."
    },
    {
        question: "Which factors should influence your choice of region when deploying resources? (Select all that apply)",
        type: "checkbox",
        options: [
            "Compliance requirements",
            "User experience and latency",
            "Region-specific functions and features",
            "Cost optimization opportunities"
        ],
        correct: [0, 1, 2, 3],
        explanation: "All four factors are important when selecting a region: compliance is mandatory, user experience comes first for performance, functions are region-specific, and different regions may offer cost savings opportunities."
    },
    {
        question: "To expose a web service running on port 80 of an ECS with private IP 192.168.1.11 to the internet on port 8080, which NAT Gateway rule type should be used?",
        type: "multiple",
        options: [
            "SNAT rule with port mapping",
            "DNAT rule mapping EIP:8080 to 192.168.1.11:80",
            "Both SNAT and DNAT rules",
            "Network ACL rule"
        ],
        correct: [1],
        explanation: "DNAT (Destination Network Address Translation) is used to make internal services accessible from the internet. You would configure a DNAT rule mapping the EIP's port 8080 to the private IP 192.168.1.11 port 80, allowing external users to access the web service."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let quizTimer = null;
let quizTimerSeconds = 0;
let reviewMode = false;

function initQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(quizData.length).fill(null);
    answered = false;
    reviewMode = false;
    
    // Initialize quiz container with proper classes
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.className = 'quiz-container';
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <div class="quiz-question-counter">Question <span id="currentQuestion">1</span> of ${quizData.length}</div>
            <div class="quiz-timer" id="quizTimer">00:00</div>
        </div>
        
        <div class="quiz-progress">
            <div class="quiz-progress-fill" id="progressFill" style="width: 0%"></div>
        </div>
        
        <div class="quiz-content">
            <div class="quiz-question-text" id="questionText"></div>
            <div class="quiz-options-list" id="optionsContainer"></div>
            <div id="feedback" class="quiz-feedback" style="display:none;">
                <div class="feedback-content" id="feedbackContent"></div>
                <div class="explanation" id="explanationContent"></div>
            </div>
        </div>
        
        <div class="quiz-navigation">
            <button id="prevBtn" class="quiz-nav-btn quiz-prev-btn">Previous</button>
            <button id="submitBtn" class="quiz-nav-btn quiz-next-btn">Submit Answer</button>
            <button id="nextBtn" class="quiz-nav-btn quiz-next-btn" style="display:none;">Next</button>
        </div>
    `;
    
    // Start timer and set up event listeners
    startQuizTimer();
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitAnswer);
    
    // Add keyboard navigation for arrow keys
    document.addEventListener('keydown', handleArrowKeyNavigation);
    
    displayQuestion();
}

function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    
    // If in review mode, show answers immediately
    if (!reviewMode) {
        answered = false;
    } else {
        answered = true;
    }
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    
    const typeLabels = {
        'multiple': 'Multiple Choice',
        'boolean': 'True/False',
        'checkbox': 'Multiple Answers'
    };
    const questionTypeBadge = document.createElement('div');
    questionTypeBadge.className = 'quiz-question-type-badge';
    questionTypeBadge.textContent = typeLabels[question.type];
    document.querySelector('.quiz-content').prepend(questionTypeBadge);
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const inputType = question.type === 'checkbox' ? 'checkbox' : 'radio';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // In review mode, highlight correct and incorrect answers
        if (reviewMode && userAnswers[currentQuestionIndex]) {
            const userSelected = question.type === 'checkbox' ? 
                userAnswers[currentQuestionIndex].includes(index) : 
                userAnswers[currentQuestionIndex][0] === index;
                
            const isCorrect = question.correct.includes(index);
            
            if (isCorrect) {
                optionDiv.classList.add('correct');
            } else if (userSelected && !isCorrect) {
                optionDiv.classList.add('incorrect');
            }
        }
        
        const input = document.createElement('input');
        input.type = inputType;
        input.name = 'answer';
        input.id = `option${index}`;
        input.value = index;
        
        // Disable in review mode
        if (reviewMode) {
            input.disabled = true;
        }
        
        // Check if this question has been answered
        if (userAnswers[currentQuestionIndex]) {
            if (question.type === 'checkbox') {
                input.checked = userAnswers[currentQuestionIndex].includes(index);
            } else {
                input.checked = userAnswers[currentQuestionIndex][0] === index;
            }
            if (input.checked) {
                optionDiv.classList.add('selected');
            }
        }
        
        input.addEventListener('change', () => handleAnswerSelection(index, question.type));
        
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = option;
        
        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionDiv.addEventListener('click', (e) => {
            if (e.target !== input && !reviewMode) {
                input.click();
            }
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    const feedbackDiv = document.getElementById('feedback');
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Show feedback in review mode
    if (reviewMode && userAnswers[currentQuestionIndex]) {
        showFeedback();
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        feedbackDiv.style.display = 'none';
        submitBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        
        // If already answered, switch from Submit to Next
        if (answered) {
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'block';
        }
    }
}

function handleAnswerSelection(index, type) {
    if (reviewMode) return; // Prevent changes in review mode
    
    const options = document.querySelectorAll('.option');
    
    if (type === 'checkbox') {
        if (!userAnswers[currentQuestionIndex]) {
            userAnswers[currentQuestionIndex] = [];
        }
        
        const answerIndex = userAnswers[currentQuestionIndex].indexOf(index);
        if (answerIndex > -1) {
            userAnswers[currentQuestionIndex].splice(answerIndex, 1);
            options[index].classList.remove('selected');
        } else {
            userAnswers[currentQuestionIndex].push(index);
            options[index].classList.add('selected');
        }
    } else {
        userAnswers[currentQuestionIndex] = [index];
        options.forEach(opt => opt.classList.remove('selected'));
        options[index].classList.add('selected');
        
        // Auto-submit for single-answer questions (multiple choice and boolean)
        setTimeout(() => {
            submitAnswer();
        }, 300);
    }
    
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
        updateNavigationButtons();
        window.scrollTo(0, 0);
    } else if (reviewMode) {
        // If we're in review mode and at the end, go back to results
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
        updateNavigationButtons();
        window.scrollTo(0, 0);
    } else {
        // If we're at the start, go back to results
        showResults();
    }
}

function handleArrowKeyNavigation(event) {
    // Check if the quiz container is visible
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer || quizContainer.style.display === 'none') {
        return;
    }
    
    // Check if we're in an input field (to avoid interfering with text input)
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        // Only allow arrow navigation for radio/checkbox inputs
        if (activeElement.type !== 'radio' && activeElement.type !== 'checkbox') {
            return;
        }
    }
    
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previousQuestion();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        // If answer is submitted, go to next question
        if (answered) {
            nextQuestion();
        } else {
            // If answer is not submitted, submit it first
            const hasAnswer = userAnswers[currentQuestionIndex] && 
                             (userAnswers[currentQuestionIndex].length > 0);
            if (hasAnswer) {
                submitAnswer();
            }
        }
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Disable prev button on first question
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // In review mode, we always show next/prev buttons
    if (reviewMode) {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        return;
    }
    
    // Check if we have an answer selected
    const hasAnswer = userAnswers[currentQuestionIndex] && 
                     (userAnswers[currentQuestionIndex].length > 0);

    // Show submit button when answer is selected but not yet submitted
    if (hasAnswer && !answered) {
        submitBtn.disabled = false;
    } else if (!hasAnswer) {
        submitBtn.disabled = true;
    }
    
    // If answer is submitted, show next button instead
    if (answered) {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        
        // If last question, change next to Finish
        if (currentQuestionIndex === quizData.length - 1) {
            nextBtn.innerHTML = 'Finish Quiz <i class="fas fa-flag-checkered"></i>';
            nextBtn.addEventListener('click', submitQuiz, { once: true });
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
            // Remove the submit quiz event if it was added
            nextBtn.removeEventListener('click', submitQuiz);
        }
    } else {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
        
        // If last question, change button text
        if (currentQuestionIndex === quizData.length - 1) {
            submitBtn.innerHTML = 'Submit Answer';
        }
    }
}

// Submit the answer for the current question
function submitAnswer() {
    const question = quizData[currentQuestionIndex];
    
    // Make sure we have an answer
    if (!userAnswers[currentQuestionIndex] || userAnswers[currentQuestionIndex].length === 0) {
        alert('Please select an answer before submitting.');
        return;
    }
    
    // Mark as answered
    answered = true;
    
    // Show feedback
    showFeedback();
    
    // Update navigation
    updateNavigationButtons();
}

// Show feedback for current question
function showFeedback() {
    const question = quizData[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = question.correct;
    
    const feedbackDiv = document.getElementById('feedback');
    const feedbackContent = document.getElementById('feedbackContent');
    const explanationContent = document.getElementById('explanationContent');
    
    // Sort arrays to compare properly
    const sortedUserAnswer = [...userAnswer].sort((a, b) => a - b);
    const sortedCorrectAnswer = [...correctAnswer].sort((a, b) => a - b);
    
    // Check if answer is correct
    const isCorrect = JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);
    
    // Update feedback content
    if (isCorrect) {
        feedbackContent.innerHTML = `<div class="correct-answer"><i class="fas fa-check-circle"></i> Correct!</div>`;
    } else {
        let correctOptions = correctAnswer.map(index => question.options[index]).join(', ');
        feedbackContent.innerHTML = `<div class="incorrect-answer"><i class="fas fa-times-circle"></i> Incorrect</div>`;
    }
    
    // Show explanation
    explanationContent.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
    
    // Display the feedback
    feedbackDiv.style.display = 'block';
}

function submitQuiz() {
    // Stop the timer
    stopQuizTimer();
    
    score = 0;
    
    quizData.forEach((question, index) => {
        if (userAnswers[index]) {
            const userAnswer = [...userAnswers[index]].sort((a, b) => a - b);
            const correctAnswer = [...question.correct].sort((a, b) => a - b);
            
            if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
                score++;
            }
        }
    });
    
    showResults();
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.querySelector('.quiz-question-container').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'block';
    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block';
    
    const percentage = Math.round((score / quizData.length) * 100);
    const timeDisplay = formatTime(quizTimerSeconds);
    
    // Determine result class based on score percentage
    let resultClass = 'excellent';
    if (percentage < 70) {
        resultClass = 'needs-improvement';
    } else if (percentage < 85) {
        resultClass = 'good';
    }
    
    // Create results HTML
    resultsContainer.innerHTML = `
        <div class="quiz-results-header ${resultClass}">
            <div class="results-icon">
                <i class="fas ${percentage >= 85 ? 'fa-trophy' : percentage >= 70 ? 'fa-star' : 'fa-exclamation-triangle'}"></i>
            </div>
            <h2 class="results-title">${percentage >= 85 ? 'Excellent!' : percentage >= 70 ? 'Good Job!' : 'Needs Improvement'}</h2>
            <p class="results-subtitle">You've completed the quiz!</p>
        </div>
        
        <div class="quiz-results-stats">
            <div class="result-stat-card">
                <div class="stat-value">${percentage}%</div>
                <div class="stat-label">Score</div>
            </div>
            <div class="result-stat-card">
                <div class="stat-value">${score}</div>
                <div class="stat-label">Correct</div>
            </div>
            <div class="result-stat-card">
                <div class="stat-value">${quizData.length - score}</div>
                <div class="stat-label">Incorrect</div>
            </div>
            <div class="result-stat-card">
                <div class="stat-value">${timeDisplay}</div>
                <div class="stat-label">Time</div>
            </div>
        </div>
        
        <div class="quiz-results-actions">
            <button id="reviewBtn" class="quiz-action-btn secondary">
                <i class="fas fa-search"></i> Review Answers
            </button>
            <button id="finishBtn" class="quiz-action-btn primary">
                <i class="fas fa-home"></i> Finish
            </button>
        </div>
    `;
    
    // Add event listeners
    document.getElementById('reviewBtn').addEventListener('click', reviewAnswers);
    document.getElementById('finishBtn').addEventListener('click', () => {
        // Reset quiz state and return to main quiz selection
        restartQuiz();
        // Could add code here to navigate back to quiz selection if needed
    });
    
    window.scrollTo(0, 0);
}

function restartQuiz() {
    // Reset all quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(quizData.length).fill(null);
    answered = false;
    reviewMode = false;
    quizTimerSeconds = 0;
    
    // Reset UI
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'none';
    document.querySelector('.quiz-question-container').style.display = 'block';
    document.getElementById('restartBtn').style.display = 'none';
    
    // Restart quiz
    initQuiz();
    window.scrollTo(0, 0);
}

// Review answers after completing the quiz
function reviewAnswers() {
    reviewMode = true;
    currentQuestionIndex = 0;
    
    // Show the question container again
    document.querySelector('.quiz-question-container').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'block';
    
    // Update the display
    displayQuestion();
    updateProgress();
    updateNavigationButtons();
}

// Timer functions
function startQuizTimer() {
    // Reset timer
    quizTimerSeconds = 0;
    updateTimerDisplay();
    
    // Start interval
    quizTimer = setInterval(() => {
        quizTimerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopQuizTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('quizTimer');
    if (timerElement) {
        timerElement.textContent = formatTime(quizTimerSeconds);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// NOTE: Quiz initialization is now handled by quiz-manager.js
// The quiz-manager.js file will show the quiz selection screen first,
// then initialize the appropriate quiz when the user selects Quiz 1 or Quiz 2