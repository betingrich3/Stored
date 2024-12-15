const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "marisel",
    react: "🎓",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `❁ ════ ❃•⇆•❃ ════ ❁
*Hi ${pushname}*\n\n *Marisel Here Creator of Mercedes, Bugatti & Bentley Please Follow Me* \n\n\n *https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x*
❁ ════ ❃•⇆•❃ ════ ❁
> *Marisel*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
