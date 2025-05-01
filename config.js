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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_57_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2daY3lCVjJSc1daNmp1NHFHM1pFcC8vSGU0M09mZFp6ZmhGMjZGU2hOMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidFV2dnpIVW5SOG1ORVVlaGlFaWJrd1wiLFxuICBcInBob25lSWRcIjogXCI0M2UzMDk0Yy1kZDBkLTQ5ZDAtYThkYi1jNjBjNWQ1NWQwZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgODcsXG4gICAgICAzMixcbiAgICAgIDE2OCxcbiAgICAgIDg3LFxuICAgICAgMTMxLFxuICAgICAgNTYsXG4gICAgICAxNzcsXG4gICAgICAxNyxcbiAgICAgIDIxMixcbiAgICAgIDE2NCxcbiAgICAgIDEyMSxcbiAgICAgIDE4MixcbiAgICAgIDE2MCxcbiAgICAgIDEyOCxcbiAgICAgIDIxNSxcbiAgICAgIDIwOSxcbiAgICAgIDI0OCxcbiAgICAgIDQzLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxNjYsXG4gICAgICA4OCxcbiAgICAgIDEyMCxcbiAgICAgIDE5MSxcbiAgICAgIDQ0LFxuICAgICAgMjA5LFxuICAgICAgNjIsXG4gICAgICAyMTMsXG4gICAgICAxMzIsXG4gICAgICA3NSxcbiAgICAgIDEzNSxcbiAgICAgIDEzLFxuICAgICAgNTQsXG4gICAgICA3MyxcbiAgICAgIDc2LFxuICAgICAgMTU5LFxuICAgICAgNCxcbiAgICAgIDY4LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjczTUJMQkpCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6NitkVUNFTmFOeThBR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNMWM4bmVYUXVvUXN4M1kxTDVpZ2JjYW9xTEcvL05BSnpuZnhpcGRHZXNFVDQzbU5KYmNhTmgxVEF3UmFBTENucHNsOXZtTGRIVXhNVGFJVVA5cm9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwZVdBNW9aMnBIeE9BcHlXWUFLN3lxZmNOSHRJZk81UFh1Y0NnZVRDWVVScGd4cVM3Y3cvbUN5eWlESW9xWWc0bGVtQXNadit0NW1oYUxLaUpQWERpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MDYxMDE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnRMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmTmhQTDVIV2pxOEM4QVFiQWZ6UFdTZTg0Mk92Znlkc2VSQlBmUDFyMXFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTk0NzM5ODgyMVwifSIKfQ=="  // PUT your SESSION_ID 


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
