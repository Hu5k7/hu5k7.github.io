var str = 'Im a Cyberspace-security noob,but i love it, enjoy it.<br>Still learning<br>I come from zkaq-team. hu5k7';
var i = 0;
function typing(){
	var divTyping = document.getElementById('divTyping');
		if (i <= str.length) {
			divTyping.innerHTML = str.slice(0, i++) + '_';
			setTimeout('typing()', 55);
	}
		else{
			divTyping.innerHTML = str;
	}
}
typing();