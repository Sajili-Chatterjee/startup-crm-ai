const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
    try {
        const lead = await Lead.create(req.body);

        res.status(201).json(lead);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({
            createdAt: -1,
        });

        res.json(leads);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.updateLeadStatus = async (
    req,
    res
) => {
    try {
        const updatedLead =
            await Lead.findByIdAndUpdate(
                req.params.id,

                {
                    status: req.body.status,
                },

                {
                    new: true,
                }
            );

        res.json(updatedLead);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to update lead",
        });
    }
};