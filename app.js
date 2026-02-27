var ScheduleJobHandler = require('./core/schedulejobhandler');
var WhatsAppJob = require('./core/jobs/whatsapp');
var Config = require("./models/config")
var handler = ScheduleJobHandler.getInstance();
whatsAppJob = new WhatsAppJob(["Mom"]);

handler.addJob('whatsapp-morning', '0 5 * * *', async function () {
  console.log("running whatsapp morning message sender...")
  try {
    var morning = await Config.generateMorningMessage();

    await whatsAppJob.sendMessageViaName(morning);
  } catch (error) {
    console.warn("error occured running whatsapp morning job:" + error);
  }
});