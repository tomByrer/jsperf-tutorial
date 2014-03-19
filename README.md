[jsperf-tutorial](http://tombyrer.github.io/jsperf-tutorial/)
==============

A bookmarklet to run a tutorial on [jsPerf.com](http://jsperf.com) homepage using [Intro.js](http://usablica.github.io/intro.js/).

If you don't know, jsPerf is a croud-sourced JavaScript speed tests; helpful if you want to benchmark one function against another.  *Disclaimer:*  This project is not connected to jsPerf or maintainers.

## Usage

1. Add bookmarklet manually to your bookmarks toolbar: `javascript:(function(){var%20e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/jsperf-tutorial/master/jsperf-tutorial.js";document.getElementsByTagName("body")[0].appendChild(e)})();`
(For Android, you might have to `%20` for an actual space.)
2. Go to the [add new test page | http://jsperf.com/](http://jsperf.com), or enter `/edit` after an existing test.
3. Run bookmarklet from your toolbar.
4. After a few seconds, at the upper-right hand corner of the page, you'll see a "Run tutorial." banner.  Click there to run the tutorial.  Use the [Enter] key or the [Next] button to step though the tutorial.

## Helping

You can send an issue if you need help, but first please read  [CONTRIBUTING](https://github.com/tomByrer/jsperf-tutorial/blob/master/CONTRIBUTING.md).

## ToDo

* improve CSS
	* button:active highlight
* teach links on bottom
* transform into JSON system
* fix then add tutorial for the run-test page

## Licence

MIT
