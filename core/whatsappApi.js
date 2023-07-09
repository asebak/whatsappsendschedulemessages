const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');



class WhatsAppApi {
 
    constructor() {
         this.client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: {
                args: ['--no-sandbox'],
            }
        });

        this.client.on('qr', (qr) => {
            qrcode.generate(qr, {small: true});
        });
        
        this.client.on('ready', () => {
            console.log('Client is ready!');
        });
        
        this.client.on('message', msg => {
            if (msg.body == '!ping') {
                msg.reply('pong');
            }
        });
        
        this.client.initialize();
    }
}

module.exports = {WhatsAppApi}