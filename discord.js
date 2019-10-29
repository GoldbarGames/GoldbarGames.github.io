const axios = require('axios');

axios.post(process.env.DISCORD_WEBHOOK, {
  content: process.env.DISCORD_MESSAGE,
}).catch((e) => {
  console.error(e.toString());
});