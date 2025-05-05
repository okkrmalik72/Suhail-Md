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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_42_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBKdG1BR3dlbDFNN1VEcWNZbTEvTG9NZU5WdDRiUW9ya2pMTXlaa04ydU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRiRG9aeVlIUkp1T0RjR2NkSUVka1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTViNWU0OGUtMTAxNS00MzY1LWJiNjUtOWNmNjdlMDQ5NTM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDIxMixcbiAgICAgIDgyLFxuICAgICAgMTksXG4gICAgICAxODYsXG4gICAgICAxNjMsXG4gICAgICA2OCxcbiAgICAgIDY5LFxuICAgICAgMjQ0LFxuICAgICAgMTAxLFxuICAgICAgNTksXG4gICAgICAyMzgsXG4gICAgICAxMDcsXG4gICAgICAyMzcsXG4gICAgICAxMjUsXG4gICAgICAxMDYsXG4gICAgICA2OSxcbiAgICAgIDIwNixcbiAgICAgIDE0MyxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDE5LFxuICAgICAgMTI5LFxuICAgICAgMTcwLFxuICAgICAgMzEsXG4gICAgICAyMTMsXG4gICAgICA5LFxuICAgICAgMjM4LFxuICAgICAgNCxcbiAgICAgIDE4NyxcbiAgICAgIDIyNixcbiAgICAgIDIwMSxcbiAgICAgIDExNCxcbiAgICAgIDE2LFxuICAgICAgMTcyLFxuICAgICAgMTIxLFxuICAgICAgMjIyLFxuICAgICAgMjUzLFxuICAgICAgNzEsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzJWWVJWM1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTM3K2RVQ0VQQ3U0TUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldIQUtBdlRHdUFLejFiNFNnTXpQU2xmMkZPd3F0OFNJRW42NlpNRlJSbzEvSzhFVm1sNDd3VDdQUFNvc1NKYjFPZ1hEWEZDN0U2a014SWJLeWRpRkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImN3MDRaNUFNQy9IVmlNZWJma0FtSG9wc0Q5RE8rM3VHL05HbWF5VHFYZ3JFVFVSeW1oeXFkTDEwV0RJaWhVUW9ZaHZKVG5jNE5PejhtQk8zSTYvTUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY0MDkzMzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvWS5qc29uIjogIntcImtleURhdGFcIjpcIkQrOStsa21VSDJmaDJUTFhYY0ZKdUVWQWE0dVU4NDZxQmhmU1BrWUtINm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY0MDkzMzc3NjRcIn0iCn0="  // PUT your SESSION_ID 


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
