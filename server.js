var express = require("express");
var app = express();
var PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
const htmlRoutes = require("./routes/htmlRoutes");

app.use('/', htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
