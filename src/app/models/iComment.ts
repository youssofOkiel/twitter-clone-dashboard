import { Iuser } from "./iuser";

export interface Icomment {
    id:string,
    sender:Iuser,
    text:string,
    tweetId:string
}
