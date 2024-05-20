import { IContacto } from "../models/contacto.interface";
//exportamos la lista de contactos
export const CONTACTOS: IContacto[] = [
    {
        id: 1,
        nombre: 'Juan',
        apellidos: 'Gilsanz Prieto', 
        email: 'jgilsanx@mail.es',
        edad:42
    },
    {
        id: 2,
        nombre: 'Maria',
        apellidos: 'Pia Gorr', 
        email: 'mpia@mail.es',
        edad:42
    },
    {
        id: 3,
        nombre: 'Izaskun',
        apellidos: 'Arrieta', 
        email: 'izasarrieta@mail.es',
        edad:42
    }
]