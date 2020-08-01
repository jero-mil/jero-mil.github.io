var _CONTENT = ["Hey wassap yow...", "Thanks for visiting my site...", "Take care and keep safe always..."];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 20);
		}, 1000);
	}
}
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 50);
		}, 50);
	}
}
_INTERVAL_VAL = setInterval(Type, 50);