export interface Categorias {
    idCategoria:number;
    titulo:string;
    color:string;
}


export let listaCategorias:Array<Categorias>=[

    {
        idCategoria:1,
        titulo:"Entretenimiento",
        color:"blue"
    },
    {
        idCategoria:2,
        titulo:"Tecnologia",
        color:"red"
    },
    {
        idCategoria: 3,
        titulo:"Deporte",
        color:"naranjo"
    },
    {
        idCategoria:4,
        titulo:"Economia",
        color:"black"
    },
    {
        idCategoria:5,
        titulo:"Salud",
        color:"green"
    },
    {
        idCategoria:6,
        titulo:"Mundo",
        color:"yellow"
    },
]