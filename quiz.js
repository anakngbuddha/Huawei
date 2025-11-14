// Huawei Cloud Certification Quiz System
// Question Bank organized by modules

const questionBank = {
    module1: [], // Will be populated
    module2: [], // Will be populated
    module3: [], // Will be populated
    module4: []  // Will be populated
};

// Quiz state management
let currentQuiz = {
    module: null,
    questions: [],
    currentQuestion: 0,
    answers: {},
    score: 0,
    startTime: null,
    endTime: null
};

// Initialize quiz when tab is opened
function initQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="quiz-home">
            <div class="quiz-header-section">
                <div class="quiz-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h1 class="quiz-main-title">Huawei Cloud Certification Quiz</h1>
                <p class="quiz-subtitle">Test your knowledge across different modules</p>
            </div>
            
            <div class="quiz-modules-grid">
                <div class="quiz-module-card" onclick="startQuiz('module1')">
                    <div class="module-icon">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <h3>Module 1</h3>
                    <p>Diving into Huawei Cloud</p>
                    <span class="module-questions">30 Questions</span>
                </div>
                
                <div class="quiz-module-card" onclick="startQuiz('module2')">
                    <div class="module-icon">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3>Module 2</h3>
                    <p>Compute Services</p>
                    <span class="module-questions">30 Questions</span>
                </div>
                
                <div class="quiz-module-card" onclick="startQuiz('module3')">
                    <div class="module-icon">
                        <i class="fas fa-database"></i>
                    </div>
                    <h3>Module 3</h3>
                    <p>Storage Services</p>
                    <span class="module-questions">30 Questions</span>
                </div>
                
                <div class="quiz-module-card" onclick="startQuiz('module4')">
                    <div class="module-icon">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <h3>Module 4</h3>
                    <p>Networking Services</p>
                    <span class="module-questions">30 Questions</span>
                </div>
                
                <div class="quiz-module-card quiz-all-modules" onclick="startQuiz('all')">
                    <div class="module-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>All Modules</h3>
                    <p>Combined Certification Exam</p>
                    <span class="module-questions">50 Questions</span>
                </div>
            </div>
            
            <div class="quiz-stats-section">
                <div class="quiz-stat">
                    <i class="fas fa-clock"></i>
                    <span>No time limit</span>
                </div>
                <div class="quiz-stat">
                    <i class="fas fa-check-circle"></i>
                    <span>Detailed explanations</span>
                </div>
                <div class="quiz-stat">
                    <i class="fas fa-trophy"></i>
                    <span>Track your progress</span>
                </div>
            </div>
        </div>
    `;
}

// Start quiz for selected module
function startQuiz(module) {
    currentQuiz = {
        module: module,
        questions: getQuestions(module),
        currentQuestion: 0,
        answers: {},
        score: 0,
        startTime: new Date(),
        endTime: null
    };
    
    showQuestion();
}

// Get questions for module
function getQuestions(module) {
    if (module === 'all') {
        // Use scenario-based questions for the combination module
        if (questionBank.scenarioBased && questionBank.scenarioBased.length >= 50) {
            return shuffleArray([...questionBank.scenarioBased]).slice(0, 50);
        } else {
            // Fallback to the old method if scenario questions aren't loaded
            console.log("Scenario-based questions not found. Using regular questions mix.");
            const allQuestions = [];
            const questionsPerModule = 12; // 12 * 4 = 48, plus 2 random
            
            ['module1', 'module2', 'module3', 'module4'].forEach(mod => {
                const moduleQuestions = [...questionBank[mod]];
                const selected = shuffleArray(moduleQuestions).slice(0, questionsPerModule);
                allQuestions.push(...selected);
            });
            
            // Add 2 more random questions
            const extraModule = ['module1', 'module2', 'module3', 'module4'][Math.floor(Math.random() * 4)];
            const extraQuestions = shuffleArray([...questionBank[extraModule]]).slice(0, 2);
            allQuestions.push(...extraQuestions);
            
            return shuffleArray(allQuestions);
        }
    } else {
        return shuffleArray([...questionBank[module]]).slice(0, 30);
    }
}

// Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Show current question
function showQuestion() {
    const container = document.getElementById('quiz-container');
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    const progress = ((currentQuiz.currentQuestion) / currentQuiz.questions.length) * 100;
    
    let optionsHTML = '';
    const isMultiAnswer = question.type === 'multiple-answer';
    
    question.options.forEach((option, index) => {
        const inputType = isMultiAnswer ? 'checkbox' : 'radio';
        const checked = currentQuiz.answers[question.id] && currentQuiz.answers[question.id].includes(index) ? 'checked' : '';
        
        optionsHTML += `
            <label class="quiz-option ${checked ? 'selected' : ''}" onclick="selectOption(${question.id}, ${index}, ${isMultiAnswer})">
                <input type="${inputType}" name="q${question.id}" value="${index}" ${checked}>
                <span class="option-text">${option}</span>
                <span class="option-indicator"></span>
            </label>
        `;
    });
    
    container.innerHTML = `
        <div class="quiz-question-container">
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${progress}%"></div>
            </div>
            
            <div class="quiz-header">
                <button class="quiz-back-btn" onclick="exitQuiz()">
                    <i class="fas fa-arrow-left"></i> Exit Quiz
                </button>
                <span class="quiz-question-counter">
                    Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}
                </span>
            </div>
            
            <div class="quiz-content">
                <div class="quiz-question-type-badge ${question.type}">
                    ${question.type === 'true-false' ? 'True/False' : 
                      question.type === 'multiple-choice' ? 'Single Choice' : 
                      'Multiple Answers'}
                </div>
                
                <h2 class="quiz-question-text">${question.question}</h2>
                
                ${isMultiAnswer ? '<p class="quiz-instruction">Select all that apply</p>' : ''}
                
                <div class="quiz-options-list">
                    ${optionsHTML}
                </div>
                
                <div class="quiz-navigation">
                    ${currentQuiz.currentQuestion > 0 ? 
                        '<button class="quiz-nav-btn quiz-prev-btn" onclick="previousQuestion()"><i class="fas fa-chevron-left"></i> Previous</button>' : 
                        '<div></div>'}
                    <button class="quiz-nav-btn quiz-next-btn" onclick="nextQuestion()">
                        ${currentQuiz.currentQuestion < currentQuiz.questions.length - 1 ? 'Next <i class="fas fa-chevron-right"></i>' : 'Finish <i class="fas fa-check"></i>'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Select option
function selectOption(questionId, optionIndex, isMultiAnswer) {
    if (!currentQuiz.answers[questionId]) {
        currentQuiz.answers[questionId] = [];
    }
    
    if (isMultiAnswer) {
        const index = currentQuiz.answers[questionId].indexOf(optionIndex);
        if (index > -1) {
            currentQuiz.answers[questionId].splice(index, 1);
        } else {
            currentQuiz.answers[questionId].push(optionIndex);
        }
    } else {
        currentQuiz.answers[questionId] = [optionIndex];
    }
    
    // Re-render to update selection
    showQuestion();
}

// Next question
function nextQuestion() {
    if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
        currentQuiz.currentQuestion++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuiz.currentQuestion > 0) {
        currentQuiz.currentQuestion--;
        showQuestion();
    }
}

