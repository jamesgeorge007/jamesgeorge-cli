'use strict';

const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createList = items => items.map(item => ({...item, key: item.label || item.url}));

const listItems = createList([
	{
		label: 'Open-Source-Activity',
		url: 'https://ghuser.io/jamesgeorge007'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/james_madhacks'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/jamesgeorge007'
	},
	{
		label: 'Linkedin',
		url: 'https://linkedin.com/in/sindresorhus/ama'
	},
	{
		label: 'Blog',
		url: 'https://medium.com/@jamesgeorge007'
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
		<Box marginBottom={1}>
			<Text>I’m a Full Stack Developer and the maintainer of Mevn-CLI.</Text>
		</Box>
		<SelectInput items={listItems} onSelect={handleSelect}/>
	</Box>
);
