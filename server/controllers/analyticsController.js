const Lead = require("../models/Lead");

exports.getKPIs = async (req, res) => {
    try {
        const totalLeads = await Lead.countDocuments();

        const investorReady = await Lead.countDocuments({
            status: "Investor Ready",
        });

        const clients = await Lead.countDocuments({
            status: "Client",
        });

        const conversionRate =
            totalLeads > 0
                ? ((clients / totalLeads) * 100).toFixed(1)
                : 0;

        res.json({
            totalLeads,
            investorReady,
            clients,
            conversionRate,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to fetch KPIs",
        });
    }
};

exports.getLeadGrowth = async (req, res) => {
    try {
        const growth = await Lead.aggregate([
            {
                $group: {
                    _id: {
                        month: {
                            $month: "$createdAt",
                        },
                    },

                    leads: {
                        $sum: 1,
                    },
                },
            },

            {
                $sort: {
                    "_id.month": 1,
                },
            },
        ]);

        const formatted = growth.map((item) => ({
            month: item._id.month,
            leads: item.leads,
        }));

        res.json(formatted);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to fetch lead growth",
        });
    }
};

exports.getCategoryAnalytics = async (
    req,
    res
) => {
    try {
        const categories = await Lead.aggregate([
            {
                $group: {
                    _id: "$startupCategory",

                    value: {
                        $sum: 1,
                    },
                },
            },
        ]);

        const formatted = categories.map(
            (item) => ({
                name: item._id,
                value: item.value,
            })
        );

        res.json(formatted);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message:
                "Failed to fetch category analytics",
        });
    }
};

exports.getFunnelAnalytics = async (
    req,
    res
) => {
    try {
        const funnel = await Lead.aggregate([
            {
                $group: {
                    _id: "$status",

                    count: {
                        $sum: 1,
                    },
                },
            },
        ]);

        res.json(funnel);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message:
                "Failed to fetch funnel analytics",
        });
    }
};