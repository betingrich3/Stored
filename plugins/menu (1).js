const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    react: "🛸",
    alias: ["panel","commands"],
    desc: "menu the bot",
    category: "main"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let desc = `*╭┈───────────────•*
*〈 Hello ${pushname} Welcome*   
*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
*│  ◦* ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│  ◦* ᴍᴏᴅᴇ : *[${config.MODE}]*
*│  ◦* ᴘʀᴇғɪx : *[${config.PREFIX}]*
*╰┈───────────────•*
*◆─〈 ✦${config.BOT_NAME}✦ 〉─◆*
*╭┈───────────────•*
*├ 1* •  *OWNER*
*├ 2* • *DOWNLOAD‎*
*├ 3* • *GROUPS*
*├ 4* • *INFO*
*├ 5* • *RANDOM*
*├ 6* • *CONVERT*
*├ 7* • *AI*
*├ 8* • *WALLPAPERS*
*├ 9* • *OTHER*
*╰┈───────────────•*

*Reply With Number You want*

> *BUGATTI BY MARISEL*`;

const vv = await conn.sendMessage(from, { 
  image: { url: config.ALIVE_IMG }, 
  caption: desc, 
  contextInfo: {
    mentionedJid: [''], 
    groupMentions: [],
    forwardingScore: 999, // برای فوروارد شدن
    isForwarded: true, // پیام به صورت فوروارد شده نشان داده می‌شود
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363299029326322@newsletter', 
      newsletterName: "Marisel", 
      serverMessageId: 999
    },
    externalAdReply: { 
      title: 'Bugatti', 
      body: `${pushname}`, 
      mediaType: 1, 
      sourceUrl: "https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x", 
      thumbnailUrl: "https://i.imgur.com/J7ADEky.jpeg" ,
      renderLargerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: mek });
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let owner = `
*OWNER-CMD*
*╭┈───────────────•*
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner }, { quoted: mek });                     
                        break;
                    case '2':               
                        let owner1 = `
*DOWNLOADER-CMD*                        
*╭┈───────────────•*
*┋* *.ғʙ*
*┋* *.ɪɴꜱᴛᴀ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ɢᴅʀɪᴠᴇ*
*┋* *.ᴛᴡɪᴛᴛᴇʀ*
*┋* *.ᴛᴛ*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *.ꜱᴏɴɢ*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ᴠɪᴅᴇᴏ2*
*┋* *.ɪᴍɢ*
*┋* *.ᴀᴘᴋ*
*┋* *.ᴅᴀʀᴀᴍᴀ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ*
*┋* *.ɢɪɴɪsɪsɪʟᴀ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
                        
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner1 }, { quoted: mek });                     
                        break;
                    case '3':               
                        let owner2 = `
*GROUP-CMD*
*╭┈───────────────•*
*┋* *.ʀᴇᴍᴏᴠᴇ*
*┋* *.ᴅᴇʟᴇᴛᴇ*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner2 }, { quoted: mek });                     
                        break;
                    case '4':               
                        let owner3 = `
*INFO-CMD*
*╭┈───────────────•*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner3 }, { quoted: mek });                     
                        break;
                    case '5':               
                        let owner4 = `
*RANDOM-CMD*
*╭┈───────────────•*
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;

await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner4 }, { quoted: mek });                     
                        break;
                    case '6':               
                        let owner5 = `
*CONVERTER-CMD*
*╭┈───────────────•*
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛs <ᴛᴇxᴛ>*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner5 }, { quoted: mek });                     
                        break;
                    case '7':               
                        let owner6 = `
*AI-CMD *
*╭┈───────────────•*
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner6 }, { quoted: mek });                     
                        break;
                    case '8':               
                        let owner7 = `
*WALLPAPERS-CMD*
*╭┈───────────────•*
*┋* *.ɪᴍɢ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner7 }, { quoted: mek });                     
                        break;
                    case '9':               
                        let owner8 = `
*OTHER-CMD*
*╭┈───────────────•*
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰┈───────────────•*

> *BUGATTI BY MARISEL*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner8 }, { quoted: mek });                     
                        break;
                    default:
                        reply("*Please select a valid option🔴*");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
