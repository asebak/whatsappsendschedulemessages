var ScheduleJobHandler = require('./core/schedulejobhandler');
var WhatsAppJob = require('./core/jobs/whatsapp');
var Config = require("./models/config")
var handler = ScheduleJobHandler.getInstance();
whatsAppJob = new WhatsAppJob([""]);
var morning = Config.morningMessages;
var happyEmojis = Config.happyEmojis;
var night = Config.nightMessages;

handler.addJob('whatsapp-morning', '0 5 * * *', function(){
  console.log("running whatsapp morning message sender...")
  try {

    const randomElement = morning[Math.floor(Math.random() * morning.length)];
    const randomEmoji = happyEmojis[Math.floor(Math.random() * happyEmojis.length)];

    whatsAppJob.sendMessageViaName(randomElement + " " + randomEmoji);
  } catch (error) {
    console.warn("error occured running whatsapp morning job:" + error);
  }
});

handler.addJob('whatsapp-evening', '0 22 * * *', function(){
  console.log("running whatsapp morning message sender...")
  try {
    const randomElement = night[Math.floor(Math.random() * night.length)];
    const randomEmoji = happyEmojis[Math.floor(Math.random() * happyEmojis.length)];

    whatsAppJob.sendMessageViaName(randomElement + " " + randomEmoji);
  } catch (error) {
    console.warn("error occured running whatsapp evening job:" + error);
  }
});