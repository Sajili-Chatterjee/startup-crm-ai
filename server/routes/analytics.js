const express = require("express");

const router = express.Router();

const {
    getKPIs,
    getLeadGrowth,
    getCategoryAnalytics,
    getFunnelAnalytics,
} = require("../controllers/analyticsController");

router.get("/kpis", getKPIs);

router.get(
    "/leads-growth",
    getLeadGrowth
);

router.get(
    "/categories",
    getCategoryAnalytics
);

router.get(
    "/funnel",
    getFunnelAnalytics
);

module.exports = router;