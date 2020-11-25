import axios from 'axios';
import constants from '../constants/ApiConstant';

class PokemonApi {
  async getAll() {
    return axios.get(`${constants.BASE_API}pokemon?limit=100&offset=0`);
  }

  async get(url) {
    return axios.get(url);
  }

  async getSpecies(id) {
    return axios.get(`${constants.BASE_API}pokemon-species/${id}/`);
  }

  async getPokemon(id) {
    return axios.get(`${constants.BASE_API}pokemon/${id}/`);
  }
}

export default new PokemonApi();
