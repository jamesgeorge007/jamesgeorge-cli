#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');
const showBanner = require('node-banner');

const ui = importJsx('./ui');

// Parse args.
const args = process.argv.slice(2);

// Help message
const showHelpMessage = () => console.log(' Usage $ jamesgeorge');

if (args.length) { // eslint-disable-line unicorn/explicit-length-check
	// Show up help.
	if (['--help', '-h'].includes(args[0])) {
		showHelpMessage();
	} else {
		console.warn(' Invalid usage');
	}
  return;
}

// IIFE
(async () => {
	await showBanner('James George', 'Full Stack Engineer | Open Sourcerer');
	// Renders the React component within terminal premises
	render(React.createElement(ui));
})();
