export interface Iuser {

    id:string,
    username:string,
    displayName:string,
    email:string,
    is_active:boolean,
    password:string,
    joined:string,
    photoURL:string,
    bio:string,
    followers:string[],
    following:string[],
    location:string,
    rooms:string[],
    verified:boolean,
    wallpaper:string,
    website:string,
}
