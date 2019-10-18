var express = require('express');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var app = express();
var soccerServer = 'http://localhost:8000';
 
app.use(express.static(__dirname + '/dist/front-end-app'));

app.all("/api/*", function(req, res) {
    apiProxy.web(req, res, {
							changeOrigin: true,
							target: soccerServer
							});
});

app.all('/#/*', function (req, res, next) {
	console.log('redirecting to LOCAL');
	res.sendFile(path.join(__dirname+'/dist/front-end-app/index.html'));
});

app.listen(process.env.PORT || 4200);

apiProxy.on('proxyRes', function(proxyRes, req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');  
  res.setHeader('User-Agent', '*');    
});

apiProxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('User-Agent', '*');    
});