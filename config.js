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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_47_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyeUszWmUreVpqUk11NDE0Q1JBYkNFRUsrb250bEFhbFQveHdIb04rSTg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFaTNabmROWVJ4aUtaYUdPTDJmNWhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4NGE1ZTJmLTJhMGYtNGYyZC1hZThmLWZkMTA4NjY3MTY4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxNixcbiAgICAgIDg4LFxuICAgICAgMTIwLFxuICAgICAgMjU0LFxuICAgICAgMTI4LFxuICAgICAgMTk5LFxuICAgICAgMjI4LFxuICAgICAgMjEzLFxuICAgICAgMTY1LFxuICAgICAgNTcsXG4gICAgICAxMDcsXG4gICAgICAxMDUsXG4gICAgICA0MCxcbiAgICAgIDExMCxcbiAgICAgIDEwOCxcbiAgICAgIDIxNixcbiAgICAgIDkwLFxuICAgICAgMTI1LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICA5MyxcbiAgICAgIDI3LFxuICAgICAgNDIsXG4gICAgICA2MyxcbiAgICAgIDE1MixcbiAgICAgIDE1NSxcbiAgICAgIDIwNSxcbiAgICAgIDE5NixcbiAgICAgIDE0MCxcbiAgICAgIDEzNSxcbiAgICAgIDk2LFxuICAgICAgMTU3LFxuICAgICAgMjA5LFxuICAgICAgNzMsXG4gICAgICAzNixcbiAgICAgIDI0OCxcbiAgICAgIDIwLFxuICAgICAgMTU2LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU1RE1NTU1OXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzNitkVUNFT25hemNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzM2dUZyt1U2VCSHVFRVFUTXZwL3FKTG9Sb0NvNHVsSW1QR3ZqWWpUQ3VBN2VVTmsxK2szY1RFVTRnNEZBbmh0SzdEOThWcGxTbVNSdFFDODJydGFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVU1JveDg2aHVRaitSeHlpVVdwb2JNUU5qWmMyc2g1eXhEaTNwYjJoLzIzdDdKMkNOYTFyRzR2dCtvTERzK3pRWWU5c3JiZG9Kb01jUjczZFRscGFnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MTAzNjYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnRTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdFMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVajEzNHNzbndpQ3VzSFQ0TFB4SUJOM1k0WjY3NlIxenVMZVdmVm4yZUlNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAzNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjEwMzY0OTk2N1wifSIKfQ=="  // PUT your SESSION_ID 


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
