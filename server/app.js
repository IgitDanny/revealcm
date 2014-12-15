/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path');

var fs = require('fs');

var Firebase = require("firebase");

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});


app.get('/slider', function(req, res) {
    console.log(' get slider ', req);
    res.send('hello world');

});

var ref = new Firebase("https://revealjscm.firebaseio.com/");


ref.on("value", function(snapshot) {
    // console.log(snapshot.val());

    var content = snapshot.val();
    content = prepareContent(content);
    replaceTokenInFile(content);

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});


var prepareContent = function(content) {
    var theContent = '';
    var allContent = '';

    for (var propertyName in content) {
        theContent = content[propertyName].content;

        allContent = allContent + '<section>';
        allContent = allContent + theContent;
        allContent = allContent + '</section>';
    }

    return allContent;
}

var replaceTokenInFile = function(slides) {

    var file = "revealBuild/reveal.html";

    var tokenInit = "<!-- slides -->";
    var tokenEnd = "<!-- end slides -->";

    var fileContent = '';
    var stringResult = '';

    fs.readFile(file, 'utf8', function(err, data) {

        fileContent = data;

        var posInit = fileContent.indexOf(tokenInit);
        var posEnd = fileContent.indexOf(tokenEnd);

        stringResult = fileContent.substring(0, posInit + tokenInit.length);
        stringResult = stringResult + slides;
        stringResult = stringResult + fileContent.substring(posEnd, fileContent.length);

        fs.writeFile(file, stringResult, 'utf8', function(err) {
            if (err) return console.log(err);
        });

    });

}