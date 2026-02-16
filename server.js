const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 4500;

// read compatibility
const serviceInfo = JSON.parse(
    fs.readFileSync("./compatibility.json", "utf8")
);

// Health check
app.get("/", (req, res) => {
    res.send("Dashboard service is running");
});

// Version + dependency contract
app.get("/service-info", (req, res) => {
    res.json(serviceInfo);
});

// Dummy dashboard api
app.get("/dashboard", (req, res) => {
    res.json({
        message: "Dashboard data loaded",
        service: "dashboard",
        version: serviceInfo.version
    });
});

app.listen(PORT, () => {
    console.log(`Dashboard service running on ${PORT}`);
});
