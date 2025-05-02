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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_33_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUtJc3dDY3BSMFFFVVhJQlVIbFhvbVRHMUt2TVo4bHVmTjZhSzYwbmdjTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0NheFE1SEpReGloRzNXY1hYTktUUVwiLFxuICBcInBob25lSWRcIjogXCJiMDA2YzM1NS0wODVmLTQ5YjYtODEwNC01YzMzYTBjZjZkZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgODEsXG4gICAgICAxNzksXG4gICAgICAxNTgsXG4gICAgICAyMDQsXG4gICAgICAxMjMsXG4gICAgICAyMTAsXG4gICAgICAyMjUsXG4gICAgICAzMixcbiAgICAgIDY4LFxuICAgICAgODQsXG4gICAgICA4MSxcbiAgICAgIDE2MyxcbiAgICAgIDE2NixcbiAgICAgIDI4LFxuICAgICAgMjUyLFxuICAgICAgMTA4LFxuICAgICAgMjA5LFxuICAgICAgMjQzLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDI4LFxuICAgICAgNDgsXG4gICAgICAyMixcbiAgICAgIDEyMixcbiAgICAgIDIzMSxcbiAgICAgIDk3LFxuICAgICAgMzEsXG4gICAgICAyNDAsXG4gICAgICAxMTcsXG4gICAgICAxMjksXG4gICAgICAzNixcbiAgICAgIDAsXG4gICAgICAyNSxcbiAgICAgIDIxNCxcbiAgICAgIDE5MyxcbiAgICAgIDE3MSxcbiAgICAgIDE1NSxcbiAgICAgIDI1MSxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSV1IxUjlFUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUDcrZFVDRU56bjA4QUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRk1JWHVJZ0RtSWpuYnVZaVNiaXFLOE9hNHkxc0tOUzlkZHVqcCs2UnU5dDFqNlRiT3N0RTYwaGo1N0xKekRIdjdXS1BKVzVjeGdweEMxa3J6MHhmREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWGlrTzYrcC9QbFVaZjFZZmNnem5YMUFvL0JnYy8xVit5dHdTVVRiVG92eGdZczlMaHNWcm5SYk1wMlZBWkxhdURyNDB6aGZJY2hKNDgzdExHQjRRZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjIwMzYxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJvQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm9DLmpzb24iOiAie1wia2V5RGF0YVwiOlwicWtKVXl5OU9rVFJ0MFErQnQrbXp1VnRFVmVDRFJQUllzemZLandpMEJwMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNDEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDYxOTA4ODA1MjBcIn0iCn0="  // PUT your SESSION_ID 


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
