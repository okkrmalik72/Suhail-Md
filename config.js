const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_09_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSm82bjM1aFJ1Mlg5bXdLK2pyazFVbTAvR2pGNlI0WWFtYXlneEtnN1pyWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1Y1d3E3YmFSUzJKc2JRbXNlYVFXZ1wiLFxuICBcInBob25lSWRcIjogXCIyMjU5ZWJhNS1mNjU4LTQ4ZmEtYWRiMC1lNzhiMWI2MjZlYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMjQzLFxuICAgICAgMjQsXG4gICAgICAyMjMsXG4gICAgICAxMDAsXG4gICAgICAxNDgsXG4gICAgICAxNzIsXG4gICAgICAxNzUsXG4gICAgICAxNTgsXG4gICAgICA3MyxcbiAgICAgIDE3MyxcbiAgICAgIDIyNSxcbiAgICAgIDQ4LFxuICAgICAgMTE1LFxuICAgICAgNTMsXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDIyMixcbiAgICAgIDQ1LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTY4LFxuICAgICAgMjM0LFxuICAgICAgMjEyLFxuICAgICAgMTk3LFxuICAgICAgMTUsXG4gICAgICA3MyxcbiAgICAgIDEyMSxcbiAgICAgIDczLFxuICAgICAgMTUwLFxuICAgICAgMTQwLFxuICAgICAgMTIyLFxuICAgICAgNjAsXG4gICAgICAxNSxcbiAgICAgIDY1LFxuICAgICAgOTIsXG4gICAgICAzOSxcbiAgICAgIDI4LFxuICAgICAgNTAsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0QjRKMTFEU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjkxNDA4NzUwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzg4MjcwMTU0NTcwMDo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNyYXp5LU11bmRhIPCflofvuI/wn6m38J+Mj/CfjLtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYjA4TjBCRU1XK3JjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9YQjJJR211c3MzSGNsdGxndkU0LzNyNHpmM01nbllncjV1dzdiQndybjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicERkN3BMTmN1OGgwTVl2enZ3c2NBS0JaaFgxNVc4ZDd5eVlwVFVydnNNM2VyUWxwRUNIWnR4RFJxY0FsWk0zWUtqU0ZlMis5Q2QwbjV3aEFwNFk1QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK0l1Ulc4dGU3RFB5dmJ6Ni93TW5KS3krZUlTb1diclZMUTZWQUdreW1yeHdHUHFKUzdrbVNkU3BwNUR6UmxQdlU3dHVNVUFqMWtaZG1lbVhnSUJnaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkxNDA4NzUwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NTc1NzUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSStvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJK28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCeTJ2T3Y1Q2VSL1E1L0t6KzhVQWxGMGFaa0lWSk9RRis4MGtMZXNBWU5vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ1NTc1NzU1NzI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
