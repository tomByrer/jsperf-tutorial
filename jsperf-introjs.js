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
})();