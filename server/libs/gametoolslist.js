const origin = require('./origin');
const mongo = require('../mongo');

async function getGametoolsUserList({originId}) {
  try {
    let player = await mongo.player.findOne({ playerName: originId }).exec();
    let avatar = await origin.getUserAvatar({ pid: player.userId });
    return {
      userId: player.userId,
      personaId: player._id,
      personaName: player.playerName,
      avatar: avatar
    }
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

module.exports = {
  getGametoolsUserList
};
