import axios from "axios";
import { URL,RULE_SET,VERSION ,API_KEY} from "./CONSTANT";
import { endPoints } from "./endPoint";

export const getPslMatches = () => {
    return axios({
        method: 'get',
        url: `https://cricket.sportmonks.com/api/v2.0/fixtures?api_token=90aY6TNOlauPH4XR2b5pdM0AE6NfyFrP7hOL3QMamOvd2DkQxEpE9OYgzChB&filter[starts_between]=2024-02-28,2024-03-01`
    });
};

export const getMatches =()=>{
    return axios({
        method:'get',
        url:`https://api.cricapi.com/v1/currentMatches?apikey=bc4812af-967b-4627-a547-c07db98da805&offset=0`
    })
}
export const getScore =()=>{
    return axios({
        method:'get',
        url:`https://api.cricapi.com/v1/cricScore?apikey=bc4812af-967b-4627-a547-c07db98da805`
    })
}
export const getSeries =()=>{
    return axios({
        method:'get',
        url:`https://api.cricapi.com/v1/series?apikey=bc4812af-967b-4627-a547-c07db98da805&offset=0`
    })
}