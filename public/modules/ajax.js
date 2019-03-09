'use strict'
/**
* Checks the status of http answer
* 
* @throws {Error} if request status is not in [200:300)
* 
* @param  {object} response
* 
* @returns {Promise}
*/
const checkStatus = response => {
	if (response.status >= 200 && response.status < 300) {
	  return response
	} else {
	  var error = new Error(response.statusText)
	  error.response = response
	  throw error
	}
};

export class AjaxModule {
	/**
	 * Private _ajax function
	 * Makes a http request
	 * 
	 * @throws {Error} if request status is not in [200:300)
	 * 
	 * @param  {object} [unnamed = {}]
	 * @param  {string} [unnamed.method = 'GET']
	 * @param  {string} [unnamed.path = '/'] 
	 * @param  {object} [unnamed.body = {}]
	 * 
	 * @returns {Promise}
	 */
	_ajax ({
		method = 'GET',
		path = '/',
		body = {},
	} = {}) {
		return fetch(path, {
			method: method,
			body: JSON.stringify(body),
			mode: 'cors',
			headers: {
				"Content-Type": "application/json",
				"Charset": "utf-8"
			},
			credentials: "include"
		  })
		  .then(checkStatus)
	}
	/**
	 * Simple wrapper on private _ajax function
	 * Makes a GET http request
	 * 
	 * @throws {Error} if request status is not in [200:300)
	 * 
	 * @param  {object} [unnamed = {}] 
	 * @param  {string} [unnamed.path = '/'] 
	 * @param  {object} [unnamed.body = {}]
	 * 
	 * @returns {Promise}
	 */
	doGet({
		path = '/',
		body = {},
	} = {}) {
		return this._ajax({
			path,
			body,
			method: 'GET',
		});
	}
	/**
	 * Simple wrapper on private _ajax function
	 * Makes a POST http request
	 * 
	 * @throws {Error} if request status is not in [200:300)
	 * 
	 * @param  {object} [unnamed = {}] 
	 * @param  {string} [unnamed.path = '/'] 
	 * @param  {object} [unnamed.body = {}]
	 * 
	 * @returns {Promise}
	 */
	doPost({
		path = '/',
		body = {},
	} = {}) {
		return this._ajax({
			path,
			body,
			method: 'POST',
		});
	}
}