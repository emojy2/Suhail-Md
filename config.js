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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_20_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwMEpJNlNuclhiQ0hBS0xYd09ZSHlRK2FZT3R5RWVTOS8wVjkraWZWOTRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwMDA0OTM5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTIwQUQwNzI2NDE0MkQ4MTM5NjMwQ0QxRkIzMTMzQzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjU3NjQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzAwMDQ5Mzk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMEU5RkMwQ0JGMjMxQTYyNDU0NTA4QTJENTZBNzNEN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNTc2NDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjZOTUFSQTJTazI3WklqekpDWXlRUVwiLFxuICBcInBob25lSWRcIjogXCJlOTBhYTlhMy0xNjhjLTQ0YjctYWYxMi1jMTNhNjQ2MTJhZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAyMzYsXG4gICAgICAyMDQsXG4gICAgICA3MyxcbiAgICAgIDE0MCxcbiAgICAgIDI0LFxuICAgICAgMTcyLFxuICAgICAgMTc5LFxuICAgICAgMTY1LFxuICAgICAgNDcsXG4gICAgICA3MCxcbiAgICAgIDI0OSxcbiAgICAgIDU0LFxuICAgICAgNDAsXG4gICAgICAxMTQsXG4gICAgICA0NCxcbiAgICAgIDQ2LFxuICAgICAgMTQwLFxuICAgICAgMTYyLFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTk5LFxuICAgICAgMTc2LFxuICAgICAgMjM5LFxuICAgICAgMixcbiAgICAgIDY1LFxuICAgICAgMTM4LFxuICAgICAgMjYsXG4gICAgICAwLFxuICAgICAgMTAwLFxuICAgICAgODMsXG4gICAgICAyMjQsXG4gICAgICAyMjUsXG4gICAgICAxNDAsXG4gICAgICAyMDQsXG4gICAgICA1NyxcbiAgICAgIDE2MSxcbiAgICAgIDIzMixcbiAgICAgIDEyOSxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0R1FQNFRXS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAwMDQ5Mzk3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3MjYzMzgyNjkzNjE6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJFbGlqYWggS2VsbHkg4oSiXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2IxeWJzREVPU1lwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2WmlaVzNsS2NHeER2ZHdmZjlZT0xEZW9xWHp2MitkMkdiVjlJNzJLaWs4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNJUUtXeml6eWdwYitFQTJNQ3VyMHZLUnVrdDFLUHQydUJnTjJOUENDaDV5dU1najBNTmFyOWRsSkpLWlNPSUlWcEFUNGpzVFJzeksyTVRUYUhDNEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJXUVRIRkhSK2xEOTVIQzk5RUxtUzQ3NC9WaXVoOGEzV0Q3QktNSHRiSExtNTB0Ykc5UE82UnNibVpqcHZmNHFlS1cyUXRVWDhNV2VYRDNLaEl4aWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMDA0OTM5NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTc2MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOMjNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU4yMy5qc29uIjogIntcImtleURhdGFcIjpcIkd5TFlHTitnSUl6UVJIT25seHY2dWIxd1ozTnViK09yWGN6V3NuNlVYTTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMwMjQ5MzgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNTc2NDE5MTZcIn0iCn0="// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
