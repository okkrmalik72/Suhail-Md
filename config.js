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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_03_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmhncGxWQXN4V1NjelQraFQrZjI1K0tFMjlTUXg5WHcrMkxHVHd5ZmxOdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1pZcXdhd25SMHVralFZaDlsOWY4UVwiLFxuICBcInBob25lSWRcIjogXCJhODU4MDRkMS0zZDY3LTQ3ZTctYTc5My1iNTAyYWZmYWEyYzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTIsXG4gICAgICA3MixcbiAgICAgIDEzNyxcbiAgICAgIDE1MCxcbiAgICAgIDM0LFxuICAgICAgODUsXG4gICAgICAxMTIsXG4gICAgICA4NSxcbiAgICAgIDIwNSxcbiAgICAgIDIxMixcbiAgICAgIDQ3LFxuICAgICAgMjE4LFxuICAgICAgMTIzLFxuICAgICAgNyxcbiAgICAgIDIwMixcbiAgICAgIDI1MCxcbiAgICAgIDI1MixcbiAgICAgIDE3MixcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDEyMSxcbiAgICAgIDUwLFxuICAgICAgMjQ0LFxuICAgICAgOTksXG4gICAgICA0NixcbiAgICAgIDI0NyxcbiAgICAgIDIzNyxcbiAgICAgIDg5LFxuICAgICAgMjM4LFxuICAgICAgMjM5LFxuICAgICAgMjEzLFxuICAgICAgMTA3LFxuICAgICAgMTc1LFxuICAgICAgMTY3LFxuICAgICAgNTksXG4gICAgICA0MCxcbiAgICAgIDIyMixcbiAgICAgIDIzLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlFOSDRESjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGo2K2RVQ0VKK1N3TUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRJWDlZQlM0WGh4VVF2RGw3SmxEcWpsVU14K1VpMTZlQXN3RkpxZXVReDR0bnhLN2lQaFJlem1kaWMzdWNnenFkVjNQK2V4UEJVS2JOWWowYlJYYkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktXUjMzZXF4eTZLTzhyd2lUYlJnSkJYakhaamt5WVcyTUhsQUZiV3BQMVU0MmVoUFhmN3NpSER4RU1rb0Y0K0FLUEtMbG51RS8zYUJxUnBmb2VVV2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU4ODEzNzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ0RC5qc29uIjogIntcImtleURhdGFcIjpcIjZWMGt6cjk2TzJRUkd1MGE1Q1NmcWVFeEtuanhyVmFvcUJsVUV0clQzQTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1ODQ2MDY3MTI1XCJ9Igp9"  // PUT your SESSION_ID 


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
