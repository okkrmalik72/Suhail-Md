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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_36_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDU1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJMUNXdTNaelh4dWhYRmhLVURSTDA5WHhGMFU2SWU2cDhXc3ZLUEpYUU9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQY1VFTEI3QlRFR3F1T0FOYTFRblBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlMDMyNmE0LTk5ZjItNDJiOS1hZmE2LWUyMzExZWExN2E0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDE5NixcbiAgICAgIDEwNixcbiAgICAgIDEwNSxcbiAgICAgIDMwLFxuICAgICAgMjE2LFxuICAgICAgMjQ2LFxuICAgICAgMjI0LFxuICAgICAgMTcyLFxuICAgICAgNjQsXG4gICAgICA3MCxcbiAgICAgIDUzLFxuICAgICAgMTc2LFxuICAgICAgMjIwLFxuICAgICAgMTIsXG4gICAgICAxMjIsXG4gICAgICAxMyxcbiAgICAgIDQ4LFxuICAgICAgMTE3LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMzQsXG4gICAgICA4NCxcbiAgICAgIDIyNCxcbiAgICAgIDE0NyxcbiAgICAgIDE5MixcbiAgICAgIDUxLFxuICAgICAgNTAsXG4gICAgICAxNTYsXG4gICAgICAxMjQsXG4gICAgICA3MCxcbiAgICAgIDkxLFxuICAgICAgMzIsXG4gICAgICAxMDUsXG4gICAgICA3MCxcbiAgICAgIDU3LFxuICAgICAgMTY4LFxuICAgICAgMTMwLFxuICAgICAgMjA1LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhBSEhTRlBQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2NytkVUNFTlQyM2NBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWdThkeDJwUTdwbVorOWZpWUtaMmo5b3pxdkZTczJkVnNETkhZd0RXYlVxZnZocDkrQm9FZ0Fyenppd1A5S1pvUGVoWTRjSUwrajlGbmxFdXMzc0NBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1NFgyZzFDZG5KRmNyYzJrbFZqWU9LY0hDZTBtbDdGWlJjVVFjWjBWc2RlNkYwTmYwdTl4RW1kYk5NYzFEck5JVTBxaHdPbTVYTW4xMnozbnJpQzNnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MzY5MzY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm9VXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXRnRzTUlaeXZrNnZVb3Fsa3NndTV6Q2dOM0VvanNZZWJFMFMwZ0pqMjVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2MzY5Mzc0Mzk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
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
