var login = prompt('Entrez votre pseudo :');
var websocket;

// Initialise le Web Socket
createWebSocket();

function createWebSocket() {
    websocket = new WebSocket("ws://localhost:12345/");
}

// Envoie au serveur le message
function sendMessage() {
    let content = document.getElementById("msg").value; //recupere le message de l'input
    document.getElementById("msg").value = ""; //on vide l'élément
    websocket.send("[" + login + "] " + content); //on envoie le msg au serveur + login de la personne
}

// Réception du message envoyé par le serveur + Affichage
websocket.onmessage = function(event) {
    let tchat = document.getElementById("messages"); //on recupere le textarea
    tchat.setAttribute("disabled", false);
    tchat.append(event.data + "\n");
    tchat.setAttribute("disabled", true);
};

// Notification de connexion
websocket.onopen = function() {
    websocket.send(login + " a rejoint le canal de discussion");
}

// Notification de déconnexion (jamais appelée)
websocket.onclose = function() {
    console.log('FERMETURE');
    websocket.send(login + " a quitté le canal de discussion");
}




/*let websocket;
let login = prompt("Login : ", "Guest");
createWebSocket();

let bouton = document.getElementById("bouton")

function createWebSocket() {
    websocket = new WebSocket('ws://localhost:7525');

}


function sendMessage(event) {
    event.preventDefault();
}

websocket.onopen = function(event) {
    console.log('Connexion etablie');
    websocket.send('Hi server!');
}


websocket.onclose = function() {
    console.log('Communication terminee');
}*/

/*
let websocket;
let pseudo = prompt("Votre pseudo :");

createWebSocket();

function createWebSocket() {
    websocket = new WebSocket('ws://localhost:12345');
    let chatSend = document.getElementById('bouton');
    button.addEventListener('click', event => sendMessage(event));

    websocket.onmessage = function(event) {
        console.log(event.data);
        printMessage(event);
    }
}

function printMessage(event) {
    let data = event.data;
    let chat = document.getElementById("textAreaChat");
    let oldData = document.getElementById("textAreaChat").value;
    if (data != "") {
        if (oldData != "") {
            chat.innerHTML = oldData + "\n" + data;
            document.getElementById("chat-message").value = "";
        } else {
            chat.innerHTML = data;
            document.getElementById("chat-message").value = "";
        }
    }
}

function sendMessage(event) {
    event.preventDefault();
    let msg = pseudo + " : " + document.getElementById('chat-message').value;
    websocket.send(msg);
}*/