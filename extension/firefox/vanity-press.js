var Readability = require("@mozilla/readability")

var readability = new Readability(document).parse();
console.log(readability.content)
// url = document.url;