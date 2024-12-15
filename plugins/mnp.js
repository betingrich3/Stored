const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': "shutdown",
  'desc': "Shutdown the bot.",
  'category': "owner",
  'react': '⚠️',
  'filename': __filename
}, async (_0x175354, _0x1217f2, _0x154f03, {
  from: _0x55f898,
  isOwner: _0x4c518d,
  reply: _0x9d1f9
}) => {
  if (!_0x4c518d) {
    return _0x9d1f9(" You are not the owner!");
  }
  try {
    await _0x175354.logout();
    _0x9d1f9(" Shutting down...😔").then(() => process.exit());
  } catch (_0x5ac70e) {
    _0x9d1f9(" Error shutting down: " + _0x5ac70e.message);
  }
});
cmd({
  'pattern': "broadcast",
  'desc': "Broadcast a message to all groups.",
  'category': "owner",
  'react': '📢',
  'filename': __filename
}, async (_0x446234, _0x2cf7ff, _0x245c51, {
  from: _0x2d4ab6,
  isOwner: _0x3283a9,
  args: _0x5640a6,
  reply: _0x441229
}) => {
  if (!_0x3283a9) {
    return _0x441229("❌ You are not the owner!");
  }
  if (_0x5640a6.length === 0x0) {
    return _0x441229("📢 Please provide a message to broadcast.");
  }
  const _0x1d4d13 = _0x5640a6.join(" ");
  const _0x4273a5 = Object.keys(await _0x446234.groupFetchAllParticipating());
  for (const _0x379031 of _0x4273a5) {
    await _0x446234.sendMessage(_0x379031, {
      'text': _0x1d4d13
    }, {
      'quoted': _0x2cf7ff
    });
  }
  _0x441229("📢 Message broadcasted to all groups.");
});
cmd({
  'pattern': "setpp",
  'desc': "Set bot profile picture.",
  'category': "owner",
  'react': "🖼️",
  'filename': __filename
}, async (_0x430d90, _0x5f2dfa, _0x54ff48, {
  from: _0x3a53da,
  isOwner: _0x2afed6,
  quoted: _0x624807,
  reply: _0x43bbf9
}) => {
  if (!_0x2afed6) {
    return _0x43bbf9("❌ You are not the owner!");
  }
  if (!_0x624807 || !_0x624807.message.imageMessage) {
    return _0x43bbf9("❌ Please reply to an image.");
  }
  try {
    const _0x2cb231 = await _0x430d90.downloadMediaMessage(_0x624807);
    await _0x430d90.updateProfilePicture(_0x430d90.user.jid, {
      'url': _0x2cb231
    });
    _0x43bbf9("🖼️ Profile picture updated successfully!");
  } catch (_0x31f3f7) {
    _0x43bbf9("❌ Error updating profile picture: " + _0x31f3f7.message);
  }
});
cmd({
  'pattern': "block",
  'desc': "Block a user.",
  'category': "owner",
  'react': '🚫',
  'filename': __filename
}, async (_0x5aa168, _0x27fb0f, _0x3d46ca, {
  from: _0x22502b,
  isOwner: _0x3f5fc5,
  quoted: _0x4473b3,
  reply: _0x5882ed
}) => {
  if (!_0x3f5fc5) {
    return _0x5882ed("❌ You are not Marisel!");
  }
  if (!_0x4473b3) {
    return _0x5882ed("❌ Please reply to the user you want to block.");
  }
  const _0x46b152 = _0x4473b3.sender;
  try {
    await _0x5aa168.updateBlockStatus(_0x46b152, "block");
    _0x5882ed("🚫 User " + _0x46b152 + "Blocking was successfully.");
  } catch (_0x37d758) {
    _0x5882ed("❌ Error blocking user: " + _0x37d758.message);
  }
});
cmd({
  'pattern': "unblock",
  'desc': "Unblock a user.",
  'category': "owner",
  'react': '✅',
  'filename': __filename
}, async (_0x520fb5, _0xab1e21, _0x236b62, {
  from: _0x3ef31e,
  isOwner: _0x2a6dd7,
  quoted: _0x57ff68,
  reply: _0x5ec9e0
}) => {
  if (!_0x2a6dd7) {
    return _0x5ec9e0("❌ You are not the owner!");
  }
  if (!_0x57ff68) {
    return _0x5ec9e0("❌ Please reply to the user you want to unblock.");
  }
  const _0x397f86 = _0x57ff68.sender;
  try {
    await _0x520fb5.updateBlockStatus(_0x397f86, "unblock");
    _0x5ec9e0("✅ User " + _0x397f86 + " unblocked successfully.");
  } catch (_0x324540) {
    _0x5ec9e0("❌ Error unblocking user: " + _0x324540.message);
  }
});
cmd({
  'pattern': 'clearchats',
  'desc': "Clear all chats from the bot.",
  'category': "owner",
  'react': '🧹',
  'filename': __filename
}, async (_0x595c93, _0x5c75a7, _0x4cf9d2, {
  from: _0x1431eb,
  isOwner: _0x1d385e,
  reply: _0xb166b9
}) => {
  if (!_0x1d385e) {
    return _0xb166b9("❌ You are not Marisel!");
  }
  try {
    const _0x2ee5bd = _0x595c93.chats.all();
    for (const _0x4dcd4a of _0x2ee5bd) {
      await _0x595c93.modifyChat(_0x4dcd4a.jid, 'delete');
    }
    _0xb166b9("🧹 All chats cleared successfully!");
  } catch (_0x5bad60) {
    _0xb166b9("❌ Error clearing chats: " + _0x5bad60.message);
  }
});
cmd({
  'pattern': "jid",
  'desc': "Get the user's JID.",
  'category': "owner",
  'react': '✨',
  'filename': __filename
}, async (_0x5beec8, _0x377146, _0x21c08e, {
  from: _0x430ef5,
  isOwner: _0x47b9de,
  reply: _0xa87cb7
}) => {
  if (!_0x47b9de) {
    return _0xa87cb7(" You are not Marisel");
  }
  _0xa87cb7(" *Jid By Bugatti:* " + _0x430ef5);
});
cmd({
  'pattern': "gjid",
  'desc': "Get the list of JIDs for all groups the bot is part of.",
  'category': "owner",
  'react': '📝',
  'filename': __filename
}, async (_0x231cd5, _0x35bce5, _0x4cd069, {
  from: _0x308984,
  isOwner: _0x639e5c,
  reply: _0x30fd44
}) => {
  if (!_0x639e5c) {
    return _0x30fd44("❌ You are not the owner!");
  }
  const _0x12ee4c = await _0x231cd5.groupFetchAllParticipating();
  const _0x501175 = Object.keys(_0x12ee4c).join("\n");
  _0x30fd44("📝 *Group JIDs:*\n\n" + _0x501175);
});
