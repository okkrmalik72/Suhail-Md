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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKcTIyZHhtQWJYYlRMM1lUVDc4cTQrVjlQenpPVGxHZVhiOWYxbllQTXA4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItbFAxQnltNFRjZWQ3NnBiNnhKRkFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhOWMxMzMzLTM5M2EtNGE4Yi05MDI4LWZjY2UyNDVmOTdkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAxMTUsXG4gICAgICA0NyxcbiAgICAgIDI0NCxcbiAgICAgIDIxNixcbiAgICAgIDE2NCxcbiAgICAgIDE1MSxcbiAgICAgIDY0LFxuICAgICAgMjAyLFxuICAgICAgNTAsXG4gICAgICAyMixcbiAgICAgIDgxLFxuICAgICAgMTQ4LFxuICAgICAgMTQ1LFxuICAgICAgMTI4LFxuICAgICAgNjAsXG4gICAgICAyMjAsXG4gICAgICAyNDYsXG4gICAgICAyMjIsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxMDUsXG4gICAgICAyNDksXG4gICAgICAyOCxcbiAgICAgIDE4NSxcbiAgICAgIDE5OSxcbiAgICAgIDI1MCxcbiAgICAgIDcwLFxuICAgICAgMTU2LFxuICAgICAgODksXG4gICAgICAyMzMsXG4gICAgICAyMzksXG4gICAgICA3OCxcbiAgICAgIDEyNyxcbiAgICAgIDY0LFxuICAgICAgMjAwLFxuICAgICAgMjUyLFxuICAgICAgMjUsXG4gICAgICAxNTcsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEdUN1laSDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDc2K2RVQ0VPdkl6c0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjgxeWVoVVNSb0hVMm1ITFNoZTlTOVM5eFlqU211STY4ak5KMXcvdFlpbGdNem91UENKRFdiQjZrYWdzb1lwaElvKzkxSUh5c011TmZLQUIrSFRDaENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInMwT1ROU05wYzRONmF4cjRzVnlTNFpnRlAyTGlZR084QzZYMG85Rjc5UlNpQzBJTHFnNTVMMUF2Uzh3SE5ZdnVtQnJ0Y3haeU05VE1oY2U5UzV5aEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYxMTc3NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ0VC5qc29uIjogIntcImtleURhdGFcIjpcImVpRUhjenBrS2dxZk5KaXBsY3RMTUZzZkNlekJ4TXZzR0dUakZ6NytSUU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
