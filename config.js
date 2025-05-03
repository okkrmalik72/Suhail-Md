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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJndVNMdjlqMGtyL0ZCejl3U0duN1pQRlFObjlwenBoSDFyaHhWSHZXOGRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMWDBsbmdlQlMtUzFpY0lOVFh4c0VRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUwMzMyYzQwLTgzYzctNDllNC05MWZkLTE5NmIwNzE2NzIwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAyMTUsXG4gICAgICAyMzIsXG4gICAgICAyMDYsXG4gICAgICA0MSxcbiAgICAgIDEzMCxcbiAgICAgIDIwNyxcbiAgICAgIDE1LFxuICAgICAgMjMyLFxuICAgICAgMzQsXG4gICAgICA5MCxcbiAgICAgIDU4LFxuICAgICAgNjgsXG4gICAgICA5LFxuICAgICAgMTQsXG4gICAgICAxNjksXG4gICAgICAyMzMsXG4gICAgICA2NixcbiAgICAgIDMwLFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDIyOCxcbiAgICAgIDEyMSxcbiAgICAgIDEzMCxcbiAgICAgIDY5LFxuICAgICAgNDAsXG4gICAgICA1MSxcbiAgICAgIDM4LFxuICAgICAgMTg1LFxuICAgICAgMTI5LFxuICAgICAgMTM3LFxuICAgICAgMTkzLFxuICAgICAgMTkwLFxuICAgICAgOTQsXG4gICAgICAxMTAsXG4gICAgICA1LFxuICAgICAgMjExLFxuICAgICAgMTI2LFxuICAgICAgNjYsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0daM0RKVzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6ODVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWI3K2RVQ0VNNkcyY0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh5YVVJcHFLL0NWK2hkeThTNkFENlJOaDNhUjYyTTNkU3NSd0pWdFVUcTBxQXlSSjFyaTBYN2drWUN1RVA0bW9QNkhWcGZmdUtTK205UWxxa0Rvd0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9nWDRGTVhFRms1dExDZC91VGNLVWNqWkFRelBnellPQThpc2Z1c0luMUkzWHRXWEx4TXlDZlIyNWN6Z3dKR0dVWStiWG16WU0rSmlqV1JFY2kwNkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYyODk0OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvSy5qc29uIjogIntcImtleURhdGFcIjpcIm5IZmJjWllDYStqY3F1U0xwTEFDbEdXeEwwajlLcVEvZHcvTGtYTndYMW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2Mjg5NDM0NjE2XCJ9Igp9"  // PUT your SESSION_ID 


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
