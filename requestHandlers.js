function(start) {
    console.log('request for handler "start" was called.');
}

function upload() {
    console.log('Request handler "upload" was called.');
}

exports.start = start;
exports.upload = upload;