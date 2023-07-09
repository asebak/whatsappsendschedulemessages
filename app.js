var ScheduleJobHandler = require('./core/schedulejobhandler');
var WhatsAppJob = require('./core/jobs/whatsapp');

var handler = ScheduleJobHandler.getInstance();
whatsAppJob = new WhatsAppJob();
handler.addJob('whatsapp-morning', '*/1 * * * *', function(){
  console.log("running whatsapp morning message sender...")
  try {
    whatsAppJob.sendMessage();
  } catch (error) {
    console.warn("error occured running salat job:" + JSON.stringify(error));
  }
});