// Finish quiz and show results
function finishQuiz() {
    currentQuiz.endTime = new Date();
    calculateScore();
    showResults();
}

// Calculate score
function calculateScore() {
    let correct = 0;
    
    currentQuiz.questions.forEach(question => {
        const userAnswer = currentQuiz.answers[question.id] || [];
        const correctAnswer = question.correct;
        
        if (JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswer.sort())) {
            correct++;
        }
    });
    
    currentQuiz.score = correct;
}

// Show results
function showResults() {
    const container = document.getElementById('quiz-container');
    const percentage = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);
    const timeTaken = Math.round((currentQuiz.endTime - currentQuiz.startTime) / 1000 / 60);
    
    let performanceClass = 'excellent';
    let performanceText = 'Excellent!';
    let performanceIcon = 'fa-trophy';
    
    if (percentage < 50) {
        performanceClass = 'needs-improvement';
        performanceText = 'Keep Learning';
        performanceIcon = 'fa-book';
    } else if (percentage < 70) {
        performanceClass = 'good';
        performanceText = 'Good Job!';
        performanceIcon = 'fa-thumbs-up';
    } else if (percentage < 90) {
        performanceClass = 'very-good';
        performanceText = 'Great Work!';
        performanceIcon = 'fa-star';
    }
    
    container.innerHTML = `
        <div class="quiz-results-container">
            <div class="quiz-results-header ${performanceClass}">
                <div class="results-icon">
                    <i class="fas ${performanceIcon}"></i>
                </div>
                <h1 class="results-title">${performanceText}</h1>
                <p class="results-subtitle">You've completed the quiz</p>
            </div>
            
            <div class="quiz-results-stats">
                <div class="result-stat-card">
                    <div class="stat-value">${currentQuiz.score}</div>
                    <div class="stat-label">Correct Answers</div>
                </div>
                <div class="result-stat-card">
                    <div class="stat-value">${percentage}%</div>
                    <div class="stat-label">Score</div>
                </div>
                <div class="result-stat-card">
                    <div class="stat-value">${timeTaken}</div>
                    <div class="stat-label">Minutes</div>
                </div>
            </div>
            
            <div class="quiz-results-details">
                <h3>Review Your Answers</h3>
                <div class="quiz-review-list" id="reviewList"></div>
            </div>
            
            <div class="quiz-results-actions">
                <button class="quiz-action-btn secondary" onclick="initQuiz()">
                    <i class="fas fa-home"></i> Back to Home
                </button>
                <button class="quiz-action-btn primary" onclick="startQuiz('${currentQuiz.module}')">
                    <i class="fas fa-redo"></i> Retake Quiz
                </button>
            </div>
        </div>
    `;
    
    // Populate review list
    populateReviewList();
}

