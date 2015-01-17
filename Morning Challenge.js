var nums = ["hello", "javascript", "awesome"];
var finder = function(string, array) {
	for(var i = 0; i < array.length; i++) {
		if (string === array[i]) {
		return "true";
		}
	}
	return "false";
};
finder("lame", nums);