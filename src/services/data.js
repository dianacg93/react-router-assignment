import axios from 'axios';

export const fetchPlanets = async () => {
    const res = await axios.get(`https://wdi-nyc-planets-api.herokuapp.com/planets`);
    return res.data;
}

export const fetchRandomPlanet = async () => {
    const res = await axios.get(`https://wdi-nyc-planets-api.herokuapp.com/planets/random`);
    return res;
};