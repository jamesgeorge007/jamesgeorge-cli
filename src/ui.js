'use strict';

const React = require('react');
const {Box} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	} else if (item.action) {
		item.action();
	}
};

const createList = items => items.map(item => ({...item, key: item.label || item.url}));

const listItems = createList([
	{
		label: 'GitHub',
		url: 'https://github.com/jamesgeorge007'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/james_madhacks'
	},
	{
		label: 'LinkedIn',
		url: 'https://linkedin.com/in/jamesgeorge007'
	},
	{
		label: 'Blog',
		url: 'https://dev.to/jamesgeorge007'
	},
	{
		label: 'Buy Me a Coffee',
		url: 'https://buymeacoffee.com/jamesgeorge007'
	},
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}/>
		<SelectInput items={listItems} onSelect={handleSelect}/>
	</Box>
);
