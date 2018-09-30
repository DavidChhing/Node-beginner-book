function start() {
    console.log('request for handler "start" was called.');

    function sleep(milliSeconds) {
        let startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return 'hello start';
}

function upload() {
    console.log('Request handler "upload" was called.');
    return 'hello upload';
}

exports.start = start;
exports.upload = upload;