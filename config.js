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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_07_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVHJEemNzSkVmRFdMcitlQjF0bTVLZ0l4S0tORDdiSUtkV2lxanBYUnVHUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNWVxYllwY1ZTSi1HYlA1aUxHcjlyQVwiLFxuICBcInBob25lSWRcIjogXCJiMjM2YmYzNy0zNzQ3LTRkYWYtYTM0OS1jN2Q4ZGU2Y2M4NmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICA3NSxcbiAgICAgIDksXG4gICAgICA2NixcbiAgICAgIDIyMyxcbiAgICAgIDEzNCxcbiAgICAgIDIyMixcbiAgICAgIDEwNCxcbiAgICAgIDc4LFxuICAgICAgMjUxLFxuICAgICAgMjM5LFxuICAgICAgMjM1LFxuICAgICAgMjU1LFxuICAgICAgMTk5LFxuICAgICAgMTgwLFxuICAgICAgNyxcbiAgICAgIDMyLFxuICAgICAgMjM4LFxuICAgICAgMTkyLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTc1LFxuICAgICAgMTkwLFxuICAgICAgMjMwLFxuICAgICAgMTAxLFxuICAgICAgNTAsXG4gICAgICAxNzcsXG4gICAgICAyNCxcbiAgICAgIDkzLFxuICAgICAgMjUyLFxuICAgICAgMjE2LFxuICAgICAgNTYsXG4gICAgICA3MSxcbiAgICAgIDE3NCxcbiAgICAgIDI4LFxuICAgICAgMTIwLFxuICAgICAgNDQsXG4gICAgICAxMzgsXG4gICAgICA3NyxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQzTFRXRFBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjkxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l6NytkVUNFTDI5M3NBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJweHNtMEdDMWtNdkhCSndobWYwQnhWa2Q0ZEMzSWRaaXRCVk9hcWpYTHZCVlQ5NXBhRFlYemJyVWxUaW80M1BtYWtqSW81eC9LT3dpSCtaWXRGVlVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1ZGM3YW9nVDBYZzduOXJQbWZRTytsOFV2VGlZRzlMRWR5MC9LWkN1VDhiL240azRFWW4yaDFQWVliSDJTNW5pWk9EM1F1KzVyNEEySDdiQzllQXNEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2Mzc4NDMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm45XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1NzNwUkcrVks1ek1ra2FJQ21yek0vTkEybk4zbTQ4NTJaRkd2UHV1UHdzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2MTY4NzgzNjU4XCJ9Igp9"  // PUT your SESSION_ID 


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
