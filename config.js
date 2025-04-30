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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_34_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgODksXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJ2SWN5eVBWcjBLbE1FSzV0WWlOVVVtMndDYjlFaFp4Sk5na0xxcHZVSTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZWa2tQdDVlUXJpSUJGalg3SzIyZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmEwZDcyYmYtYTFkNi00Zjc0LThmYjMtYzg1YTQ2MDBhMmNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDE5MSxcbiAgICAgIDgyLFxuICAgICAgMTI5LFxuICAgICAgODAsXG4gICAgICA3NyxcbiAgICAgIDE1OSxcbiAgICAgIDExMyxcbiAgICAgIDUxLFxuICAgICAgMTIxLFxuICAgICAgMTQ4LFxuICAgICAgMjE0LFxuICAgICAgMTU3LFxuICAgICAgMjUxLFxuICAgICAgMTM3LFxuICAgICAgNDYsXG4gICAgICAxNTgsXG4gICAgICAxMjcsXG4gICAgICAyMDMsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAzMixcbiAgICAgIDIxNSxcbiAgICAgIDYwLFxuICAgICAgNDQsXG4gICAgICAxMCxcbiAgICAgIDE2NixcbiAgICAgIDE1OCxcbiAgICAgIDg3LFxuICAgICAgMjA5LFxuICAgICAgMTAyLFxuICAgICAgMTgsXG4gICAgICA2NyxcbiAgICAgIDE3MCxcbiAgICAgIDE3MSxcbiAgICAgIDQzLFxuICAgICAgNDYsXG4gICAgICAxMTAsXG4gICAgICAxNjYsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0JSR0c0WkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHY2K2RVQ0VOQ3h5TUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhOQVoycGdmbWtiNHB3bWFyZG5iRTdmTERpNUJXODlXYVRPNmI3TEs1WnlmM09MS1hDQ1A1TUZOZzJKRSswdHJBVzhZVEtJY1YyVXFNdWg4c3U0WEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdsc0piOXBCa2hjNkdHc0VNbHcwdm5QOW4wcDVYazlBYTkrZEZoUjlzNHQ1cVAzUjdJNFVtY0daOEkrOUhDVVFQRTB4S0hES0JKa0NaZXYrN3EyWGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYwMTY0NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdExcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ0TC5qc29uIjogIntcImtleURhdGFcIjpcImZOaFBMNUhXanE4QzhBUWJBZnpQV1NlODQyT3ZmeWRzZVJCUGZQMXIxcVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1OTQ3Mzk4ODIxXCJ9Igp9"  // PUT your SESSION_ID 


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
