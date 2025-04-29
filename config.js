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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_58_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDg1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJncWtnRVhHaVJTVUNXNktwMVl2c2tUMzRSbktLQWVTZHVXVVVDQkwzVU9vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzT1FSU0hKaFJnSzFtWkNhYmdLSTR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVjYjg0MTA0LTQ2ZmMtNDJjYy1iNzNmLWY0NTYxOGU1MmE1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMjI4LFxuICAgICAgMjgsXG4gICAgICAxMjQsXG4gICAgICA1OCxcbiAgICAgIDEzNyxcbiAgICAgIDE2OCxcbiAgICAgIDEwOCxcbiAgICAgIDEsXG4gICAgICA3OCxcbiAgICAgIDE2OCxcbiAgICAgIDEzMyxcbiAgICAgIDE4NCxcbiAgICAgIDE1MSxcbiAgICAgIDEyMyxcbiAgICAgIDM5LFxuICAgICAgMjAyLFxuICAgICAgMjAzLFxuICAgICAgOTQsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTQsXG4gICAgICAxOTcsXG4gICAgICAxMTQsXG4gICAgICAxOTMsXG4gICAgICAyMTIsXG4gICAgICAyMDIsXG4gICAgICAxMixcbiAgICAgIDE5NCxcbiAgICAgIDUxLFxuICAgICAgMjI2LFxuICAgICAgMixcbiAgICAgIDM0LFxuICAgICAgMjE5LFxuICAgICAgMTcsXG4gICAgICAyMDQsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDE4NixcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM3TDNOWEFRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjY5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BuNitkVUNFUFNadzhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJad3JzUjVYaFFMSkhwdUFqR0tEUnd5Mkk0Ti9JZndsQkw4YnkrRjNGeGxTUHFFMVBubms0UTVvYXFhRFNmaWk4UEpLQVZGZU9tOTlScXp0b0o3bTBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYMzJNN212UGhVK3ZTWktKTDJGc0tOMDZ4WFcwVUttc1FUMk5mL3BjdDE0dWxkc3lMUG9PRzN1Qm0xR09jaE10alFXK2FIWUYzYzJlTGVDdlNrbGFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1OTMxNTEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnREXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdEQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2VjBrenI5Nk8yUVJHdTBhNUNTZnFlRXhLbmp4clZhb3FCbFVFdHJUM0E4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTg0NjA2NzEyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
