const axios = require('axios');
const querystring = require('querystring');

async function getBattleLogUserInfo({originId}) {
  try {
    return await axios({
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://battlelog.battlefield.com/search/query/',
      data: querystring.stringify({
        query: originId
      })
    })
      .then(res => {
        let { data } = res.data;
        let {
          userId,
          personaId,
          personaName,
          avatarLink = 'https://eaassets-a.akamaihd.net/battlelog/defaultavatars/default-avatar-36.png',
        } = data[0];

        return {
          userId,
          personaId,
          personaName,
          avatarLink,
        }
      })
      .catch(e=> {
        throw new Error(`requesting ${originId} from battleLog failed`)
      })
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

module.exports = {
  getBattleLogUserInfo
};
