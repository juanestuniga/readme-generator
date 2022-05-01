const axios = require("axios");
const token = "2bfe155293ccfdbcd36e5aa1e1f984cbcd0d2d38"

const api = {
    getUser(username) {
        const headers = {headers:
        {Authorization: `token ${token}`}}
        const queryUrl = `https://api.github.com/users/${username}`;
        
        return axios.get(queryUrl, headers).then(function(res) {
            return {
                avatar: res.data.avatar_url,
                email : res.data.email,
            }
        })
    }
  };
  
  module.exports = api;