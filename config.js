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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_15_04_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUV1aUcycTZuV1ZIR29tK2lrWWxGRXRrcVZONTJDU1A2Qlp3NEJ1Q0dYTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSkROSElLeDVSQzJKejZLVlVCTjUzQVwiLFxuICBcInBob25lSWRcIjogXCJhYWIwODljMi04ZjVhLTQ5NmQtYjBiMC02ZGI1OGRiODhjYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgNjgsXG4gICAgICAxNjQsXG4gICAgICAxNzMsXG4gICAgICAxNCxcbiAgICAgIDIwMSxcbiAgICAgIDE5MyxcbiAgICAgIDE1NixcbiAgICAgIDIwMixcbiAgICAgIDE2LFxuICAgICAgMTkyLFxuICAgICAgODEsXG4gICAgICA1OCxcbiAgICAgIDIwMCxcbiAgICAgIDE0MyxcbiAgICAgIDc4LFxuICAgICAgMTUwLFxuICAgICAgMTIxLFxuICAgICAgMTQsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMzgsXG4gICAgICAyNTQsXG4gICAgICAxMTUsXG4gICAgICAzMyxcbiAgICAgIDEwOSxcbiAgICAgIDY4LFxuICAgICAgMTYwLFxuICAgICAgMTY4LFxuICAgICAgMjM2LFxuICAgICAgMTg1LFxuICAgICAgMTY0LFxuICAgICAgODYsXG4gICAgICAxNTYsXG4gICAgICAxMjQsXG4gICAgICAxMDMsXG4gICAgICAxOTMsXG4gICAgICAyMjQsXG4gICAgICAyMDksXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlM2RkJOMVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXY2K2RVQ0VLU2c3TDhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNMcHJ1T1FhOU1XWk5TUjFLcDV2OENXcURvWWlnM2NSV1NhWFgvVFNPbnVrS05oYnVwOWdyMmJlL25yL2MxK0dlbEx1azlDTFRvR1d3bnRKNzJuZERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5qQTBpVWdoRjRud1U2MG5GUzIzcTRxVXVvem84eDQ3MVpnRXFnZFhKcjA3eG9lSnBiSzVwUm82K2NYV2k5TjNuRVJleVVoTnVKb1lDdDVMVENyTEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ1MDY5MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKT0RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpPRC5qc29uIjogIntcImtleURhdGFcIjpcInZDQUZ5SnhUVm9LVlBrQVFCb3NyQ2xHZWl3Syt6VHdXRVZpS003UDlKWm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ0NDc3NDIzNjI3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
