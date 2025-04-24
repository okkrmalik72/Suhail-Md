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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_52_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyY3F6QTY0TWxrVmlVSjNzdFZtbzlUZTRDZmZnWk9iUzBZNFNSNGRRVUd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwZGxoTjNiclNVYVlHSUJKVXotU1l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJjYzZlNTNlLWM5ZTItNGU1NS05NDUwLWI1MTAwMDNlYzY4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDE3NixcbiAgICAgIDIzMyxcbiAgICAgIDE3MCxcbiAgICAgIDE5LFxuICAgICAgMSxcbiAgICAgIDY1LFxuICAgICAgMTIzLFxuICAgICAgMzAsXG4gICAgICAxNTMsXG4gICAgICAyNyxcbiAgICAgIDEwNSxcbiAgICAgIDI1LFxuICAgICAgMjQ1LFxuICAgICAgMTMsXG4gICAgICAxNDcsXG4gICAgICA3LFxuICAgICAgMTc5LFxuICAgICAgMzAsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTU1LFxuICAgICAgNjYsXG4gICAgICAyMTIsXG4gICAgICAxNDQsXG4gICAgICAxODAsXG4gICAgICAxNjEsXG4gICAgICAxNzcsXG4gICAgICAyMixcbiAgICAgIDIyMyxcbiAgICAgIDU3LFxuICAgICAgMjEyLFxuICAgICAgMTMyLFxuICAgICAgMTg2LFxuICAgICAgODQsXG4gICAgICAxMzcsXG4gICAgICAyMzYsXG4gICAgICAyMzYsXG4gICAgICAxOCxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldQOTZHS1JFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTE0MDg3NTA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzODgyNzAxNTQ1NzAwOjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ3JhenktTXVuZGEt8J+MuPCflJDwn4yK8J+pt1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YMDhOMEJFTjZ2cU1BR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT1hCMklHbXVzczNIY2x0bGd2RTQvM3I0emYzTWduWWdyNXV3N2JCd3JuND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJicjY4cnZVRlJFME9RTWh0aWdoTURxYVUwSVBPcUhJRGVPTEdpUjFOZVB3bnFrYWQ5aFhvNGgvT21BbDZ5dmg5YnZudlZVekRPSVZUNFBoTVM2SDNBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvdVp3V0YrWWNnR3AyVzlWaWk3OWVYVDNhSHBwYWdZTjNUSGpmNXZxWmV4ekIzblVrbnViMjJ0dnZ5YnJXZGV0WWEwM0FPY1c5SjMxV3NJZ2crK2VCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTE0MDg3NTA6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0OTE5MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwzOS5qc29uIjogIntcImtleURhdGFcIjpcIlgyNEM1emhVQWtFbkd2Tmk4ZHg3WTZBVEZTSVB2ZUMvTlFjVnptcEhxT289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY1MzIwNTQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
