jsperf-tutorial
==============

A bookmarklet to hack in a tutorial for [jsPerf](http://jsperf.com) using [Intro.js](http://usablica.github.io/intro.js/).

## Usage

1. Go to the [add new test page](http://jsperf.com), or enter `/edit` after an existing test.

2: Add bookmarklet manually:
`(function(){var%20e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/jsperf-tutorial/master/jsperf-tutorial.src.js";document.getElementsByTagName("body")[0].appendChild(e)})();`

3: Run bookmarklet.

4: After a few seconds, at the upper-right hand corner of the page, you'll see a "Run tutorial." banner.  Click that to run the tutorial.  Use the [Enter] key or the [Next] button to step though the tutorial. 


## ToDo

* fix CSS
* teach links on bottom

## Licence

MIT
