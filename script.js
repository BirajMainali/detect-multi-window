const INITIAL_BOARDCAST = "WINDOW_OPENED";
const CONFIRMATION_BOARDCAST = "SECOND_WINDOW_ALREADY_EXIST";
const imageElem = document.getElementById('swag');
const boardcast = new BroadcastChannel("cruderkat_channel");
boardcast.onmessage = (e) => {
    if (e.data === INITIAL_BOARDCAST) {
        boardcast.postMessage(CONFIRMATION_BOARDCAST);
    }
    if (e.data === CONFIRMATION_BOARDCAST) {
        alert("Are you sure you want to open a new window?");
        imageElem.src = "https://c.tenor.com/pb06GKyRor0AAAAd/justin-timberlake-stare.gif";
        document.title = "LOL.........";
    }
};
boardcast.postMessage(INITIAL_BOARDCAST);