const bodyParser = require("body-parser");
const app = require("./routes/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", (req, res) => {
	res.send("<h2>It's the main page of my mmfutsal-app, i am glad to see you here!</h2>");
});

module.exports = app;