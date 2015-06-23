var WebSocket = require('ws');
var ws = new WebSocket('ws://192.16.64.145:80');

var nick = ''; //all lowercase
var auth = ''; //include oauth:xxxx
var channel = 'lirik';

ws.on('open', function open() {
ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
ws.send('PASS ' + auth);
ws.send('NICK ' + nick);
ws.send('JOIN #' + channel);
});

//show raw data
ws.on('message', function(data){
	console.log(data);
});

// reply to ping
ws.on('message', function(data){
	if (data.lastIndexOf('PING', 0) === 0) {
		ws.send('PONG :tmi.twitch.tv');
		console.log('PONG Sent\r\n');
	}
});