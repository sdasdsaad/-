/**
 * Created by Administrator on 2017/8/11.
 */
var http = require('http');
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});