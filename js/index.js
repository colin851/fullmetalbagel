(() => {
    function block() {
        setInterval(() => {
            Function("debugger")();
        }, 50);
    }
    try {
        block();
    } catch (err) {}
})();
var _0x52f7=['MD5','appid','getElementsByClassName','value','sort','test','zsI6O4','addEventListener','toString','https://api.mysubmail.com/addressbook/mail/subscribe.json','click','append','then'];var _0x39b1=function(_0x52f72f,_0x39b189){_0x52f72f=_0x52f72f-0x0;var _0x3ccdfe=_0x52f7[_0x52f72f];return _0x3ccdfe;};function BuildSignature(_0x1c22dc){var _0x5c045f=[];for(var _0x52e40a in _0x1c22dc){_0x5c045f[_0x5c045f['length']]=_0x52e40a;}_0x5c045f[_0x39b1('0x4')]();var _0x42d19e={};for(var _0x52da7c=0x0;_0x52da7c<_0x5c045f['length'];_0x52da7c++){_0x42d19e[_0x5c045f[_0x52da7c]]=_0x1c22dc[_0x5c045f[_0x52da7c]];}var _0x1376ea='';for(var _0x52e40a in _0x42d19e){_0x1376ea+=_0x52e40a+'='+_0x42d19e[_0x52e40a]+'&';}_0x1376ea=_0x1376ea['substring'](0x0,_0x1376ea['length']-0x1);var _0x4e0537=CryptoJS[_0x39b1('0x0')](_0x1376ea);return _0x4e0537[_0x39b1('0x8')]();}var stayTunedBtn=document[_0x39b1('0x2')]('stay-tuned-btn')[0x0];stayTunedBtn[_0x39b1('0x7')](_0x39b1('0xa'),function(){var _0x1a5603=document[_0x39b1('0x2')]('stay-tuned-input')[0x0];var _0x18ccc6=_0x1a5603[_0x39b1('0x3')];if(_0x18ccc6){if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/[_0x39b1('0x5')](_0x18ccc6)){toast({'time':0x7d0,'position':'middle','str':'邮箱格式错误！'});return;}var _0x2f845a=new FormData();_0x2f845a['append'](_0x39b1('0x1'),'17966');_0x2f845a['append']('signature','q227ca76707f0bc73acb71a2840556ecb0'['slice'](-0x20));_0x2f845a[_0x39b1('0xb')]('address',_0x18ccc6);_0x2f845a['append']('target',_0x39b1('0x6'));fetch(_0x39b1('0x9'),{'method':'post','mode':'no-cors','body':_0x2f845a})['then'](_0x2ca861=>{debugger;})[_0x39b1('0xc')](_0x1a7917=>{toast({'time':0x7d0,'position':'middle','str':'订阅成功！'});});}});