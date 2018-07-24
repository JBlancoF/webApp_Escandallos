export class Escandallo{

    id:number
    idUser: number
    code: string
    nombre: string
    categoria: string
    nServ: number
    cosT: number
    pvp: number

    constructor(id:number, idUser: number, code: string, nombre: string, categoria: string, nServ: number, costeTotal: number, pvp: number){
        this.id = id
        this.idUser = idUser
        this.code= code
        this.nombre = nombre
        this.categoria = categoria
        this.nServ = nServ
        this.cosT = costeTotal
        this.pvp = pvp

    }

    cmp(){
        return this.cosT/this.nServ
    }

    prcmp(){
        return (this.cosT/this.nServ)/(this.pvp/1.1)
    }

    mbc(){
        return (this.pvp/1.1)-(this.cosT/this.nServ)
    }

    prmbc(){
        return ((this.pvp/1.1)-(this.cosT/this.nServ))/(this.pvp/1.1)
    }

    psiva(){
        return this.pvp/(1.1)
    }

    rmejora(){
        return (((this.pvp/1.1)-(this.cosT/this.nServ))/(this.pvp/1.1))/((this.cosT/this.nServ)/(this.pvp/1.1))
    }



        
}