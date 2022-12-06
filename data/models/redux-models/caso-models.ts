

export enum Estado{
    PENDIENTE,
    EN_ESPERA_DEL_TECNICO,
    EN_ESPERA_DEL_CLIENTE,
    RESUELTO,
    NO_RESUELTO
}

export enum Prioridad{
    BAJA,
    MEDIA,
    ALTA
}

export enum AdminFilter {
    all,
    mis_casos
}

export interface Area {
    name :string,
    description:string,
    estado:number,
    id:number
}

export interface Caso {
    id : number,
    created : string,
    updated : string,
    prioridad : Prioridad,
    clienteName : string,
    funcionarioName : string,
    estado : Estado,
    titulo : string,
    fecha_inicio : string,
    fecha_fin : string,
    areaCaso : string,
    descripcion:string
}

export interface NewCaso{
    id:number,
    titulo:string,
    descripcion:string,
    prioridad?:Prioridad,
    areaCaso?:string,
}

export interface ArchivoCaso{
    titulo:string,
    file:string,
    casoId:string,
    created:string,
    id:number
}

export interface DetailCaso {
    id?:number,
    estado?:number,
    unread_message?:string,
    titulo?:string,
    empresa?:string,
    content?:string,
    descripcion?:string,
    created?:string,
    updated?:string,
    prioridad?:Prioridad,
    fecha_inicio?:string,
    fecha_fin?:string,
    cliente?:string,
    funcionario?:string,
    area?:string,
    plan_de_accion?:string,
    descripcion_tecnica?:string,

}
export interface CasoProps{
    caso:DetailCaso
}



export interface QueryProps{
    ordering?:string,
    estado?:string,
    prioridad?:string,
    page?:string,
    titulo?:string,
    adminFilter?:AdminFilter
}
export interface PageProps{
    pages_count?:string
    current?:string
    next?:string
    previous?:string
}

export interface CasoState{
   areas:Area[],
   casos:Caso[],
   query:QueryProps,
   page?:PageProps,
   newCaso:NewCaso,
   isOpen:boolean,
   detailCaso:DetailCaso,
   archivos:ArchivoCaso[],
   archivo?:ArchivoCaso
}
