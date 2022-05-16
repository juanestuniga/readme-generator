const axiosApi = require('axios');

const apiAxios = {
  async getUser(userResponses) {
    try { let response = await axiosApi
        
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = apiAxios;