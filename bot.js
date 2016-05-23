var AutoBot = require("node-telegram-bot-api");
var fs = require("fs");
var token = fs.readFileSync("token.key");
var botOptions = {
    polling: true
};
var bot = new AutoBot(token, botOptions);
bot.getMe().then(function(me) {
    console.log("Hello! My name is %s!", me.first_name);
    console.log("My id is %s.", me.id);
    console.log("And my username is @%s.", me.username);
});
bot.on("text", function(msg) {
    var cid = msg.chat.id;
    var text = msg.text;
    var date = msg.date;
    var uid = msg.from.uid;

    if (text === "/test") {
        sendMessage(cid, "thx! I'm fine");
    } else {
        sendMessage(cid, "Парсер в процессе разработки. Оставайтесь на связи.");
    }
    console.log(msg);
});

function sendMessage(aChatId, aMessage) {
    bot.sendMessage(aChatId, aMessage);
}