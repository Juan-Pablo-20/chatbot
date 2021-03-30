const contenedor = document.querySelector(".contenedor");
const contenido = document.querySelector(".contenido");
const mensaje = document.querySelector(".mensaje");
const enviar = document.querySelector(".enviar");
const contColor = document.querySelector(".contColor");
const bolita = document.querySelector(".bolitaColor");
const titulo = document.querySelector(".cabecera");
const entrada = document.querySelector(".entrada");

contenedor.style.height = `${innerHeight - 130}px`;

var luz = false;
contColor.addEventListener("click", () => {
    if (luz == false) {
        bolita.style.float = "right";
        bolita.style.backgroundColor = "rgb(150, 150, 150)";
        contColor.style.backgroundColor = "white";
        document.body.style.animation = "fondoColor 1s";
        document.body.style.backgroundColor = "rgb(192, 192, 192)";
        contenedor.style.boxShadow = "0px 0px 100px gray";
        titulo.style.color = "black";
        titulo.style.animation = "colorCabecera 1s";
        titulo.style.backgroundColor = "#00b35f";
        contenido.style.backgroundImage = "url(img/fondoLight.jpg)";
        entrada.style.animation = "colorEntrada 1s";
        entrada.style.backgroundColor = "gray";
        mensaje.style.animation = "colorInput 1s";
        mensaje.style.backgroundColor = "white";
        mensaje.style.color = "black";
        enviar.style.animation = "colorInput 1s";
        enviar.style.backgroundColor = "white";
        luz = true;
    } else {
        bolita.style.float = "left";
        bolita.style.backgroundColor = "white";
        contColor.style.backgroundColor = "rgb(150, 150, 150)";
        document.body.style.animation = "fondoColor2 1s";
        document.body.style.backgroundColor = "rgb(41, 41, 41)";
        contenedor.style.boxShadow = " 0px 0px 100px black";
        titulo.style.color = "white";
        titulo.style.animation = "colorCabecera2 1s";
        titulo.style.backgroundColor = "rgb(95, 95, 95)";
        contenido.style.backgroundImage = "url(img/fondo.png)";
        entrada.style.animation = "colorEntrada2 1s";
        entrada.style.backgroundColor = "rgb(56, 56, 56)";
        mensaje.style.animation = "colorInput2 1s";
        mensaje.style.backgroundColor = "rgb(95, 95, 95)";
        mensaje.style.color = "white";
        enviar.style.animation = "colorInput2 1s";
        enviar.style.backgroundColor = "rgb(95, 95, 95)";
        luz = false;
    }
})

const mostrarMensajes = () => {
    contenido.innerHTML += `<div class="chat1">${mensaje.value}</div>`;
    prepararRespuesta(mensaje.value);
    mensaje.value = "";
    contenido.scrollTop = contenido.scrollHeight;
}

const imprimirRespuesta = (message) => {
    setTimeout(() => {
        contenido.innerHTML += `<div class="chat2">${message}</div>`;
        contenido.scrollTop = contenido.scrollHeight;
        deshabilitaBoton();
    }, 500);
}
var camaraEncendida = false;

