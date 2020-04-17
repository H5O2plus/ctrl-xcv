const fse = require('fs-extra');

module.exports = {
	c: (original, target, overwrite = false) => {
		fse.copySync(original, target, { overwrite, errorOnExist: true });
	},
	x: (original, target, overwrite = false) => {
		fse.moveSync(original, target, { overwrite });
	},
};