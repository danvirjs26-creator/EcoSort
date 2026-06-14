// EcoSort AI - API Configuration Template
// Copy this file to 'api-config.js' and add your IBM Granite API credentials

const API_CONFIG = {
    // IBM Granite API Settings
    IBM_GRANITE: {
        // Get your API key from: https://cloud.ibm.com/
        API_KEY: 'your-ibm-granite-api-key-here',
        
        // IBM Granite API endpoint
        API_URL: 'https://api.ibm.com/watsonx/v1/generate',
        
        // Model to use (Granite 13B Chat is recommended for this task)
        MODEL: 'ibm/granite-13b-chat-v2',
        
        // Enable/disable API usage (set to true when you have a valid API key)
        USE_API: false,
        
        // Generation parameters
        MAX_TOKENS: 500,
        TEMPERATURE: 0.7,
        TOP_P: 0.9,
        TOP_K: 50
    }
};

// Make config available globally
window.API_CONFIG = API_CONFIG;

// Made with Bob
