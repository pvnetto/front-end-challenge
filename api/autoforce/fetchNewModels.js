const axios = require('axios');

const apiURL = `${process.env.AUTOFORCE_API_BASE_URL}channel/${process.env.AUTOFORCE_CHANNEL_ID}/clones`;
const params = `include=profile_image&q[with_active_model]=true&sort=name&page=1&per_page=-1&q[active_eq]=true&q[name_cont]=%20`

module.exports = () => axios.get(`${apiURL}?${params}`, {
    headers: {
        Authorization: `Token ${process.env.AUTOFORCE_API_TOKEN}`
    }
});