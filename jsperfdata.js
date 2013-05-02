/*! jsPerf-introjs | (c)2013 tomByrer released mozilla.org/MPL/2.0/ */
// inserts data attributes
// TODO transform into JSON system
$(document).ready(function() {

		var eleName = 'div';
		var containsName = 'Preparation';
		var findName = eleName + ':contains("' + containsName + '")';
    $(findName).
		.attr('data-step','1')
		.attr('data-intro','In here, load libraries, set up global variables & methods, enter large test scripts as a function.  Ran once at start of test.');
})();