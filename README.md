jsperf-tutorial
==============

A bookmarklet to hack in a tutorial for adding new JavaScript speed tests on [jsPerf](http://jsperf.com) using [Intro.js](http://usablica.github.io/intro.js/).
*Disclaimer:*  This project is not connected to jsPerf.com or their maintainers.

## Usage

1. Go to the [add new test page](http://jsperf.com), or enter `/edit` after an existing test.

2: Add bookmarklet manually to your bookmarks toolbar:
`(function(){var%20e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/jsperf-tutorial/master/jsperf-tutorial.src.js";document.getElementsByTagName("body")[0].appendChild(e)})();`

3: Run bookmarklet.

4: After a few seconds, at the upper-right hand corner of the page, you'll see a "Run tutorial." banner.  Click that to run the tutorial.  Use the [Enter] key or the [Next] button to step though the tutorial. 

## Helping

You can send an issue if you need help, but if you want to send in a fix, request, &/or PR, please read [CONTRIBUTING](https://github.com/tomByrer/jsperf-tutorial/blob/master/CONTRIBUTING.md).

## ToDo

* fix CSS
	* button:active highlight
* teach links on bottom
* transform into JSON system
* fix then add tutorial for the run-test page

## Licence

MIT
