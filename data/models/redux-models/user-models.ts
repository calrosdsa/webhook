import { Area, Caso, PageProps, QueryProps } from "./caso-models"

export enum UserEstado  {
    ACTIVO,
    NO_ACTIVO,
    ELIMINADO
}

export enum UserListOption {
    CLIENTES,
    FUNCIONARIOS,
}

export enum TypeOfUser {
    CLIENTES,
    FUNCIONARIOS,
}

type PerfilUser = {
    id : number
    empresaName : string
    estado:number
    username:string
    user: string
    name : string
    apellido : string
    typeofUser: TypeOfUser
    area : Area[]
    last_login:string
    email : string
    telefono : string
    celular : string
    avatar : string
    created : string
    nro_interno : string
    nivel : number
    tipo : number
    superio_id : string
    resueltos:number
    cantidad:number
    pendientes:number
}

type FilterDataUser = {
    name:string
    id:string
}


type Funcionario = {
    id:number
    name :string
    avatar :string
    apellido :string
    user :string
}

type UserModel ={
    funcionarios:Funcionario[],
    // perfilFuncionario?:PerfilFuncionario,
    perfilUser?:PerfilUser
    userCasos:Caso[]
    clientes:PerfilUser[]
    page?:PageProps
    empresaOptions:FilterDataUser[]
    areaOptions:FilterDataUser[]
    showUserActionsDialog:boolean
    userListOptions:UserListOption

}

export type { 
    Funcionario,
    UserModel,
    // PerfilFuncionario,
    PerfilUser,
    FilterDataUser,
 };