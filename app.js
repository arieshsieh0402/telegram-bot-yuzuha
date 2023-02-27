const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.json')
const botToken = config.botToken
const bot = new TelegramBot(botToken, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if (message.includes('餐') && message.includes('吃')) {
      bot.sendMessage(chatId, '要吃什麼還要問，自己想！');
    }
  });


