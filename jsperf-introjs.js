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
$('section:contains("Preparation code output")')
.attr('data-step','3')
.attr('data-intro',"HTML output, if there is any");
$('button#run')
.attr('data-step','4')
.attr('data-position','left')
.attr('data-intro','Clicky, toggles into pause button............');
$('span#user-agent')  //caption:contains("Testing in")
.attr('data-step','5')
.attr('data-position','top')
.attr('data-intro','User-Agent header');

$('tbody')
.attr('data-step','6')
//.attr('data-position','top')  TODO introjs bug, scrolls to bottom
.attr('data-intro','Test listing; must be here to run.');
$('#title-1 div')
.attr('data-step','7')
.attr('data-intro','Test title used in results.  Click to run only this test.  Protip: Keep short.');
$('tr:nth-child(1) pre')
.attr('data-step','8')
.attr('data-intro','The actual javascript to run.  Protip: Keep below 5 lines; use a function or 2.');
$('#results-1')
.attr('data-step','9')
.attr('data-position','left')
.attr('data-intro','"Ready" if test not ran recently, or results afterwards (but go with browserscope average).');

$('div#bs-results')
.attr('data-step','10')
.attr('data-intro','Averaged output of all tests on this page.  Mouse over bars for details.');
$('#charts a:nth-child(6)')
.attr('data-step','11')
.attr('data-intro','Select "Table" for only the numbers.');

$('#charts a:nth-child(6)')
.attr('data-step','12')
.attr('data-intro','Click to fork.');
$('ul')
.attr('data-step','13')
.attr('data-intro','Past & new forks, current is highlighted.');
$('form#comment-form h2')
.attr('data-step','14')
.attr('data-intro','Read & post feedback & notes here.');

})();