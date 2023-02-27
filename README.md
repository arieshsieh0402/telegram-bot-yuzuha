# Telegram Bot

## Step 1: Create a Telegram Bot

1. First, you need to create a new Telegram Bot and get your Bot API key. You can create a new bot using Telegram's @BotFather bot that helps you with this process.

2. Open the Telegram client, search for @BotFather and start a conversation.
In the dialog, enter the /newbot command and follow the prompts to create a new bot. You need to give your bot a name and a username.

3. When you successfully create a new bot, @BotFather will provide you with a Bot API key. Make a note of this key, you will need it later to set up the Telegram Bot connection.

## Step 2: Install the node-telegram-bot-api library

1. Install the node-telegram-bot-api library, which you can install in your project with the following command:

```shell
npm install node-telegram-bot-api
```

## Step 3: Code the Telegram Bot

Next, writing a Telegram Bot with the following code:

```javascript
const TelegramBot = require('node-telegram-bot-api');

// Get the token from your configuration file.
const config = require('./config.json')
const botToken = config.botToken
const bot = new TelegramBot(botToken, { polling: true });

// Listen to user messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if (message.includes('餐') && message.includes('吃')) {
      bot.sendMessage(chatId, '要吃什麼還要問，自己想！');
    }
  });
```

## Step 4: Run Telegram Bot

Run your Telegram Bot.

```shell
node app.js
```
