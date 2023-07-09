var WhatsAppApi = require('../whatsappApi')

class WhatsAppJob {

    constructor(contacts) {
        this.contacts = contacts
        this.api = new WhatsAppApi.WhatsAppApi()
    }

    async sendMessage() {
        const contacts = await client.getContacts()
        const contact = contacts.find(({ name }) => name === "Tarek Sebak")
        const { id: { _serialized: chatId } } = contact
      
        await this.api.client.sendMessage(chatId, 'Message Text')
    }

    async sendMessage(phoneNum, msg) {
        this.api.client.isRegisteredUser(phoneNum + "@c.us").then(function(isRegistered) {
            if(isRegistered) {
                this.api.client.sendMessage(phoneNum + "@c.us", msg);
            }
        })  
    }
    
}


module.exports = WhatsAppJob