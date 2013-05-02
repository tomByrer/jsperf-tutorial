/*! jsPerf-introjs | (c)2013 tomByrer released mozilla.org/MPL/2.0/ */
// readies http://jsperf.com/ for intro.js
;(function(){
//load scripts
$.ajax({
url: "https://rawgithub.com/usablica/intro.js/master/minified/intro.min.js",
type: "GET",
dataType: "script",
cache: true
});
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", 'https://rawgithub.com/usablica/intro.js/master/minified/introjs.min.css')
document.getElementsByTagName("head")[0].appendChild(fileref)
fileref=document.createElement("link") //fileref needs to be rebuilt for atleast FF20
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", 'https://rawgithub.com/tomByrer/jsperf-introjs/master/btnCorner.css')
document.getElementsByTagName("head")[0].appendChild(fileref)
//+ button
$('body').append('<span id="btnCorner"><a href="javascript:void(0);" onclick="javascript:introJs().start();">Run tutorial.</a></span>');
// inserts data attributes
// TODO transform into JSON system  findToTag = ""; //elementName + ':contains("' + containsText + '")';
$('div:contains("Preparation")')
.attr('data-step','1')
.attr('data-intro','In here, load libraries, set up global variables & methods, enter large test scripts as a function.  Ran once at start of test.');

//test view
$('p:contains("created")')
.attr('data-step','1')
.attr('data-intro','Age of test, & revision/version number if > 1.');
$('section#prep-code')
.attr('data-step','2')
.attr('data-intro',"User's HTML & JS input; load libs, build test functions.");
$('div.user-output')
.attr('data-step','3')
.attr('data-intro',"HTML output, if there is any");
$('button#Run Tests')
.attr('data-step','4')
.attr('data-intro','Clicky');

})();