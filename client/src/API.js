import axios from 'axios';

//const serverURL = "http://localhost:5000";
const serverURL = "https://hackschool-fa20-bryce.herokuapp.com/"

const API = {
    getPokemon: function() {
        return axios.get(`${serverURL}/api/pokemon`);
    },
    createPokemon: function(payload) {
        return axios.post(`${serverURL}/api/pokemon`, payload);
    }
}

export default API;