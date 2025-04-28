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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_58_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhrbG9mZEFpUEtxb3p3d0xVTENld0tpeHBuQWoyTTd4L1VkeGF1RUJ0dEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBhZktEQkdOUlFPUExLbmptZTVPTGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTMyYzM3YTgtMmIzNS00MDQwLTk5NTItY2FkNjFiMTQ2Njk0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE3NSxcbiAgICAgIDIzLFxuICAgICAgOTMsXG4gICAgICAyMjMsXG4gICAgICAxNjQsXG4gICAgICAxNyxcbiAgICAgIDE1OSxcbiAgICAgIDE1NixcbiAgICAgIDIsXG4gICAgICA3MixcbiAgICAgIDkxLFxuICAgICAgMTcwLFxuICAgICAgMjAzLFxuICAgICAgNDEsXG4gICAgICAxMDUsXG4gICAgICAyNCxcbiAgICAgIDEzOSxcbiAgICAgIDI2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxMTgsXG4gICAgICA0MixcbiAgICAgIDE3MSxcbiAgICAgIDE1MCxcbiAgICAgIDE1NSxcbiAgICAgIDgzLFxuICAgICAgMjksXG4gICAgICAyMzcsXG4gICAgICAzMSxcbiAgICAgIDQxLFxuICAgICAgMjE5LFxuICAgICAgNjksXG4gICAgICAyNDMsXG4gICAgICAyMDEsXG4gICAgICAxNjMsXG4gICAgICAxMjksXG4gICAgICAxMTAsXG4gICAgICA3LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktXQVBENkVKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmNitkVUNFSVBMdnNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyTWJ1eXFlKzErMWRROE42TUtaMEhnemxGU2NXbjRXR1VHejBJUjBTKzVUZmV4Y1h2UjloUnhzbU5sbHZTQmh2dzR5MnlKMG5YSDZzUmhqTlgxbkRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKdFBLRWE2T2tlaHFvOW1qQXEwQTdiMEpXNTlsQWJKaXVmRGhUSjB0V29TeEpPU3o0SGxmQlVvV1Q5dk1OSktmWm1jQ2lySW5WNmlwVE96YlVORXNpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1ODU1ODgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnREXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdEQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
