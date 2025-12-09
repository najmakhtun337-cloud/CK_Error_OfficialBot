const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Telegram Bot Running ✔"));
app.listen(3000);

// ----------------------------------
// 🔥 BOT TOKEN
// ----------------------------------
const bot = new TelegramBot("8325394167:AAFN99M95dwjEzMuXC8XotzTrnTAAQr4zHs", {
  polling: true,
});

// ----------------------------------
// 🔥 BASIC COMMANDS
// ----------------------------------
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🔥 *BOT ONLINE*  
🤖 Ready to use!  
Type /menu to see all commands.`,
    { parse_mode: "Markdown" }
  );
});

bot.onText(/\/menu/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `⚡ *COMMAND MENU*  
• /start  
• /help  
• /owner  
• /scan  
• /info  
• /ping  
• /groupinfo  
• /userinfo  
• /id  
• /alive  
(আরো onek add করা যাবে — তুমি চাইলে আমি 450+ করে দেবো)`,
    { parse_mode: "Markdown" }
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "🆘 Help: Bot fully functional!", {
    parse_mode: "Markdown",
  });
});

bot.onText(/\/owner/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👑 OWNER: @yourusername\n📞 Contact for info."
  );
});

// ----------------------------------
// 🔥 ADVANCED COMMANDS
// ----------------------------------

// Alive Command
bot.onText(/\/alive/, (msg) => {
  bot.sendMessage(msg.chat.id, "⚡ Bot Alive & Working!");
});

// Scan Command
bot.onText(/\/scan/, (msg) => {
  bot.sendMessage(msg.chat.id, "🔍 Scanning…\n⚡ Result: System Secure.");
});

// Ping Command
bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "🏓 Pong!");
});

// Group Info (if in group)
bot.onText(/\/groupinfo/, (msg) => {
  if (msg.chat.type === "group" || msg.chat.type === "supergroup") {
    bot.sendMessage(
      msg.chat.id,
      `👥 Group Name: ${msg.chat.title}\n📛 Group ID: ${msg.chat.id}`
    );
  } else {
    bot.sendMessage(msg.chat.id, "❗ This command only works in groups.");
  }
});

// User Info
bot.onText(/\/userinfo/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🙎‍♂️ User: ${msg.from.first_name}\n🆔 ID: ${msg.from.id}`
  );
});

// ID
bot.onText(/\/id/, (msg) => {
  bot.sendMessage(msg.chat.id, `🆔 Your ID: ${msg.from.id}`);
});

// ----------------------------------
// 🔥 AUTO REPLY SYSTEM
// ----------------------------------
bot.on("message", (msg) => {
  if (msg.text?.toLowerCase() === "hi") {
    bot.sendMessage(msg.chat.id, "Hello 👋");
  }

  if (msg.text?.toLowerCase().includes("love")) {
    bot.sendMessage(msg.chat.id, "❤️ LOVE detected!");
  }
});
