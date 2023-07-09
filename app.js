var ScheduleJobHandler = require('./core/schedulejobhandler');
var WhatsAppJob = require('./core/jobs/whatsapp');

var handler = ScheduleJobHandler.getInstance();
whatsAppJob = new WhatsAppJob(["Tarek Sebak", "Abdel Razik Sebak"]);

//0 5 * * *
handler.addJob('whatsapp-morning', '*/1 * * * *', function(){
  console.log("running whatsapp morning message sender...")
  try {
    whatsAppJob.sendMessageViaName("Good Morning");
  } catch (error) {
    console.warn("error occured running whatsapp morning job:" + error);
  }
});

//0 22 * * *
handler.addJob('whatsapp-evening', '*/1 * * * *', function(){
  console.log("running whatsapp morning message sender...")
  try {
    whatsAppJob.sendMessageViaName("Have a good night");
  } catch (error) {
    console.warn("error occured running whatsapp evening job:" + error);
  }
});