const imageElem = document.getElementById('swag');
const LeaveMeAlone = (onAnotherTabAlreadyOpen, onNewTabOpen = null) => {
    const ANNOUNCEMENT_BOARDCAST = "I_AM_ON";
    const ALREADY_OPEN_BROADCAST = "ANOTHER_OPEN";
    
    const broadCast = new BroadcastChannel("cruderkat_channel");
    broadCast.onmessage = e => {
        if(e.data === ANNOUNCEMENT_BOARDCAST) {
            if(onNewTabOpen) {
                onNewTabOpen();
            }
            else {
                broadCast.postMessage(ALREADY_OPEN_BROADCAST);
            }
        }
        else if(e.data === ALREADY_OPEN_BROADCAST) {
            onAnotherTabAlreadyOpen();
        }
    };
    broadCast.postMessage(ANNOUNCEMENT_BOARDCAST);
};
LeaveMeAlone(() => {
    alert("Are you sure you want to open a new window?");
    imageElem.src = "https://c.tenor.com/pb06GKyRor0AAAAd/justin-timberlake-stare.gif";
    document.title = "LOL.........";
});