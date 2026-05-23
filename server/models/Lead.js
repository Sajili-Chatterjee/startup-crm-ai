const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },

        founderName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        startupStage: {
            type: String,
            required: true,
        },

        servicesInterested: {
            type: String,
            required: true,
        },

        startupCategory: {
            type: String,
            default: "SaaS",
        },

        status: {
            type: String,

            enum: [
                "New Lead",
                "Discovery Call",
                "Proposal Sent",
                "Investor Ready",
                "Client",
            ],

            default: "New Lead",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Lead",
    leadSchema
);