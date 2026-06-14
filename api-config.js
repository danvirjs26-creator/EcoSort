// EcoSort AI - API Configuration
// ADD YOUR IBM GRANITE API KEY BELOW

const API_CONFIG = {
    IBM_GRANITE: {
        // ============================================
        // STEP 1: PASTE YOUR API KEY HERE
        // ============================================
        // Replace 'your-ibm-granite-api-key-here' with your actual API key
        // Example: API_KEY: 'pak-AbCdEfGhIjKlMnOpQrStUvWxYz1234567890',
        
        API_KEY: 'avrWJy2VZqJGrNm_r2UTbyO0s2K2HBeY8dhaggdpQe5p',
        
        // ============================================
        // STEP 2: CHANGE THIS TO true
        // ============================================
        // Set to true to enable AI mode (ChatGPT-like responses)
        // Set to false to use offline mode (rule-based responses)
        
        USE_API: true,
        
        // ============================================
        // THESE SETTINGS ARE ALREADY CONFIGURED
        // (You don't need to change these)
        // ============================================
        
        API_URL: 'https://eu-de.ml.cloud.ibm.com',
        MODEL: 'ibm/granite-13b-chat-v2',
        MAX_TOKENS: 500,
        TEMPERATURE: 0.7,
        TOP_P: 0.9,
        TOP_K: 50
    }
};

// Make config available globally
window.API_CONFIG = API_CONFIG;

// ============================================
// QUICK SETUP GUIDE
// ============================================
// 
// 1. Get your IBM Granite API key from: https://cloud.ibm.com/
// 2. Replace 'your-ibm-granite-api-key-here' with your actual key
// 3. Change USE_API from false to true
// 4. Save this file
// 5. Refresh the app in your browser
// 6. Check browser console (F12) to verify API is active
//
// That's it! Your AI will now work like ChatGPT!
// ============================================

// Made with Bob
