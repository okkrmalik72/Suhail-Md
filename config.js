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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_10_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpEejZ0TmtlQkw1SnIzSG00QjhrZlE3eUtrU3lMUmRoWjdTUEJyVFlGOEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZYenZKbEh0UnNLUmFPMXBfcFpBa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGNjNTJhMWMtMGQxYS00YWEyLWJlOTAtNDQ5NmE5OGQzODRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNDEsXG4gICAgICAyNDUsXG4gICAgICA2NCxcbiAgICAgIDEzOSxcbiAgICAgIDI1MCxcbiAgICAgIDIyNCxcbiAgICAgIDE3MixcbiAgICAgIDAsXG4gICAgICAxNTQsXG4gICAgICAxNjMsXG4gICAgICAxODMsXG4gICAgICAxNjgsXG4gICAgICAyMDgsXG4gICAgICA5NyxcbiAgICAgIDE2NCxcbiAgICAgIDIxMCxcbiAgICAgIDE3NixcbiAgICAgIDE1NSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxNjQsXG4gICAgICAxNzcsXG4gICAgICAxLFxuICAgICAgMjAwLFxuICAgICAgMTQ2LFxuICAgICAgMjksXG4gICAgICA1NyxcbiAgICAgIDEzOSxcbiAgICAgIDE3MixcbiAgICAgIDE0MSxcbiAgICAgIDE4LFxuICAgICAgMjQ1LFxuICAgICAgMTU4LFxuICAgICAgMjE2LFxuICAgICAgNDIsXG4gICAgICAxNDQsXG4gICAgICAyMTEsXG4gICAgICA4MCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUE1NWlBUQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcjYrZFVDRUkzeHhjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnRNczFQcThlTUZTTXZnVHZ1aE43WkpMS0dwenRvMVJFUE9vS3VEQm9ZTkVaUFZ6RjlKSmRuV2dOU2FrTTU4S3BXcWFHR1NCZjFLc3Vibm1LVGVCQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWnlxR2ROK09xc2dVK1o1clVWbUY5RDIxMDNEQ2tiNWx1WEpEV3R4b1FiWGJSajRsb1ZmRWdUTDJ2YVVwdVM0OTh1S3hDTnRRRUhUSzl2UmFHUVhoaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTk3NTQ0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ0TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnRMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZk5oUEw1SFdqcThDOEFRYkFmelBXU2U4NDJPdmZ5ZHNlUkJQZlAxcjFxUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDU5NDczOTg4MjFcIn0iCn0="  // PUT your SESSION_ID 


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
