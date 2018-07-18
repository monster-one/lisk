/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const exceptions = require('../helpers/exceptions.js');

/**
 * Main blockVersion logic
 *
 * @class
 * @memberof logic
 * @see Parent: {@link logic}
 * @requires helpers/exceptions
 */

/**
 * Current block version.
 *
 * @property {number} currentBlockVersion - Current block version used for forging and verify
 */
const currentBlockVersion = 1;

/**
 * Checks if there is an exception for block version for provided block height.
 *
 * @param {number} version - Block version
 * @param {number} height - Block height
 * @returns {boolean}
 */
function inExceptions(version, height) {
	const heightsRange = exceptions.blockVersions[version];
	if (
		heightsRange &&
		(height >= heightsRange.start && height <= heightsRange.end)
	) {
		return true;
	}
	return false;
}

module.exports = {
	inExceptions,
	currentBlockVersion,
};
