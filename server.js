var express = require("express");
var app     = express();
var exec    = require("child_process").exec;

app.delete("/", function(req, res) {
    var prefix = process.argv[2] ? "echo '" + process.argv[2] + "' | sudo -S " : "";

    exec(prefix + "shutdown -P now > log", function (error, stdout, stderr) {
      console.log("error");
      console.log(error);
      console.log("stdout");
      console.log(stdout);
      console.log("stderr");
      console.log(stderr);
    });
    res.end();
});

app.listen(9999);
