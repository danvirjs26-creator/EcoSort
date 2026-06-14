# 🚀 Quick Setup Guide - EcoSort AI

## Option 1: Quick Start (No API Required)

**Perfect for testing and offline use!**

1. Open `index.html` in your browser
2. Start classifying waste items immediately
3. No configuration needed!

The app works perfectly with intelligent rule-based classification.

---

## Option 2: AI-Powered Setup (IBM Granite API)

**For enhanced AI-powered classifications:**

### Step 1: Get IBM Granite API Key

1. Go to [IBM Cloud](https://cloud.ibm.com/)
2. Sign up for a free account (or log in)
3. Navigate to **Watson AI** → **Granite Models**
4. Click **Create API Key**
5. Copy your API key (keep it secure!)

### Step 2: Configure EcoSort AI

**Windows:**
```powershell
# In the ecowaste-ai directory
Copy-Item api-config.example.js api-config.js
```

**Mac/Linux:**
```bash
# In the ecowaste-ai directory
cp api-config.example.js api-config.js
```

### Step 3: Add Your API Key

Open `api-config.js` in a text editor and update:

```javascript
const API_CONFIG = {
    IBM_GRANITE: {
        API_KEY: 'paste-your-api-key-here',  // ← Add your key
        USE_API: true,                        // ← Change to true
        // ... rest stays the same
    }
};
```

### Step 4: Test It!

1. Open `index.html` in your browser
2. Open browser console (F12)
3. Look for: `"Using IBM Granite API for classification..."`
4. Try classifying an item!

---

## 🔍 Verification Checklist

- [ ] `api-config.js` file exists (not the .example file)
- [ ] API key is pasted correctly (no quotes issues)
- [ ] `USE_API: true` is set
- [ ] Browser console shows no errors
- [ ] Internet connection is active

---

## 🐛 Troubleshooting

### "API config not found" in console
✅ **Solution**: Copy `api-config.example.js` to `api-config.js`

### Classifications still work but no API message
✅ **Solution**: This is normal! App is using offline mode (which works great)

### "API request failed" error
✅ **Check**:
- API key is correct
- IBM Cloud account is active
- Internet connection works
- No typos in the API key

### Want to switch back to offline mode?
✅ **Solution**: Set `USE_API: false` in `api-config.js`

---

## 📊 Mode Comparison

### Offline Mode (Default)
- ✅ Works instantly
- ✅ No setup required
- ✅ No internet needed
- ✅ Free forever
- ✅ Fast responses
- ⚠️ Limited to known items

### API Mode (Optional)
- ✅ AI-powered intelligence
- ✅ Better unknown item handling
- ✅ More detailed explanations
- ✅ Contextual understanding
- ⚠️ Requires internet
- ⚠️ API usage costs

---

## 💡 Pro Tips

1. **Start with offline mode** to test the app
2. **Add API later** if you need AI features
3. **Keep api-config.js secure** (it's git-ignored)
4. **Check browser console** for helpful debug info
5. **Both modes work great** - choose what fits your needs!

---

## 🆘 Need Help?

- Check the main [README.md](README.md) for detailed docs
- Open browser console (F12) for error messages
- Verify all files are in the correct locations
- Make sure you're using a modern browser

---

**Ready to classify waste? Open `index.html` and start! 🌱**