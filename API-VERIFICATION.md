# 🔍 How to Verify IBM Granite API is Working

## Quick Verification Steps

### 1. Check the Visual Indicator

When you open the app, look at the header section:

- **🤖 AI Mode Active (IBM Granite)** with a green pulsing dot = API is enabled
- **📚 Offline Mode (Rule-Based)** with a yellow dot = API is disabled

### 2. Open Browser Console

**Windows/Linux:** Press `F12` or `Ctrl + Shift + I`  
**Mac:** Press `Cmd + Option + I`

Look for these messages when the app loads:

#### ✅ API Mode Active:
```
🌱 EcoSort AI initialized successfully
═══════════════════════════════════════
✅ API MODE: IBM Granite API is ENABLED
📡 API URL: https://api.ibm.com/watsonx/v1/generate
🤖 Model: ibm/granite-13b-chat-v2
🔑 API Key: ✓ Configured
═══════════════════════════════════════
```

#### ℹ️ Offline Mode:
```
🌱 EcoSort AI initialized successfully
═══════════════════════════════════════
ℹ️ OFFLINE MODE: Using rule-based classification
💡 To enable API: Set USE_API: true in api-config.js
═══════════════════════════════════════
```

### 3. Test a Classification

Enter any item (e.g., "plastic bottle") and click Classify.

Watch the console for:

#### ✅ Using API:
```
═══════════════════════════════════════
🔍 Classifying: plastic bottle
Mode: API (IBM Granite)
🤖 Using IBM Granite API for classification...
📤 Sending request to: https://api.ibm.com/watsonx/v1/generate
📥 Received AI response successfully
✅ Classification complete!
Category: Recyclable
═══════════════════════════════════════
```

#### ℹ️ Using Offline Mode:
```
═══════════════════════════════════════
🔍 Classifying: plastic bottle
Mode: Offline (Rule-Based)
📚 Using offline rule-based classification
✅ Classification complete!
Category: Recyclable
═══════════════════════════════════════
```

## Troubleshooting

### API Not Activating?

**Check your `api-config.js` file:**

```javascript
const API_CONFIG = {
    IBM_GRANITE: {
        API_KEY: 'your-actual-key-here',  // ← Must have your real key
        USE_API: true,                     // ← Must be true
        // ...
    }
};
```

### Common Issues:

| Issue | Solution |
|-------|----------|
| No `api-config.js` file | Copy from `api-config.example.js` |
| `USE_API: false` | Change to `true` |
| Empty API_KEY | Add your IBM Granite API key |
| Console shows "API config not found" | File is missing or misnamed |
| "API request failed" | Check API key validity |

### Verify API Key Format

Your API key should look something like:
```
pak-AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
```

If it doesn't start with a prefix like `pak-` or similar, it might be incorrect.

## Testing Both Modes

### Test API Mode:
1. Set `USE_API: true` in `api-config.js`
2. Refresh the page
3. Check for green "AI Mode Active" indicator
4. Classify an item
5. Watch console for API messages

### Test Offline Mode:
1. Set `USE_API: false` in `api-config.js`
2. Refresh the page
3. Check for yellow "Offline Mode" indicator
4. Classify an item
5. Watch console for offline messages

## Expected Behavior

### API Mode Benefits:
- More nuanced classifications
- Better handling of unusual items
- Contextual understanding
- Detailed explanations

### Offline Mode Benefits:
- Instant responses
- No internet required
- No API costs
- Reliable fallback

## Still Not Sure?

1. **Clear browser cache** and reload
2. **Check browser console** for any red error messages
3. **Verify internet connection** (for API mode)
4. **Test with a simple item** like "battery" or "paper"
5. **Compare results** between API and offline modes

## Success Indicators

✅ Visual indicator shows correct mode  
✅ Console logs show expected messages  
✅ Classifications work properly  
✅ No red errors in console  
✅ Mode switches when you change config  

---

**Need more help?** Check the main [README.md](README.md) or [SETUP.md](SETUP.md)