// Populate review list
function populateReviewList() {
    const reviewList = document.getElementById('reviewList');
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.answers[question.id] || [];
        const correctAnswer = question.correct;
        const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswer.sort());
        
        const userAnswerText = userAnswer.map(i => question.options[i]).join(', ') || 'No answer';
        const correctAnswerText = correctAnswer.map(i => question.options[i]).join(', ');
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `quiz-review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <div class="review-item-header">
                <span class="review-question-number">Question ${index + 1}</span>
                <span class="review-status-icon">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                </span>
            </div>
            <div class="review-question-text">${question.question}</div>
            <div class="review-answers">
                <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>Your Answer:</strong> ${userAnswerText}
                </div>
                ${!isCorrect ? `<div class="review-answer correct">
                    <strong>Correct Answer:</strong> ${correctAnswerText}
                </div>` : ''}
            </div>
            <div class="review-explanation">
                <strong><i class="fas fa-lightbulb"></i> Explanation:</strong>
                <p>${question.explanation}</p>
            </div>
        `;
        
        reviewList.appendChild(reviewItem);
    });
}

// Exit quiz
function exitQuiz() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        initQuiz();
    }
}

// Listen for tab changes to initialize quiz
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for the main app to load
    setTimeout(() => {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.target.id === 'quiz' && mutation.target.classList.contains('active')) {
                    initQuiz();
                }
            });
        });
        
        const quizTab = document.getElementById('quiz');
        if (quizTab) {
            observer.observe(quizTab, { attributes: true, attributeFilter: ['class'] });
        }
    }, 1000);
});
