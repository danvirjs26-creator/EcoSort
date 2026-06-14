# 🌱 EcoSort AI - Intelligent Waste Classification System

<div align="center">

**An intelligent AI-powered sustainability assistant for waste classification and management**

[Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API Setup](#-api-setup) • [Contributing](#-contributing)

</div>

---

## 📖 About

EcoSort AI is a modern web application that helps users properly classify and dispose of waste items. Using IBM Granite AI or intelligent rule-based classification, it provides detailed disposal instructions, environmental impact information, and sustainability tips to promote eco-friendly practices.

### 🎯 Mission
Helping create a sustainable future by making waste management easier and more accessible for everyone.

---

## ✨ Features

### 🔍 Waste Classification
- **5 Categories**: Recyclable, Compostable, Hazardous Waste, Electronic Waste, General Waste
- **Instant Results**: Get classification in seconds
- **Detailed Information**: Disposal methods, environmental impact, sustainability tips
- **Quick Examples**: Pre-loaded common items for testing

### 💬 AI Chat Assistant
- **Interactive Q&A**: Ask anything about waste management and sustainability
- **Dual Mode**: AI-powered (IBM Granite) or intelligent offline responses
- **Natural Conversations**: Responds to greetings, questions, and casual chat
- **Quick Suggestions**: Common questions available with one click
- **Visual Indicators**: See which mode (AI/Offline) is responding

### 🎨 Modern UI/UX
- **Attractive Design**: Vibrant gradients and smooth animations
- **Tab-Based Interface**: Easy switching between classification and chat
- **Responsive**: Works on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, ripples, and transitions
- **Accessibility**: Clear visual feedback and intuitive navigation

### 🤖 AI Integration
- **IBM Granite API**: ChatGPT-like intelligent responses
- **Automatic Fallback**: Seamless switch to offline mode if API unavailable
- **Context Awareness**: Maintains conversation history
- **Flexible Topics**: Handles any sustainability question

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: IBM Granite API key for AI features

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecowaste-ai.git
cd ecowaste-ai
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

3. **Start using!**
- No build process required
- No dependencies to install
- Works immediately in offline mode

---

## 🔧 API Setup (Optional)

To enable AI-powered responses:

### Step 1: Get IBM Granite API Key
1. Visit [IBM Cloud](https://cloud.ibm.com/)
2. Sign up or log in
3. Navigate to Watson AI → Granite Models
4. Create an API key

### Step 2: Configure
```bash
# Copy the example config
cp api-config.example.js api-config.js
```

### Step 3: Add Your Key
Edit `api-config.js`:
```javascript
const API_CONFIG = {
    IBM_GRANITE: {
        API_KEY: 'your-api-key-here',  // Add your key
        USE_API: true,                  // Enable API mode
        // ... other settings
    }
};
```

### Step 4: Verify
- Refresh the app
- Check browser console (F12)
- Look for: `✅ API MODE: IBM Granite API is ENABLED`

---

## 💻 Usage

### Classification Mode
1. Click **"Classify Waste"** tab
2. Enter a waste item (e.g., "plastic bottle")
3. Click **"Classify"** or press Enter
4. View detailed results

### Chat Mode
1. Click **"Ask AI Assistant"** tab
2. Type your question or click a suggestion
3. Get instant, helpful responses
4. Continue the conversation naturally

### Example Questions
- "How do I start composting at home?"
- "What plastics can be recycled?"
- "How to dispose of batteries safely?"
- "Why is recycling important?"
- "Hi" (try casual conversation!)

---

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: IBM Granite API (optional)
- **Storage**: LocalStorage for statistics
- **Design**: Custom CSS with animations
- **Architecture**: Modular JavaScript classes

-

---

## 🔍 How It Works

### Classification Algorithm
1. **Input Processing**: Normalizes and validates user input
2. **API Attempt**: Tries IBM Granite AI if configured
3. **Fallback**: Uses intelligent rule-based system
4. **Pattern Matching**: Analyzes keywords and materials
5. **Response**: Returns detailed classification data

### Chat System
1. **Dual Mode**: AI API or offline responses
2. **Context Aware**: Maintains conversation history
3. **Natural Language**: Understands casual conversation
4. **Visual Feedback**: Shows which mode is responding
5. **Comprehensive**: Covers all sustainability topics



<div align="center">

**Made with 💚 for a sustainable future**

*EcoSort AI - Helping create a cleaner planet, one classification at a time.*

⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#-ecosort-ai---intelligent-waste-classification-system)

</div>
