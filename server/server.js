const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("CRM API Running");
});
app.use("/api/leads", require("./routes/leads"));
app.use(
    "/api/analytics",
    require("./routes/analytics")
);
app.use(
    "/api/auth",
    require("./routes/auth")
);
app.use("/api/ai", require("./routes/ai"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});