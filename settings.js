// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZ1OFFXK2FWcmtqeDB6OWdTNUNBNG10RnY0MWtJUnNmZ1p6VzR1RjQyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUJsVWRUNXJCSDBEdnQ3SlBpZ04rOUF6RTY1NjQ1SmlmRWJYWmMyS2xrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRTVNcU9obkxGbjdta2RMYlpwRDVYUExLR2k0SGpIclIrRXNtRXR1a0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSEtzR2tUYnRTdzVGbDVpVGlUeTBWcllVdTN3NjNXZFBISFhsbXlYNlhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFVTZjZzlHYmM4SnorTVFHOEZrTm94cVh3bGJJbngxR0ZPbzE5QmQxM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZybkFvcnpuR0o3a0xEdUxnZ2lyRUplN2YzYzVWUlUwV2VDNURTU1lBRlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhVYVEwUGNpcXFpU2JwTEVmbVVRaFJ2N1VYNzFiVVkvNVdnSGdtRGRWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDZveDlWZkIzUVBlaGNnSGlCWUt1STFjNDNCUmNzSW5hWERMc1dXWXNBTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDNGlJYnZISm5sMWlJNlh3bVU5S1oyQi9SQjMrYnFjejNveWxXS1ZJckVTdTVrZlZEMEF5bnlHUGVXb3hUM3o3Nkd3cWVlOFlKWEQrZVdBbjZoN0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJiSUhzWEZPYWYvK3BiNWNyV2dZOHJRTUJuNXo4N0FHanpQaElYV1hXT3JJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIM0E2aE5sWFNnYXc2WVNqWGVrdTRnIiwicGhvbmVJZCI6IjA4MzY3NDMxLWUxYTktNDhhYi04ZWRjLTVjZWQyNTdhNDIzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHMVlyZHlVaFA2NXllM1VGZWM1SXgvRTN1N3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhpSjZWUU85M0U2Sk9PV1NGMlBUenNpdXcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxBWlZLNU1GIiwibWUiOnsiaWQiOiI2MDExMTc1MDg1MjU6NzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BITmtLZ0VFSis5c0w0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZBTlJxVThBVytDcWhsVWVyMm5oa0VSK0dqTzkrd2Jvb2J3ZFZuVEUwRkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik83OVJFWDRlL25PZDlSdS9iNzdRV2xSK2pYUHNySGl5WVFOdXZNS01WYVVpYm84bUdnY2pQckk2RXEwMVF0cXBMQ2N3TU1SdXZISTFvOEtpQVNlbEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzUmF5Qzl0cWdoYXJxbktiOW4rQkZ4YVZ2YzRrdTRHNWc2NzVBVzBWZitxSHFpcnRQemdIV0JwOG5RQmx2UTJyODhLeWFZdGNId1dVOGpZdmZnZ25Bdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYwMTExNzUwODUyNTo3NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYd0RVYWxQQUZ2Z3FvWlZIcTlwNFpCRWZob3p2ZnNHNktHOEhWWjB4TkJSIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxNDMwNDQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx5VSJ9';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '꧁ঔ☬۝𝐙𝐀𝐘𝐀𝐍𝐅𝐎𝐔𝐑𝐅𝐈𝐍𝐆𝐄𝐑𝐒۝☬ঔ꧂';
const packname = process.env.PACKNAME || '꧁ঔ☬۝𝐙𝐀𝐘𝐀𝐍𝐅𝐎𝐔𝐑𝐅𝐈𝐍𝐆𝐄𝐑𝐒۝☬ঔ꧂';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || '꧁ঔ☬۝𝐙𝐀𝐘𝐀𝐍𝐅𝐎𝐔𝐑𝐅𝐈𝐍𝐆𝐄𝐑𝐒۝☬ঔ꧂';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/ax92lq.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'true';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl,  // Use groupControl for antilink
  antibad: groupControl,   // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
