const axios = require('axios').default

const tmail = (base, key) => {
    this.domains = async () => {
        const response = await axios.get(`${base}/domains/${key}`);
        return response.data;
    }
    this.create = async (email = '') => {
        const response = await axios.get(`${base}/email/${email}/${key}`);
        return response.data;
    }
    this.messages = async (email) => {
        const response = await axios.get(`${base}/messages/${email}/${key}`);
        return response.data;
    }
    this.deleteMessage = async (msg_id) => {
        const response = await axios.delete(`${base}/message/${msg_id}/${key}`);
        return response.data;
    }
    return this;
}

module.exports = tmail