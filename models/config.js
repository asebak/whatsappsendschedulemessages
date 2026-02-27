const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateMorningMessage() {
  const prompt = `Generate a warm, natural, and unique good morning message for a loved one. 
    The message should:
    - Be 1-2 sentences
    - Feel personal and genuine
    - Include Islamic greetings if appropriate (like "Inshallah" or "Alhamdulillah")
    - Be encouraging and positive
    - End with an emoji (pick one that fits the tone)
    
    Return ONLY the message, nothing else.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 100,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating morning message:', error);
    return 'Good morning! I hope you have an amazing day ahead 💙';
  }
}

async function generateNightMessage() {
  const prompt = `Generate a warm, natural, and unique good night message for a loved one.
    The message should:
    - Be 1-2 sentences
    - Feel personal and genuine
    - Include Islamic greetings if appropriate (like "Inshallah" or "Alhamdulillah")
    - Be calming and comforting
    - End with an emoji (pick one that fits the tone)
    
    Return ONLY the message, nothing else.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 100,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating night message:', error);
    return 'Good night! Sleep well and may you have sweet dreams 💙';
  }
}

module.exports = {
  generateMorningMessage,
  generateNightMessage,
};