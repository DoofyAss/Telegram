


/*
	Common
*/



global.wait = async function(sec) {

	return await new Promise(resolve =>
	setTimeout(resolve, sec))
}



$(String.prototype)

// first char to uppercase

.get(function tU() {

	return this.charAt(0).toUpperCase() + this.slice(1)
})

// first char to lowercase

.get(function tL() {

	return this.charAt(0).toLowerCase() + this.slice(1)
})










/*
	Map
*/

$(Map.prototype)



.get(function array() {

	return Array.from( this.values() )
})



.add(function each(callback) {

	for ([key, item] of this)
	callback(item, key, this)
})










/*
	Array
*/

$(Array.prototype)



.get(function random() {

	return this[ Math.floor( Math.random() * this.length ) ]
})



.get(function first() {

	return this.length > 0 ? this[0] : undefined
})



.get(function isempty() {

	return Array.isArray(this) &&! this.length
})



.get('null', function() {

	return Array.isArray(this) &&! this.length ? null : this
})



.add(function each(callback, index = 0) {

	for (item of this)
	callback(item, index++, this)
})



.add(function remove(i) {

	let remove = i => {

		let index = this.indexOf(i)
		if (index > -1) this.splice(index, 1)
	}

	i instanceof Array ? i.forEach(i => remove(i)) : remove(i)

	return this
})










/*
	Object
*/

$(Object.prototype)



.get(function isempty() {

	return this && Object.keys(this).length == 0 &&
	Object.getPrototypeOf(this) === Object.prototype
})



.add(function map(callback, array = []) {

	for ([key, item] of Object.entries(this)) {

		let result = callback(key, item, this)
		array.push(result)
	}

	return array
})



.add(function filter(callback, array = []) {

	for ([key, item] of Object.entries(this)) {

		let result = callback(key, item, this)
		if (result) array.push(result)
	}

	return array
})



.add(function each(callback) {

	for ([key, item] of Object.entries(this))
	callback(key, item, this)
})
