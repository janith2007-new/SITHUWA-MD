const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94727785006'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'realshaggy2007@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94727785006"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94727785006
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFldjdMRzMvS3Y3RXlLZ3hUbEtVL1VCcmJFaHRvcktUM0h5c21kM1dGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEMvWGNZRTBiM2hNQUl6L3hBcE9YUFdhR0pHM0VDbUlmMS93d3ZvMTBYWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ3VzNk1qaWxUbndYVHBNQWU2MHZkMFJyU1NzZlh3NEwyQTVyako2ZDBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtU2xDcHRyTW14MXhGazhaWGRnNmJwcGJXT3QvdEMzeGdNaHpJNVVPeDBrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCZmFkay90ZEtHbVJVQXJnK0lOYUl1NVA3Ync4ekdHYjNRZVhxUDUxWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1nQzIxSDlrR2ZwTGZKcDhuSVN5dW91RHJVc1c1Y1I1N01na3g1cllVaUU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVk9uclBUa3BkT3UyRFhXQXZEMlhiSGJ2cHlBeFdHaEFydElGWFEzMGxFOWE5emt0Y1ZDY2ZoeStXamZCcVFtc25OR2tYVm1rdmcwUTduWmhsQ3pCUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MywiYWR2U2VjcmV0S2V5IjoieTBCT2ZRazdXRkZPcTljcEsvbUlldXBhbVRSdXVvRW5NM0F0YjhLb01JTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid0NMUGcwUV9RUU9GYklMc3VTS1JidyIsInBob25lSWQiOiI4OGFiNWIyOS01MGU0LTQ1ODctYjNjNS0wMzcxNjBjYjFlMWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnpxSDlPWjNIeTRyeStIMkRWa0tzSVNXTWtJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlMzB3anh1a0FrL3FiL002bGkzaFpuL3h6ODA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNV1N5SllERUo2em1hd0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjE4cmpweGJBSXlVZ3FBdjhKR241SWQwazR0SU9rT3lrZzRMaXN6N21CQTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZEU2xpZEhDZy9RSUo4T3pTVk1UclVrSEZpWC9FRmtnYVJEREpPK2U5Q2ZiUzdBODgvUFpvS29EK0ZsZ1I0aW83eENpMGFLSjh0N284TUhXK3VOREFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLdm1MZGVzaHl3OHFPUGpGVXJYYTFRRmpma1A0SkEzcWFBZ3FncVBvaTNzYkIxdkV0UW1KV3hrTmRsQWxLc1dMTDkyTmNNSzIyclpOS1lqZW0ycHdCdz09In0sIm1lIjp7ImlkIjoiOTQ3Mjc3ODUwMDY6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSNyoA6LSnwnZm68J2ZuPCdmoPwnZqD8J2aiDwoKl5fXiopPiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzc4NTAwNjoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZks0NmNXd0NNbElLZ0wvQ1JwK1NIZEpPTFNEcERzcElPQzRyTSs1Z1FOIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzMzAzNTg2fQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY 😠🖤⛓️',
  
  botname:   process.env.BOT_NAME === undefined ? "😠⛓️🖤🍂" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'janiya' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '⛓️Hi..👏💫' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•🖤⛓️ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
