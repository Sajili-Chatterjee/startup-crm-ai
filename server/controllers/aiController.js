const askGemini = require("../services/geminiService");

exports.askAssistant = async (req, res) => {
    try {
        const { message } = req.body;

        const enhancedPrompt = `
    You are an AI startup advisor for Startup CRM AI Platform.

    Answer professionally regarding:
    - startup funding
    - compliance
    - business registration
    - investor readiness
    - startup scaling
    - virtual CFO guidance

    User Question:
    ${message}
    `;

        const response = await askGemini(
            enhancedPrompt
        );

        res.json({
            reply: response,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "AI Assistant Error",
        });
    }
};