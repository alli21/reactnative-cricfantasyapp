import axios from "axios";
import { URL,VERSION, RULE_SET,API_KEY} from "./CONSTANTS";
import { endPoints } from "./endPoint";



export const getMatches =()=>{
    return axios({
        method:'get',
        url:`${URL}${VERSION}${endPoints.matches}?apikey=${API_KEY}&offset=${RULE_SET}`
    })
}
