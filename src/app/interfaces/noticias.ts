export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
    recomendada:boolean;
}


export let listaNoticias:Array<Noticias>=[
    {
        id:1,
        idCategoria:1,
        titulo:"Noticia1",
        autor:"jpepe",
        fecha:Date().toString(),
        imagen:"imagen1",
        texto:"hola soy el primero",
        recomendada:false
    },
    {
        id:2,
        idCategoria:2,
        titulo:"Noticia2",
        autor:"jojo2",
        fecha:Date().toString(),
        imagen:"imagen2",
        texto:"hola soy la segunda",
        recomendada:true
    },
    {
        id:3,
        idCategoria:3,
        titulo:"Noticia 3",
        autor:"kkkkk",
        fecha:Date().toString(),
        imagen:"imagen3",
        texto:"hola soy la tercera",
        recomendada:true
    },
    {
        id:4,
        idCategoria:4,
        titulo:"Noticia 4",
        autor:"jdsdds2",
        fecha:Date().toString(),
        imagen:"imagen4",
        texto:"hola soy la cuarta",
        recomendada:true,
    },
    {
        id:5,
        idCategoria:5,
        titulo:"Noticia 5",
        autor:"jojo2dsds",
        fecha:Date().toString(),
        imagen:"imagen5",
        texto:"hola soy la quinta",
        recomendada:false,
    },
    {
        id:6,
        idCategoria:6,
        titulo:"Noticia 6",
        autor:"ajajajasa",
        fecha:Date().toString(),
        imagen:"imagen6",
        texto:"hola soy la sexta",
        recomendada:false,
    },
    {
        id:7,
        idCategoria:1,
        titulo:"Noticia 7",
        autor:"aajaja",
        fecha:Date().toString(),
        imagen:"imagen7",
        texto:"hola soy la septima",
        recomendada:false,
    }
]


