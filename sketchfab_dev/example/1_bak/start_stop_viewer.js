// Sketchfab Viewer API: Start/Stop the viewer
var version = '1.8.2';
var uid = 'dd958716be0b4786b8700125eec618e5';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);

var error = function() {
    console.error('Sketchfab API error');
};

var success = function(api) {
    api.addEventListener('viewerstart', function() {
        console.log('viewerstart');
    });
    api.addEventListener('viewerstop', function() {
        console.log('viewerstop');
    });

    api.start(function() {
        document.getElementById('start').addEventListener('click', function() {
            api.start();
        });

        document.getElementById('stop').addEventListener('click', function() {
            api.stop();
        });

        api.addEventListener('viewerready', function() {
            console.log('viewerReady');
        });
    });
};
client.init(uid, {
    success: success,
    error: error,
    autostart: 1,
    preload: 1
});
//////////////////////////////////
// GUI Code
//////////////////////////////////
function initGui() {
    var controls = document.getElementById('controls');
    var buttonsText = '';
    buttonsText += '<button id="start">Start</button>';
    buttonsText += '<button id="stop">Stop</button>';
    controls.innerHTML = buttonsText;
}
initGui();

//////////////////////////////////
// GUI Code end
//////////////////////////////////
