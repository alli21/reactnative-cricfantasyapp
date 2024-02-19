import axios from "axios";
import { URL,RULE_SET,VERSION ,API_KEY} from "./CONSTANT";
import { endPoints } from "./endPoint";



export const getMatches =()=>{
    return axios({
        method:'get',
        url:`${URL}${VERSION}${endPoints.matches}?apikey=${API_KEY}&offset=${RULE_SET}`
    })
}
export const getScore =()=>{
    return axios({
        method:'get',
        url:`${URL}${VERSION}${endPoints.score}?apikey=${API_KEY}&offset=${RULE_SET}`
    })
}
export const getSeries =()=>{
    return axios({
        method:'get',
        url:`${URL}${VERSION}${endPoints.series}?apikey=${API_KEY}&offset=${RULE_SET}`
    })
}
