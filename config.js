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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_01_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJeTNRT01XcVJuNmZnY3FkWGQveTRoSTZ6L2o1WlBQVExMalJ5LysvMURvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1SFN0WkxxMlJqaUZPcUllNW1COGx3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI1ODJkYjkxLTU0YWYtNDEzZS05OGI1LWRmYzI4NmJlZDJkM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICA0NCxcbiAgICAgIDE4NyxcbiAgICAgIDE3MCxcbiAgICAgIDE0OSxcbiAgICAgIDE4MCxcbiAgICAgIDAsXG4gICAgICAxNDgsXG4gICAgICAxNjcsXG4gICAgICAxMjIsXG4gICAgICAyMjIsXG4gICAgICAxNjksXG4gICAgICA4MixcbiAgICAgIDE3NCxcbiAgICAgIDMzLFxuICAgICAgMTc5LFxuICAgICAgMTI0LFxuICAgICAgMjE5LFxuICAgICAgOTYsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDIxMyxcbiAgICAgIDIwNyxcbiAgICAgIDEzNixcbiAgICAgIDc3LFxuICAgICAgMjAxLFxuICAgICAgMTMzLFxuICAgICAgMzMsXG4gICAgICA2LFxuICAgICAgNzgsXG4gICAgICAyMTEsXG4gICAgICAyMTksXG4gICAgICA3MixcbiAgICAgIDEzMCxcbiAgICAgIDE2MCxcbiAgICAgIDYxLFxuICAgICAgMjQsXG4gICAgICAyMzAsXG4gICAgICA0MCxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDREdEU0xaUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo4OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcjcrZFVDRVBLdDNjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZStnMzRlUzRUeW9zWFRkN09FOWcvbkxNU0E4NjZ2OCt6L1VUVnNqOWZDUU5LUEFYOWNFbnM5MEtoREVWRkI2cENFZjhCdldCRnpWL3JSTktvWmhXRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSjlReE11SkI3S0sxaUUrakpHWnVqN1U0MTRKTjNVZWZCWEZRMlR1RHdOZ2g2OWtMbTViT1BsUkUxcnN5NlVGTFduNUdUVVNJZlp2bmJMRVo1MHZ0Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjM2MDA1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJvU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm9TLmpzb24iOiAie1wia2V5RGF0YVwiOlwib2FlejVHQnVrVm4vZUFlOXBzYktVbWF1SmM4eWo0c2YwdW1Vd3NTU1dEZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwNTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjM2MDA2MTQyMFwifSIKfQ=="  // PUT your SESSION_ID 


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
