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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_48_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxhbmhMWUJTSlp6bFNVd081cjJHL08xdHk0a29PQVU3c015QzZURGpic2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDQ2MzE2NTAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQzhFNTg5OTlDMUZEQkIyMzYwNzFDNDMzRDQ3QTNBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQxODg1MThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNXdqSGJ3ejZUZ0d4ZzJacHpDYlpJQVwiLFxuICBcInBob25lSWRcIjogXCI4ODY3MDBiNS0xYmZmLTRhODMtOTUyNC03NjY2NTNlMWE0OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA3LFxuICAgICAgMjksXG4gICAgICAzMSxcbiAgICAgIDIyOCxcbiAgICAgIDI0MCxcbiAgICAgIDIzOCxcbiAgICAgIDEwNixcbiAgICAgIDIzMixcbiAgICAgIDUsXG4gICAgICAxMzksXG4gICAgICAxMTEsXG4gICAgICAxMDEsXG4gICAgICA2OSxcbiAgICAgIDE5NyxcbiAgICAgIDIzOSxcbiAgICAgIDIxMyxcbiAgICAgIDE1MyxcbiAgICAgIDI4LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgNzMsXG4gICAgICA5MSxcbiAgICAgIDIyMSxcbiAgICAgIDIyMSxcbiAgICAgIDgyLFxuICAgICAgMjA2LFxuICAgICAgOTQsXG4gICAgICAzNCxcbiAgICAgIDIwNyxcbiAgICAgIDUyLFxuICAgICAgMjQ3LFxuICAgICAgMTgxLFxuICAgICAgMTk1LFxuICAgICAgMTAwLFxuICAgICAgMjUxLFxuICAgICAgMTcyLFxuICAgICAgNzMsXG4gICAgICAzLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNINThWU0ZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDYzMTY1MDA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbGhhbWR1bGlsbGFoXCIsXG4gICAgXCJsaWRcIjogXCIyMDEwMzkzOTk2MjkwNTE6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlg5NUlBQ0VOM28yTDhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkUlVFbFdGbUJLVUFENEVHMGJTMGE0eFM2VjlzTnYvY053VHpDbUlQOUJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJGRG5xa0thVGRtUnE3ZXc0NzdPMHprTkFKcjhmUWphNlVFY2pYakdzK2l1ZURsa0syRzY2eXdIWWlLYnZxNFNxeDNEd3Y5TjdNMEJ6dzRkelhFZERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIksxTmhpdzRzaXVlR1pDMVpYT0YxOTVRa3g3MnBWU0M2MThRZTh1V0EvdmVBZ3N3YXlCTTFpbUZNanBZNHFacHRDRGdBaStmZGxYTVhqT3J6OGdpK0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA0NjMxNjUwMDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDE4ODUxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZhRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmFELmpzb24iOiAie1wia2V5RGF0YVwiOlwibDB6cGtvRURKcWlwdlVHMnhMU0dYeE1zTnVSYzVDc0xjdTZWUms3TGo0dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mzg1MjUzOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDE4ODUxNjAwOVwifSIKfQ=="  // PUT your SESSION_ID 


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
