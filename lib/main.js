/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var dt = require( '@stdlib/array-dtypes' );


// MAIN //

/**
* Returns a list of typed array signed integer data types.
*
* @returns {StringArray} list of typed array signed integer data types
*
* @example
* var list = dtypes();
* // e.g., returns [ 'int16', ... ]
*/
function dtypes() {
	return dt( 'signed_integer' );
}


// EXPORTS //

module.exports = dtypes;
