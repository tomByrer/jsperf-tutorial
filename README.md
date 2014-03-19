[jsperf-tutorial](http://tombyrer.github.io/jsperf-tutorial/)
==============

A bookmarklet to run a tutorial on [jsPerf.com](http://jsperf.com) homepage using [Intro.js](http://usablica.github.io/intro.js/).

If you don't know, jsPerf is a croud-sourced JavaScript speed tests; helpful if you want to benchmark one function against another.  *Disclaimer:*  This project is not connected to jsPerf or maintainers.

## Usage

1. Add bookmarklet manually to your bookmarks toolbar: `javascript:(function(){var%20e=document.createElement("SCRIPT");e.type="text/javascript";e.src="//tombyrer.github.io/jsperf-tutorial/jsperf-tutorial.js";document.getElementsByTagName("body")[0].appendChild(e)})();`
(For Android, you might have to `%20` for an actual space.)
2. Go to the [add new test page | http://jsperf.com/](http://jsperf.com), or enter `/edit` after an existing test.
3. Run bookmarklet from your toolbar.
4. After a few seconds, at the upper-right hand corner of the page, you'll see a "Run tutorial" banner.  Click there, then you should see a modal popup, highlighting a field.  Use the [Enter] key or the [Next] button to step though the tutorial.
 
Tested on Windows Firefox, Chrome, IE10.

## Helping

You can send an issue if you need help, but first please read  [CONTRIBUTING](https://github.com/tomByrer/jsperf-tutorial/blob/master/CONTRIBUTING.md).

## ToDo

* DRY loader from instructions
	* JSON for data?
	* make new repo for loader
* testing
	* iOS & Android tablets
	* OSX
* improve CSS
	* button:active highlight
* teach links on bottom
* fix then add tutorial for the run-test page

## Licence

MIT
