export interface IEmcryptServices {
    encodePassword(password:string):string
    authPassword(word:String, passwordEncode:string):boolean
}