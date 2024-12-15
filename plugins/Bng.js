const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require('../DATABASE/functions');
cmd({
  'pattern': "bing",
  'desc': "bing chat.",
  'category': 'ai',
  'react': '🚀',
  'filename': __filename
}, async (_0x5d3e1a, _0x453495, _0x17af03, {
  from: _0x588fca,
  quoted: _0x170dd7,
  body: _0x384552,
  isCmd: _0x3088c4,
  command: _0x40715e,
  args: _0x4a4531,
  q: _0x56ebae,
  isGroup: _0x8ffd0e,
  sender: _0x2b67e4,
  senderNumber: _0x1f85d8,
  botNumber2: _0x9436fa,
  botNumber: _0x1b60d3,
  pushname: _0x45b7fc,
  isMe: _0x101e4d,
  isOwner: _0x3394bb,
  groupMetadata: _0x2fa2d4,
  groupName: _0x3b4711,
  participants: _0x4dd692,
  groupAdmins: _0x55b733,
  isBotAdmins: _0x507b15,
  isAdmins: _0x1a3646,
  reply: _0x314589
}) => {
  try {
    let _0x38e91b = await fetchJson('https://gpt4.guruapi.tech/bing?q=' + _0x56ebae);
    return _0x314589('' + _0x38e91b.data);
  } catch (_0x210ae5) {
    console.log(_0x210ae5);
    _0x314589('' + _0x210ae5);
  }
});
