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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_00_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdLb01NT29uT256cDhRZnpCU3BtbFowVEVtNjRGYkZKMGk5WWVhS05OeTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZjcVlaM3B3Uk1xZzQ3NG93Q2ZhX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWY5NDAyZmUtM2NiYS00OGEyLWEwZTctOTViMjIzMjk3NTRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDE0OSxcbiAgICAgIDE2OSxcbiAgICAgIDIyMixcbiAgICAgIDExMSxcbiAgICAgIDU0LFxuICAgICAgMjQ0LFxuICAgICAgMjUwLFxuICAgICAgMjEyLFxuICAgICAgMTYxLFxuICAgICAgMzgsXG4gICAgICAyNDIsXG4gICAgICAzOSxcbiAgICAgIDEyMSxcbiAgICAgIDk1LFxuICAgICAgODEsXG4gICAgICAxMzIsXG4gICAgICAxODcsXG4gICAgICAyNTAsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTYyLFxuICAgICAgNjcsXG4gICAgICAyNDgsXG4gICAgICAyMTMsXG4gICAgICAyNTEsXG4gICAgICAxMSxcbiAgICAgIDE1MSxcbiAgICAgIDIwMixcbiAgICAgIDI1MyxcbiAgICAgIDE5OSxcbiAgICAgIDAsXG4gICAgICAyMDcsXG4gICAgICAyNDYsXG4gICAgICAyMDksXG4gICAgICAwLFxuICAgICAgMTgwLFxuICAgICAgMTg0LFxuICAgICAgMTE1LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA4ODNLSk5KXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUNytkVUNFTExWMWNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMY2hENStCWGNWYkV5VndEbGVLQVJEcGEyNUw2MmFrWHNxZWZEa29VS3I5ZFRLZGV6eU5JbmVOQUZsY3pxb1VaZkhDNmg4dS92cTAyK0syR0lRYWlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIZEV1Si9aREorRStKMnhvWGx0Uktna0NUcjJXNENlT1VHN2YreThZY25yWElpaWdpcTJHbm5seVZjTlN5elJ1OHdDalNDQ2pBZDM1THhDNDV6VGtBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MjM0MDM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm9IXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2d3hNUmFSTDVBbFNaMFBsaEZTem96cThiL0oxZTAxbTdPSTZCeXloRU9FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzA0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2MjM0MDQ0MjM5XCJ9Igp9"  // PUT your SESSION_ID 


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
