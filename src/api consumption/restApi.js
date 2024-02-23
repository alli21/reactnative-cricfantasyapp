import axios from "axios";
import { URL,RULE_SET,VERSION ,API_KEY} from "./CONSTANT";
import { endPoints } from "./endPoint";



export const getMatches =()=>{
    return axios({
        method:'get',
        url:`https://api.cricapi.com/v1/currentMatches?apikey=d0d6c064-4700-4ddc-ad12-791b7190f8b3&offset=0`
    })
}
export const getScore =()=>{
    return axios({
        method:'get',
        url:`https://api.cricapi.com/v1/cricScore?apikey=d0d6c064-4700-4ddc-ad12-791b7190f8b3`
    })
}
export const getSeries =()=>{
    return axios({
        method:'get',
        url:`https://api.cricapi.com/v1/series?apikey=d0d6c064-4700-4ddc-ad12-791b7190f8b3&offset=0`
    })
}