import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["526242129105"];
global.collaborators = ["526442036556"];
global.Administrators = ["5959821399"];

global.botname = '🌸 Yuukibot-MD'
global.namebot = '☀️ Yuuki Bot'
global.bot = 'AsunaYuukibot'
global.packname = '🌱 Yuuki𝗕𝗼𝘁-𝗠𝗗'
global.wm = '🌱 AsunaYuukibot-𝙈𝘿'
global.author = '© P𝕠𝕨𝕖𝕣𝕖d B𝕪 𝕯𝖆𝖓𝖎𝖊𝖑𝕣𝕩𝕫 🥷🏼'
global.dev = '© P𝕠𝕨𝕖𝕣𝕖d B𝕪 𝕯𝖆𝖓𝖎𝖊𝖑𝕣𝕩𝕫.'

global.APIs = {
xyro: { url: "https://api.xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null }
}

global.banner = 'https://files.catbox.moe/ex4jo0.jpg'
global.icon = 'https://files.catbox.moe/ex4jo0.jpg'
global.currency = 'Coins'
global.sessions = 'sessions'
global.jadi = 'jadi-sub'
global.namedb = 'datos.json'

global.my = {
  ch: '120363420575743790@newsletter',
  name: '🌸 ᴀꜱᴜɴᴀ✦ʏᴜᴜᴋɪ ☀️',

  ch2: '120363420575743790@newsletter', 
  name2: '🌸 ᴀꜱᴜɴᴀ✦ʏᴜᴜᴋɪ ☀️',

  ch3: '120363420575743790@newsletter',
  name3:'🌸 ᴀꜱᴜɴᴀ✦ʏᴜᴜᴋɪ ☀️'
}

global.emoji = '🌸'
global.emoji2 = '☀️'
global.emoji3 = '🌱'
global.emoji4 = '🍁'
global.emojis = '🕒'
global.rwait = '⏱️'
global.done = '✅'
global.error = '❌'
global.msm = '⚠️'
global.moneda = 'YUUKICOINS'
global.textbot = '🌸 AsunaYuuki Bot - Tu asistente de WhatsApp'
global.channel = 'https://whatsapp.com/channel/0029VbBWlS73mFY7ovlF2a24'
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${global.owner[0]}:${global.owner[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
