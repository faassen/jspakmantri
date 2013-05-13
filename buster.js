var config = module.exports;

var fs = require('fs');

var sources = JSON.parse(fs.readFileSync('bowerbuster.json', 'utf8'));
sources.push('src/**/*.js');

config["core"] = {
    rootPath: ".",
    environment: "browser",
    libs: [
        'mantri.web.js'
    ],
    sources: sources,
    tests: [
        "test/**/*.js"
    ]
};
