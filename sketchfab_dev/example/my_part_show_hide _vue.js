
    // Sketchfab Viewer API: Start/Stop the viewer
    var version = '1.8.2';
    var uid = '0bf7a9cd13cc4b1a86497522bb744cbc';
    // var uid = '96f558dea845400495e03e64d053b517';
    
    var iframe = document.getElementById('api-frame');
    var client = new window.Sketchfab(version, iframe);

    var error = function() {
        console.error('Sketchfab API error');
    };
    var success = function(api) {
        api.start(function() {
            api.addEventListener('viewerready', function() {
                
            });
        });
    };
    client.init(uid, {
        success: success,
        error: error,
        autostart: 1,
        preload: 1
    });

