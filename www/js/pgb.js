function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	Info();
}

function Info() {

	info =  'The graphical user interface (GUI), is a type of user interface that allows users to interact with electronic
devices through graphical icons and visual indicators such as secondary notation, instead of text-based user
interfaces, typed command labels or text navigation. GUIs were introduced in reaction to the perceived steep
learning curve of command-line interfaces (CLIs), which require commands to be typed on a computer
keyboard.';

	document.getElementById("deviceDetails").innerHTML = info;	
}