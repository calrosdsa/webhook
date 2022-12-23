export enum Roles{
    cliente,
    funcionario,
    cliente_admin,
    funcionario_admin
}

export interface UserAuth{
    // pk:string,
    username:string,
    role:Roles,
    token:string,
}

// export interface Profile{
//     name:string,
//     id:number,
//     avatar:string
// }

// export interface ErrorRegistration {
//     username?:string[],
//     email?:string[],
//     phoneNumber?:string,
//     password?:string,
//     apellido?:string,
//     telefono?:string,
    
// }

export interface AuthModel{
    isAuthenticated:boolean,
    userHasLike:boolean,
    authLoading:boolean,
    username:string,
    postUrl:string
    // user?:UserAuth,
    // errorRegistration?:ErrorRegistration
}
