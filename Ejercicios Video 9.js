    /* 
    27) Programa una clase llamada Pelicula.
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
    titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
        7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
        aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
        instancias de la clase de forma automatizada e imprime la ficha técnica 
        de cada película.

    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
    Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, 
    Short, Sport, Talk-Show, Thriller, War, Western.
    */
    const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]

    const genreList = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", 
        "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", 
        "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"] 
    
    const arrPel = [{
        id: "we9999999",
        director: "Jose",
        title: "Cum sin parar",
        releaseDate: 2020,
        country: ["Chile"],
        genres: ["Action", "War"],
        rating: 10,
    },
    {
        id: "na9999999",
        director: "Josep",
        title: "Cum sin parar",
        releaseDate: 2020,
        country: ["Chile"],
        genres: ["Action", "War"],
        rating: 10,
    },
    {
        id: "se9999999",
        director: "XXXX",
        title: "Cum sin parar",
        releaseDate: 2020,
        country: ["Chile"],
        genres: ["Action", "War"],
        rating: 0,
    }

]
    class Movie {
        constructor(id, director, title,releaseDate,country= [],genres = [],rating){
            this.id = id,
            this.director = director,
            this.title = title,
            this.releaseDate = releaseDate,
            this.country = country,
            this.genres = genres,
            this.rating = rating
        }

    }


    class MovieList{
        constructor(
            name,
            nextMovie,
        ){
            this.name = name;
            this.nextMovie = nextMovie;
        }
        /* setTitle(title){
            if (typeof title !== "string") {
                return false
            }else if (title.length >= 100){
                return false
            }else{
                this.title = title
            }
        
        } */
    /*     deleteTitle(){
            this.title = ""
        }
        setDirector(director){
            if (typeof director !== "string") {
                return false
            }else if (director.length >= 50){
                return false
            }else{
                this.director = director
            }
        }
        deleteDirector(){
            this.title = ""
        } */
        /* setId(id){
            const idValidator = id.toString()
            if (condition) {
                
            }
        } */
        createMovie(id, director, title, releaseDate, country, genres, rating){
            const movie = new Movie(id,director, title, releaseDate, country, genres, rating)
            if (!id ||!director||!title||!releaseDate||!country||!genres|| rating == undefined ||rating == null) {
                return console.error("Faltan parametros")
            }
            if(!id.length === 9){
            return console.error("Tu ID carece o se sobrepasa de caracteres")
            }else if (id){
                let  idItems = id.toString()
                const item1 = idItems.slice(0,2)
                const item2 = idItems.slice(2,9)
                console.log(item1);
                console.log(item2);
                
                if (/[0-9-&_,.]/g.test(item1)){
                    return console.log("Primer Parámetro No valido")
                }else if(/[a-z-ñ&_,.]/g.test(item2)){
                        return console.log("Id No válido");
                }
            

            } if (typeof director !== "string") {
                return console.log(false)
            } if (director.length >= 50){
                return console.log(false)
            }  if (typeof title !== "string") {
                return console.log(false)
            } if (title.length >= 100){
                return console.log(false)
            } if(typeof releaseDate !== "number"){
                return console.log(false);
            } if (releaseDate) {
                const release = releaseDate.toString()
            
                if (/[a-zA-Z.]/.test(release)) {
                    return console.log("Tu fecha de estreno no puede contener letras o puntos");
                }
                if (releaseDate.length < 4 || releaseDate.length > 4) {
                    return console.log("Tu año de estreno debe tener 4 números");
                }
            }

            if (typeof rating !== "number") {
                return console.log("Necesitas colocar un numero");
            }
            if (rating < 0 || rating>10){
                return console.log("No es un rating valido")
            
            }
            if (Array.isArray(country)) {
                let arrayCountry = []
                for (let i = 0; i < country.length; i++) {
                    const element = country[i];
                    if (paises.includes(element)) {
                        arrayCountry.push(element)
                        movie.genres = arrayCountry
                    }
                    else{
                        return console.log("No valido");
                    }
                    
                }
               }else {
                return console.log("No es un array");
            }
            if (Array.isArray(genres)) {
                let arrayGenre = []
                for (let i = 0; i < genres.length; i++) {
                    const element = genres[i];
                    if (genreList.includes(element)) {
                        arrayGenre.push(element)
                        movie.genres = arrayGenre
                    }
                    else{
                        return console.log("No valido");
                    }
                    
                }
               }else {
                return console.log("No es un array");
            }
        


            if (this.name == undefined) {
                this.name = movie;
                this.nextMovie = {nextMovie: this.nextMovie}
            }else{
            /* this.name = movie; */
            this.nextMovie = {name: movie, nextMovie: {...this.nextMovie}}
            return console.log(this);
            }

            
        }
        genrelist(){
        return console.log(genreList);
        }
        movieStructure(){
            return console.log(new Movie);
        }
        arrayMovieGenerator(arr){
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                this.createMovie(element.id, element.director,element.title,element.releaseDate,element.country,element.genres,element.rating)
            }
            return this
        }
    }




    const peli = new MovieList()
    peli.arrayMovieGenerator(arrPel)
   /*  caca.createMovie("qw9873647","Jose","Duro de Matar",2008,"Chile",["Action", "War"],9.8)
    caca.createMovie("aw1111111","Roberto Musso","Duro de Coger",2022,"Zimbabue",["Actio"],9.8)
    caca.createMovie("qw1111111","Juan","Duro de Coger",2022,"Chile",["Action"],10) */
    /* caca.movieStructure() */