const prepararRespuesta = (recibido) => {
    if ((recibido.toLowerCase()).includes(("como estas")) || (recibido.toLowerCase()).includes(("bien y tu"))) {
        imprimirRespuesta(respuestas[Math.round(Math.random() * (1, 1))]);
    } else if ((recibido.toLowerCase()).includes("dime algo") || (recibido.toLowerCase()).includes("otra cosa")
        || (recibido.toLowerCase()).includes("otro dato") || (recibido.toLowerCase()).includes("sabes algo que no sepa")) {
        imprimirRespuesta(curiosidad[Math.round(Math.random() * (curiosidad.length - 1))]);
    } else if ((recibido.toLowerCase()).includes("hola")) {
        imprimirRespuesta(saludo[Math.round(Math.random() * (saludo.length - 1))]);
    } else if ((recibido.toLowerCase()).includes("bien gracias") || (recibido.toLowerCase()).includes("bien")) {
        imprimirRespuesta(respuestas[2]);
    } else if ((recibido.toLowerCase().includes("mal"))) {
        imprimirRespuesta(respuestas[4]);
    } else if ((recibido.toLowerCase().includes("me alegra"))) {
        imprimirRespuesta(respuestas[5]);
    } else if ((recibido.toLowerCase().includes("has")) || (recibido.toLowerCase().includes("haz"))
        || (recibido.toLowerCase().includes("que eres"))) {
        imprimirRespuesta(respuestas[6]);
    } else if (recibido.length > 70) {
        imprimirRespuesta(respuestas[7]);
    } else if (recibido.length > 50) {
        imprimirRespuesta(respuestas[8]);
    } else if ((recibido.toLowerCase()).includes("gracias") || (recibido.toLowerCase()).includes("agradezco")) {
        imprimirRespuesta(respuestas[9]);
    } else if ((recibido.toLowerCase()).includes("chao") || (recibido.toLowerCase()).includes("adios")) {
        imprimirRespuesta(respuestas[10]);
    } else if ((recibido.toLowerCase()).includes("llamas") || (recibido.toLowerCase()).includes("nombre")) {
        imprimirRespuesta(respuestas[11]);
    } else if ((recibido.toLowerCase()).includes("que haces") || (recibido.toLowerCase()).includes("haciendo")
        || (recibido.toLowerCase()).includes("y tu")) {
        imprimirRespuesta(respuestas[12]);
    } else if ((recibido.toLowerCase()).includes("no sabia") || (recibido.toLowerCase()).includes("buen dato")
        || (recibido.toLowerCase()).includes("no lo sabia")) {
        imprimirRespuesta(respuestas[13]);
    } else if ((recibido.toLowerCase()).includes("interesante") || (recibido.toLowerCase()).includes("sorprendente")) {
        imprimirRespuesta(respuestas[14]);
    } else if ((recibido.toLowerCase()).includes("jaja") || (recibido.toLowerCase()).includes("jeje")) {
        imprimirRespuesta(respuestas[15]);
    } else if ((recibido.toLowerCase()).includes("garychatbot")) {
        imprimirRespuesta(respuestas[16]);
    } else if ((recibido.toLowerCase()).includes("pan") || (recibido.toLowerCase()).includes("comida")) {
        imprimirRespuesta(respuestas[17]);
    } else if ((recibido.toLowerCase()).includes("que sabes hacer") || (recibido.toLowerCase()).includes("que puedes hacer")) {
        imprimirRespuesta(respuestas[21]);
    } else if ((recibido.toLowerCase()).includes("marte")) {
        imprimirRespuesta(curiosidad[curiosidad.length - 2]);
    } else if ((recibido.toLowerCase()).includes("agujero negro") || (recibido.toLowerCase()).includes("agujeros negros")) {
        imprimirRespuesta(curiosidad[curiosidad.length - 1]);
    } else if ((recibido.toLowerCase()).includes("limpiar chat")) {
        while (contenido.firstChild) { //para eliminar todos los hijos de contenido
            contenido.removeChild(contenido.firstChild);
        }
    } else if ((recibido.toLowerCase()).includes("camara") || (recibido.toLowerCase()).includes("encender camara")) {
        if (camaraEncendida) {
            imprimirRespuesta(respuestas[22]);
        } else {
            camara();
        }
    } else if ((recibido.toLowerCase()).includes("youtube")) {
        contenido.innerHTML += `<div class="chat2">${respuestas[18]}</div>`
        setTimeout(() => {
            window.open("https://www.youtube.com/", "_blank");
        }, 1000)
    } else if ((recibido.toLowerCase()).includes("gmail")) {
        contenido.innerHTML += `<div class="chat2">${respuestas[19]}</div>`
        setTimeout(() => {
            window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        }, 1000)
    } else if ((recibido.toLowerCase()).includes("whatsapp")
        || (recibido.toLowerCase()).includes("wasap")) {
        contenido.innerHTML += `<div class="chat2">${respuestas[20]}</div>`
        setTimeout(() => {
            window.open("https://web.whatsapp.com/", "_blank");
        }, 1000)
    } else {
        let n = Math.round(Math.random() * (paraElse.length));
        if (n == paraElse.length) {
            imprimirRespuesta(`Que quieres decir con "${recibido}"?`);
        } else {
            imprimirRespuesta(paraElse[n]);
        }
    }
}

document.querySelector(".enviar").addEventListener("click", () => {
    mostrarMensajes();
});

var hoverE;
var hoverO;

