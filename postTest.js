var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
  javascript: 5,
  python: 3,
  uni: 'hl2967',
  url: 'https://github.com/houlianglv/adicodetest',
  hours: '0.5',
  song: 'What Do You Mean-Hello-Sugar'
});


var options = {
  hostname: 'apply.to.labs.adicu.com',
  port: 80,
  path: '/2016',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.')
  })
});
req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();