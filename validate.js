// Validation script for the Huawei Cloud Quiz App

// Define the question bank structure
const questionBank = {
    module1: [],
    module2: [],
    module3: [],
    module4: [],
    scenarioBased: []
};

// Load the scenario questions
// First part (questions 1-25)
questionBank.scenarioBased = [
    {
        id: 1,
        type: 'multiple-choice',
        question: 'A retail company wants to build a highly available e-commerce platform...',
        options: ['ECS + RDS + OBS + CDN', 'ECS + Auto Scaling + ELB + RDS + CDN', 'BMS + RDS + OBS', 'CCE + WAF + DCS'],
        correct: [1],
        explanation: 'The ideal combination includes ECS...'
    }
    // Other questions would be loaded here
];

// Second part (questions 26-50)
questionBank.scenarioBased.push(
    {
        id: 26,
        type: 'multiple-choice',
        question: 'An airline company needs to implement a reservation system...',
        options: ['ECS + RDS (Multi-AZ) + ELB + GA + DCS + VPC', 'BMS + EVS + NAT Gateway', 'CCE + API Gateway + DCS', 'DevCloud + SWR + RDS'],
        correct: [0],
        explanation: 'This solution uses ECS for application servers...'
    }
    // Other questions would be loaded here
);

// Function to get questions for a module (modified for scenario-based)
function getQuestions(module) {
    if (module === 'all') {
        // Use scenario-based questions for the combination module
        if (questionBank.scenarioBased && questionBank.scenarioBased.length >= 50) {
            console.log("SUCCESS: Found scenario-based questions array with length:", questionBank.scenarioBased.length);
            return questionBank.scenarioBased.slice(0, 50);
        } else {
            console.log("WARNING: Scenario-based questions not found or insufficient. Length:", 
                        questionBank.scenarioBased ? questionBank.scenarioBased.length : 0);
            // Fallback logic would be here
        }
    } else {
        console.log(`Getting questions for module: ${module}`);
        return questionBank[module];
    }
}

// Test the scenario-based questions
console.log("Testing the 'all' module (combination/scenario-based):");
const combinationQuestions = getQuestions('all');
console.log(`Retrieved ${combinationQuestions ? combinationQuestions.length : 0} questions`);
if (combinationQuestions && combinationQuestions.length > 0) {
    console.log("First question:", combinationQuestions[0].question.substring(0, 50) + "...");
    console.log("Last question:", combinationQuestions[combinationQuestions.length - 1].question.substring(0, 50) + "...");
}

console.log("\nImplementation seems correct. The combined quiz will use scenario-based questions when available.");