mensaje.addEventListener("keyup", (k) => {
    if (mensaje.value != "" || mensaje.value.length == 1) {
        if (k.key == "Enter") {
            mostrarMensajes();
        }
        enviar.removeAttribute("disabled");
        enviar.style.opacity = "1";
        hoverE = enviar.addEventListener("mouseenter", () => {
            enviar.style.backgroundColor = "rgb(122, 122, 122)";
        })
        hoverO = enviar.addEventListener("mouseout", () => {
            enviar.style.backgroundColor = "rgb(94, 94, 94)";
        })
    } else {
        deshabilitaBoton();
    }
})

const deshabilitaBoton = () => {
    enviar.setAttribute("disabled", "");
    enviar.style.opacity = "0.5";
    enviar.removeEventListener("mouseenter", hoverE);
    enviar.removeEventListener("mouseout", hoverO);
}

const camara = () => {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream) => {

        contenido.innerHTML += `<div class="chat2"><video class="video" autoplay="true"></video></div>`;
        let video = document.querySelector(".video");
        video.setAttribute("src", `${stream}`);
        video.srcObject = stream;
        camaraEncendida = true;
        contenido.scrollTop = contenido.scrollHeight;

    }).catch((err) => console.error(err));
}

const saludo = [
    "¡Hola!",
    "Hola ¿Como estas?",
    "Hola humano",
    "¿En que te puedo servir?"
];

const respuestas = [
    "Bien gracias",
    "Bien ¿y tu?",
    "Me alegro por ti",
    "¿Estas jugando conmigo?",
    "Don't worry... Be happy :)",
    "Me alegra que te alegre",
    "Solo soy un robot",
    "Te gusta ponerme a prueba ¿eh?",
    "Veo que te gusta escribir mucho",
    "De nada, ha sido un placer",
    "Adios, que te vaya bien",
    "Mi creador me nombró Garychatbot en honor a su gato",
    "Hablando con un humano ¿y tu?",
    "Ahora lo sabes",
    "Lo se es interesante",
    'Los robotos no nos reimos, pero dire "ja ja ja"',
    "Me has llamado por mi nombre! Dime ¿Que necesitas?",
    "¿Te gusta el pan?",
    "YouTube se abrirá en un segundo",
    "Gmail se abrirá en un segundo",
    "WhatsApp se abrirá en un segundo",
    "Puedo decirte decirte cosas que tu no sabes, solo pidemelo",
    "La cámara ya esta encendida"
];

const curiosidad = [
    "Zipaquirá alguna vez fue la capital de Cundinamarca",
    "Hay oro en los circuitos de tu celular",
    "Estas hablando con una tecnología llamada JavaScript",
    "Hay más estrellas en el universo que granos de arena en las playas",
    "En una cucharada de tierra hay más microrganismos que humanos en el planeta",
    "Sabias que la otra gente no sabe lo que uno sabe",
    "Sabias que la nariz y las orejas nunca paran de crecer?",
    "Sabias que tu lado izquierdo es diferente a tu lado derecho?",
    "Los humanos tenemos un sexto sentido",
    "El pez payaso puede cambiar de genero",
    "Si te pierdes en medio del mar tienes riesgo de morir deshidratado/a",
    "Las ballenas asesinas y los delfines no tienen branquias",
    "Sabias que es imposible ahogarse en el mar muerto?",
    "Las mamás tienen un sexto sentido con sus hijos",
    "Cuando los humanos estan situaciones dificiles se activa un instinto de supervivencia",
    "Una persona puede morir más rapido si le falta agua que si le falta comida",
    "Sabias que Colombia tiene satelites en orbita?",
    "Sabias que las medias veladas sirven para remplazar las correas de las poleas de un motor de un carro?",
    "Habia una vez una iguana y la iguana tomaba café a la hora del té",
    '<iframe class="ajustar" width="560" height="315" src="https://www.youtube.com/embed/3qhAvPmh-Vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>Este es un video real de Marte',
    '<img class="ajustar" src="img/agujeroNegro.png" alt="Foto de un agujero negro">Esta es una foto real del agujero negro que está en el centro de nuestra galaxia'
];

const paraElse = [
    "¿Que estas haciendo?",
    "Me alegra",
    "¡Que bien!",
    "No hablo tu idioma",
    "¿Como te llamas?",
]