'use strict';

define('spin-js', ['spin-js-base','spin-js-css'], function(spin) { 
	return spin.Spinner$$module$spin || spin.Spinner;
});