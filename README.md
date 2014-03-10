jsperf-introjs
==============

A bookmarklet to hack in a tutorial for [jsPerf](http://jsperf.com) using [Intro.js](http://usablica.github.io/intro.js/).

## Usage

1: Add bookmarklet manually:
`(function(){var%20e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/CDNsneaker/master/jsPerf/s.js";document.getElementsByTagName("body")[0].appendChild(e)})();`
2: Go to the [add new test page](http://jsperf.com), or enter `/edit` after an existing test.

3: Run bookmarklet.

4: After a few seconds, at the very upper-right hand corner of the page, you'll see a "Run tutorial." banner.  Click that to run the tutorial.


## ToDo

* fix CSS
* teach links on bottom

## Licence

MIT
