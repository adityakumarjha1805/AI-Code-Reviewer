const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const prompt = req.body.prompt;

    if (!prompt) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(prompt);
        res.send(response);
    } catch (error) {
        console.error("Error generating review:", error.message);
        res.status(500).send({
            error: "Failed to generate code review",
            message: error.message
        });
    }

}