module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to My new REST API project");
    });

    app.use("/product", require("./product"));
    app.use("/review", require("./review"));
    app.use("/user", require("./user"));
    
}