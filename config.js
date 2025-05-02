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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_01_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5cDI5RVlNdnJ0UWZIc1hpMm5uRUJVMlZGMG5GSFFZTWRqZG5rZ1dxYWk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrVE9WQkF5WFQ2NnRGSHFxUWNfQS13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiOTIwMzBhLTRmYzQtNDdlNS05ZGM0LWZmZDVjNGQ3MGNkNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxMzksXG4gICAgICAyMjQsXG4gICAgICAxMDMsXG4gICAgICA4MCxcbiAgICAgIDE1MCxcbiAgICAgIDEyLFxuICAgICAgMTExLFxuICAgICAgNTksXG4gICAgICA0NCxcbiAgICAgIDI1LFxuICAgICAgMTA3LFxuICAgICAgNTQsXG4gICAgICAyMTIsXG4gICAgICA5NixcbiAgICAgIDE0NyxcbiAgICAgIDY2LFxuICAgICAgNTQsXG4gICAgICAyMTUsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTk0LFxuICAgICAgNjIsXG4gICAgICA0MSxcbiAgICAgIDIzOSxcbiAgICAgIDY0LFxuICAgICAgMTc5LFxuICAgICAgMjIyLFxuICAgICAgNjUsXG4gICAgICAxNCxcbiAgICAgIDMwLFxuICAgICAgMjM0LFxuICAgICAgMTM3LFxuICAgICAgNDcsXG4gICAgICAzMixcbiAgICAgIDQyLFxuICAgICAgMTcyLFxuICAgICAgNjcsXG4gICAgICAxMjYsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkpOUDdMOEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6ODFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUw3K2RVQ0VMcUUwOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVDcVdoL2FDYXJkY1RTUWdxWERVVU5pL2x3L0ZKcU4yR3NPODFpRWFnSjdRM0VUd01Za0tOL3lwanVJcHNPYUZyREZscTRDRHZKeE9vcitIb3kyK0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt6RnZlRmkxWkY4NktJcTBCUmljbk5OS1cwaGtFNzFkcENCL2Jwakh2TGFJclJKWExBSDZBbGJ5TEwzOENwQ2xQUWh1ME9HYTNnbmR4Z3VuYlIxUGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYxOTA5MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvQy5qc29uIjogIntcImtleURhdGFcIjpcInFrSlV5eTlPa1RSdDBRK0J0K216dVZ0RVZlQ0RSUFJZc3pmS2p3aTBCcDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDQxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ2MTkwODgwNTIwXCJ9Igp9"  // PUT your SESSION_ID 


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
