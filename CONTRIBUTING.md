# How to help jsperf-tutorial

Best ways to submit ideas & bug fixes:

1. Fork, & in the PR comment add your bookmarklet to your repo.  Please don't send in a PR until I ask.
2. Or, write an Issue with these details:
	* OS, browsers & version (note the plural in browsers; please test in more than one).
	* problems / ideas, with your expected results
	* shrunk / edited screenshots if you can

I can always use help with my [ToDo backlog](https://github.com/tomByrer/jsperf-tutorial#todo).

## Minifed Warning
`jsperf-tutorial.js` & `jsperf-tutorial.css` are (almost) the released minified versions.  They are what I test before bumping version & sending to CDN.

`jsperf-tutorial.src.*` are the 'dev' source files.  You can run what I have for `*.src.*` using this bookmark:
`(function(){var%20e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://rawgithub.com/tomByrer/jsperf-tutorial/master/jsperf-tutorial.src.js";document.getElementsByTagName("body")[0].appendChild(e)})();`
Similarly, you can test your own fork by changing 'tomByrer' for your repo name, 'master' for your fork.  You'll have to edit the CSS file references inside the JavaScript as well.  Please swap back when you send a PullRequest.
