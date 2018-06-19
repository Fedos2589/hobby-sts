import Hashids from 'hashids'

const randomKey = (arr, label) => {
  let hashids = new Hashids();
	let x = parseInt(label);
	let digits = [9, 9, x];
  let obj = {};
	let array = arr;
	let matrix = [];

	let result = arr.map(function(arr, index) {
		digits.push(index);
		if (typeof arr === 'object') {
			let i = 0;
			Object.keys(arr).forEach(function(key) {
				let x = '';
				digits.push(i);
				x = '_' + key + 'Id';
				arr[x] = hashids.encode(digits);
				digits = digits.slice(0, 6);
				i++;
			});
			return arr;
		} else {
			obj = {
				value: arr,
				id: hashids.encode(digits)
			};
			digits = digits.slice(0, 5);
			return obj;
		}
		//matrix.push(digits);
	});
  return result;
};

export default randomKey