import axios from 'axios';

const serverURL = "http://localhost:5000";

const API = {
    getPokemon: function() {
        return axios.get(`${serverURL}/api/pokemon`);
    },
    createPokemon: function(payload) {
        return axios.post(`${serverURL}/api/pokemon`, payload);
    }
}

export default API;