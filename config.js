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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_37_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRFhzN25zWTVybCtzWjJqSklqTWh4ektKbEZhdElZYkdnUmczM0FGaytjOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0hwRTNnOXpTNmF5T244YlNMcjBzUVwiLFxuICBcInBob25lSWRcIjogXCIxNGE0OWMwMC04ZDM0LTQyMGMtYWQ1Ni0yZTAwN2M0M2Y1ZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAyMyxcbiAgICAgIDE0NyxcbiAgICAgIDExMSxcbiAgICAgIDE1MCxcbiAgICAgIDEzOSxcbiAgICAgIDQ1LFxuICAgICAgMTQsXG4gICAgICAxMzIsXG4gICAgICAyNixcbiAgICAgIDE4MyxcbiAgICAgIDEzNyxcbiAgICAgIDEyMyxcbiAgICAgIDExNyxcbiAgICAgIDEwMSxcbiAgICAgIDIyMCxcbiAgICAgIDIxMyxcbiAgICAgIDkwLFxuICAgICAgMTY0LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTY1LFxuICAgICAgMTUxLFxuICAgICAgNTksXG4gICAgICA0MSxcbiAgICAgIDE0LFxuICAgICAgMTA4LFxuICAgICAgMjQ4LFxuICAgICAgNixcbiAgICAgIDEyOCxcbiAgICAgIDIsXG4gICAgICAxMTAsXG4gICAgICA0LFxuICAgICAgNzUsXG4gICAgICAyNDUsXG4gICAgICAxMTcsXG4gICAgICAxMDYsXG4gICAgICAxNzAsXG4gICAgICAxNzcsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNOTJaNzIzV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZjcrZFVDRUtqdDJzQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGVQY1l1VERJdnQ2U2MvS0Y5bFA2Nmlab2tkcG5mRFZaRDdia3ZoaHZRRzdXZjdMcjRtbWs0dW5pNi9RN1hvRHpaL1FNT252dGJUUU80a2ppeTc4RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamtUV1ZncXcwY3FiUlVxTTNQYWQvNk5VZmMwZ01MT21RQzNyeVhTVkQzSFFLc0JKSFdXUmt4T0s2RjBRMHpZMGF3dUVuQXZQMEROM2NGOGNhUTZRaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjMxOTAxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJvTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm9OLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3RNUksyYmExVnkrbTlwRTJiOWFnV3ZLNldZYXdjR3ZtOCtEYVBPSC80VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjMxOTAyNTg0OFwifSIKfQ=="  // PUT your SESSION_ID 


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
