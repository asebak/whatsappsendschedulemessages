var WhatsAppApi = require('../whatsappApi')

class WhatsAppJob {

    constructor(contacts) {
        this.contacts = contacts
        this.api = new WhatsAppApi.WhatsAppApi()
    }

    async sendMessageViaName(msg) {
        this.contacts.forEach(async element => {
            const whatsAppcontacts = await this.api.client.getContacts()
            const contact = whatsAppcontacts.find(({ name }) => name === element)
            const { id: { _serialized: chatId } } = contact
        
            await this.api.client.sendMessage(chatId, msg)
        });

    }

    async sendMessageViaPhoneNumber(msg) {
        this.contacts.forEach(async phoneNum => {
        await this.api.client.isRegisteredUser(phoneNum + "@c.us").then(async function(isRegistered) {
            if(isRegistered) {
               await this.api.client.sendMessage(phoneNum + "@c.us", msg);
            }
        })  
    });
    }
    
    
}


module.exports = WhatsAppJob