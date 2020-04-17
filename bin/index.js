#!/usr/bin/env node
const ctrl = require('../lib/index.js');

const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

console.log(JSON.stringify(argv));

usageText = `Usage: ctrl-xcv source target [options]
    options:
        -f, --force     Force paste, even if target exists
        -x              Move
        -c              Copy
`;

if (argv._.length !== 2) {
	console.error(chalk.red("Error: Must have 2 arguments"));
	console.log(usageText);
	process.exit(1);
}

if ((argv.x && argv.c) || (!argv.x && !argv.c)) {
	console.error(chalk.red("Error: Must specify either to move or copy"));
	console.log(usageText);
	process.exit(1);
}

try {
	ctrl[argv.x ? 'x' : 'c'](argv._[0], argv._[1], argv.f || argv.force)
	console.log(chalk.green(`Successfully ${argv.x ? "moved" : "copied"}.`));
} catch (e) {
	console.log(`${e.name}: ${e.message}`);
	process.exit(2);
}