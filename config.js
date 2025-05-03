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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_53_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSE5YYm5GQm5QUHg3VlZvVDgvYjVZbTFXOFZZeStIVUFtMFNXZWdvTlZDdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDcxMTY2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlGMzg0Q0Y4MDdCM0RGNzQxMTU0Mzg4ODAzOERCRDlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjI3Njc5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaTWRBbFZXLVM5Q21IVVFXZ1FlOVdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkzZGU4ZDlkLWE2MzgtNGRhMS04NTMxLWE2YzJhMjA5MDU0ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDQsXG4gICAgICAxMTcsXG4gICAgICAxNzksXG4gICAgICAyNTQsXG4gICAgICAxOTgsXG4gICAgICAyMTEsXG4gICAgICAyMixcbiAgICAgIDEwMSxcbiAgICAgIDYyLFxuICAgICAgMTQyLFxuICAgICAgNTQsXG4gICAgICAxOTIsXG4gICAgICAxNjEsXG4gICAgICAxMTMsXG4gICAgICAxNjksXG4gICAgICAyNDgsXG4gICAgICA4LFxuICAgICAgMjgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgOSxcbiAgICAgIDU0LFxuICAgICAgMjM4LFxuICAgICAgNDIsXG4gICAgICAxNTUsXG4gICAgICAyMjYsXG4gICAgICAyMzYsXG4gICAgICAxNTAsXG4gICAgICAxMTUsXG4gICAgICAyMDEsXG4gICAgICAyMDAsXG4gICAgICAzLFxuICAgICAgODEsXG4gICAgICA0MCxcbiAgICAgIDMwLFxuICAgICAgNTcsXG4gICAgICAyMTIsXG4gICAgICAxMjksXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkRKWTFOWUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVg3K2RVQ0VMU2oyTUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVJVlY4YXZMRGNEY296VHB2VDRWZzlSaWp5RmJCdnh0bGY1MlZkYk90RHc1aXlwTjREOGV2MldNZmJVcDJWWVJISys3ZE1ia3MyQUdBZkxMeTQ5UURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZuVTIwazRqb1BaZDRvd3A5TStNTzMzcE51L0NOUGRQUGtyalBEcFdaQmZLekIxZG5PTzBEemV6ZEFDWGJ5QktZVC94ODRIWFFia2JuRTBMSzI4dmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYyNzY3OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb0pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvSi5qc29uIjogIntcImtleURhdGFcIjpcImdEKzIwdWxRcGNDQ3loMEtGeUE4OHVwUHlnMnJsY3JsK1daN2VvSnNubGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDYyNzY3OTY4MTFcIn0iCn0="  // PUT your SESSION_ID 


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
