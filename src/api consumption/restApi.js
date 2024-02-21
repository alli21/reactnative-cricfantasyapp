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
        url:`https://api.cricapi.com/v1/series?apikey=bc4812af-967b-4627-a547-c07db98da805&offset=0&search=`
    })
}