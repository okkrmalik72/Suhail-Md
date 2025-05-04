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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_02_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNCxcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NixcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibUVxR0krenVJcyszODNkNlJ5THFOSy9iaEhVcy83Ti8yZFd2Wno0WW84OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHZvUlJ2ZnRUbjJUZHRiNHV3cTBiZ1wiLFxuICBcInBob25lSWRcIjogXCJmOTliMDc0Zi0zNDRiLTRkZGEtYWQ2Zi02OWMxNTUxMjFjNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMTY3LFxuICAgICAgMjMwLFxuICAgICAgMTMxLFxuICAgICAgMjYsXG4gICAgICAyNDEsXG4gICAgICAyMTgsXG4gICAgICAyMjUsXG4gICAgICAxNDEsXG4gICAgICAyMzAsXG4gICAgICAxMDEsXG4gICAgICAxMDYsXG4gICAgICA4MSxcbiAgICAgIDc1LFxuICAgICAgMTc4LFxuICAgICAgOTksXG4gICAgICA5NyxcbiAgICAgIDE2LFxuICAgICAgNzgsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMjE1LFxuICAgICAgMTQxLFxuICAgICAgMTM4LFxuICAgICAgMTEwLFxuICAgICAgNjcsXG4gICAgICAxMTMsXG4gICAgICAxMzQsXG4gICAgICAyMzYsXG4gICAgICAxNzMsXG4gICAgICA2OSxcbiAgICAgIDMyLFxuICAgICAgMTQ3LFxuICAgICAgMjIwLFxuICAgICAgMTcxLFxuICAgICAgMzUsXG4gICAgICA3NSxcbiAgICAgIDUwLFxuICAgICAgMjU1LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkgyOEhCOEFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0Ojg3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqNytkVUNFTTdOMjhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0V3MxQkRnM01QUlRGaUNJeDJPaHQzZFVRV2N5SjVMNTYrcWE0NFd0VHI1czZ6T3NhUXRaaXdmZnJHOE5lMkcrSmVJaytBYjA4SmV0UzdwenB3QlZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxTktGL3ZHUkdSa0xaZ1ZJN3BvbG9IZ3lRK0NUMEd1Y2JOQ0VuVEN3TUM2V3hGVklIZ0hwK013N3NCcUQ0NVlzSVJrbGxvRlQyMTNtYmFVOCt5NzRDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MzMxMzQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm9LXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb0suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuSGZiY1pZQ2EramNxdVNMcExBQ2xHV3hMMGo5S3FRL2R3L0xrWE53WDFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjI4OTQzNDYxNlwifSIKfQ=="  // PUT your SESSION_ID 


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
