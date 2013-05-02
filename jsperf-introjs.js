/*! jsPerf-introjs | (c)2013 tomByrer released mozilla.org/MPL/2.0/ */
// readies http://jsperf.com/ for intro.js
;(function(){
		//load scripts
		var eleName = 'footer';
		var containsName = ' · ';
		var findName = eleName + ':contains("' + containsName + '")';
//    $(findName).append('<script src="https://raw.github.com/usablica/intro.js/master/minified/intro.min.js" type="text/javascript"><\/script><link rel="stylesheet" href="https://raw.github.com/usablica/intro.js/master/minified/introjs.min.css">');  //TODO async JS & CSS incertion

$.ajax({
url: "https://rawgithub.com/usablica/intro.js/master/minified/intro.min.js",
type: "GET",
dataType: "script",
cache: true
});
/*  This will always not allow chaching due to ?=number inserted at end
$.ajax({
url:"https://rawgithub.com/usablica/intro.js/master/minified/introjs.min.css",
type: "GET",
dataType: "script",
//cache: true
success:function(data){	$("head").append("<style>" + data + "</style>"); }
});
*/
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", 'https://rawgithub.com/usablica/intro.js/master/minified/introjs.min.css')
  document.getElementsByTagName("head")[0].appendChild(fileref)
	fileref=document.createElement("link") //fileref needs to be rebuilt for atleast FF20
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", 'btnCorner.css')
  document.getElementsByTagName("head")[0].appendChild(fileref)


//1st step: Popular & Latest; search
//data-step="1" data-intro=""
		var eleName = 'div';
		var containsName = 'Preparation';
		var findName = eleName + ':contains("' + containsName + '")';
    $(findName).css({'background': 'orange'}).attr('data-step','1').attr('data-intro','In here, load libraries, set up global variables & methods, enter large test scripts as a function.  Ran once at start of test.');

		$('body').append('<span id="btnCorner"><a href="javascript:void(0);" onclick="javascript:introJs().start();">Run tutorial.</a></span>');
});