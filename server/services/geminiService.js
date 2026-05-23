const axios = require("axios");

const askGemini = async (prompt) => {
    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-3.5-turbo",

                messages: [
                    {
                        role: "system",
                        content:
                            "You are a professional startup advisor and virtual CFO assistant.",
                    },

                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "Startup CRM AI",
                },
            }
        );

        return response.data.choices[0]
            .message.content;

    } catch (error) {
        console.log(
            "OpenRouter Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};

module.exports = askGemini;