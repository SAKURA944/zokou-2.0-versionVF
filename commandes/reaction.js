const a45_0x52ac87=a45_0x5178;(function(_0x18d4d1,_0x77a000){const _0x49dd78=a45_0x5178,_0x1eef15=_0x18d4d1();while(!![]){try{const _0x3df4df=-parseInt(_0x49dd78(0x9b))/0x1*(-parseInt(_0x49dd78(0xbe))/0x2)+-parseInt(_0x49dd78(0xa3))/0x3+-parseInt(_0x49dd78(0x77))/0x4*(parseInt(_0x49dd78(0xc7))/0x5)+-parseInt(_0x49dd78(0xc0))/0x6*(parseInt(_0x49dd78(0x78))/0x7)+-parseInt(_0x49dd78(0xbd))/0x8*(parseInt(_0x49dd78(0x89))/0x9)+-parseInt(_0x49dd78(0xb3))/0xa*(parseInt(_0x49dd78(0xa5))/0xb)+-parseInt(_0x49dd78(0x7b))/0xc*(-parseInt(_0x49dd78(0x6d))/0xd);if(_0x3df4df===_0x77a000)break;else _0x1eef15['push'](_0x1eef15['shift']());}catch(_0x2b863c){_0x1eef15['push'](_0x1eef15['shift']());}}}(a45_0x4dc4,0xdd96b));const a45_0xb36bf7=(function(){let _0x1d90ae=!![];return function(_0x38883d,_0x13abac){const _0x14213a=_0x1d90ae?function(){if(_0x13abac){const _0x3ff447=_0x13abac['apply'](_0x38883d,arguments);return _0x13abac=null,_0x3ff447;}}:function(){};return _0x1d90ae=![],_0x14213a;};}()),a45_0x4b0e3c=a45_0xb36bf7(this,function(){const _0x57af2c=a45_0x5178;return a45_0x4b0e3c[_0x57af2c(0x79)]()[_0x57af2c(0xac)](_0x57af2c(0x8e))['toString']()[_0x57af2c(0x9f)](a45_0x4b0e3c)[_0x57af2c(0xac)](_0x57af2c(0x8e));});a45_0x4b0e3c();function a45_0x5178(_0x331863,_0x14918b){const _0x4e73b2=a45_0x4dc4();return a45_0x5178=function(_0x4b0e3c,_0xb36bf7){_0x4b0e3c=_0x4b0e3c-0x6a;let _0x4dc49b=_0x4e73b2[_0x4b0e3c];return _0x4dc49b;},a45_0x5178(_0x331863,_0x14918b);}const axios=require(a45_0x52ac87(0xc9)),{zokou}=require(a45_0x52ac87(0xa7)),fs=require(a45_0x52ac87(0x93)),{exec}=require('child_process'),child_process=require('child_process'),{unlink}=require('fs')[a45_0x52ac87(0x87)],sleep=_0x8030f3=>{return new Promise(_0x2510f1=>{setTimeout(_0x2510f1,_0x8030f3);});},GIFBufferToVideoBuffer=async _0x2914ac=>{const _0x23061a=a45_0x52ac87,_0x501eae=''+Math[_0x23061a(0x7a)]()[_0x23061a(0x79)](0x24);await fs[_0x23061a(0x6f)]('./'+_0x501eae+_0x23061a(0x8d),_0x2914ac),child_process[_0x23061a(0x88)]('ffmpeg\x20-i\x20./'+_0x501eae+_0x23061a(0x90)+_0x501eae+'.mp4'),await sleep(0xfa0);var _0x4bf8db=await fs[_0x23061a(0xc6)]('./'+_0x501eae+_0x23061a(0xab));return Promise[_0x23061a(0xaa)]([unlink('./'+_0x501eae+_0x23061a(0xab)),unlink('./'+_0x501eae+'.gif')]),_0x4bf8db;},generateReactionCommand=(_0x2c1df1,_0x294905,_0x604a9c,_0x47e213)=>{const _0x8f519c=a45_0x52ac87;zokou({'nomCom':_0x604a9c,'categorie':_0x8f519c(0xb2),'reaction':_0x294905},async(_0x3cc0b3,_0x214b69,_0x2357f1)=>{const _0x839242=_0x8f519c,{auteurMessage:_0x11a0e7,auteurMsgRepondu:_0x4e17c5,repondre:_0x38b837,ms:_0x23d606,msgRepondu:_0x5a5bb7}=_0x2357f1,_0x112f10='https://api.waifu.pics/sfw/'+_0x2c1df1;try{const _0x1a0442=await axios[_0x839242(0x8c)](_0x112f10),_0x19b51c=_0x1a0442['data']['url'],_0x4f1c46=await axios[_0x839242(0x8c)](_0x19b51c,{'responseType':_0x839242(0x76)}),_0x4bec26=await _0x4f1c46[_0x839242(0x82)],_0x3a3777=await GIFBufferToVideoBuffer(_0x4bec26);if(_0x5a5bb7){var _0x2f5003='\x20@'+_0x11a0e7[_0x839242(0xc1)]('@')[0x0]+_0x839242(0x7e)+_0x47e213+'\x20@'+_0x4e17c5[_0x839242(0xc1)]('@')[0x0];_0x214b69[_0x839242(0xc2)](_0x3cc0b3,{'video':_0x3a3777,'gifPlayback':!![],'caption':_0x2f5003,'mentions':[_0x11a0e7,_0x4e17c5]},{'quoted':_0x23d606});}else{const _0x27d4fb={'video':_0x3a3777,'gifPlayback':!![],'caption':'@'+_0x11a0e7['split']('@')[0x0]+_0x839242(0xaf)+_0x47e213+_0x839242(0x7f),'mentions':[_0x11a0e7]};_0x214b69[_0x839242(0xc2)](_0x3cc0b3,_0x27d4fb,{'quoted':_0x23d606});}}catch(_0x24628c){_0x38b837(_0x839242(0x6b)+_0x24628c),console[_0x839242(0x96)](_0x24628c);}});};function a45_0x4dc4(){const _0x5d9a64=['search','tope-la','sourire','\x20s\x27est\x20','yeet','rougir','Reaction','21600mhdVkL','calin','pleuré(e)\x20pour','rougi(e)\x20à','handhold','kiss','gifler','a\x20l\x27air\x20cringe\x20pour','enlacer','smug','4376VMjgqN','79966otsDdC','pied','25914hwVQRx','split','sendMessage','smile','fait\x20un\x20top-la\x20à','embrassé(e)','readFileSync','1158050ziYBRU','kill','axios','bonk','mangé(e)','slap','l\x27air\x20heureux\x20pour','tapoter','manger','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20:','a\x20fait\x20un\x20clin\x20d\x27œil\x20à','7241XgEKxe','jetté(e)','writeFileSync','malice','happy','nom','tenu(e)','pousser','enlacé(e)','arraybuffer','12HfnUXR','1869NddbnU','toString','random','98844UtVies','tué(e)','awoo','\x20a\x20','\x20lui\x20même.','mordu(e)','donné(e)\x20un\x20coup\x20de\x20pied\x20a','data','clin','bully','tuer','heureux','promises','exec','19575eYXhro','hug','tenir','get','.gif','(((.+)+)+)+$','pat','.gif\x20-movflags\x20faststart\x20-pix_fmt\x20yuv420p\x20-vf\x20\x22scale=trunc(iw/2)*2:trunc(ih/2)*2\x22\x20./','danser','highfive','fs-extra','leché(e)','cringe','log','taquiner','saluer','tapoté(e)','poke','13FrwuNl','fait\x20un\x20sourire\x20malicieux\x20a','lecher','embrasser','constructor','giflé(e)','cuddle','kick','227859UNUGlB','blush','5533pnMYGv','wave','../framework/zokou','glomp','bite','all','.mp4'];a45_0x4dc4=function(){return _0x5d9a64;};return a45_0x4dc4();}generateReactionCommand(a45_0x52ac87(0x84),'👊',a45_0x52ac87(0x97),'taquiné(e)'),generateReactionCommand(a45_0x52ac87(0xa1),'🤗','caliner','caliné(e)'),generateReactionCommand('cry','😢','pleurer',a45_0x52ac87(0xb5)),generateReactionCommand(a45_0x52ac87(0x8a),'😊',a45_0x52ac87(0xb4),'fait\x20un\x20calin'),generateReactionCommand(a45_0x52ac87(0x7d),'🐺',a45_0x52ac87(0x7d),a45_0x52ac87(0x7d)),generateReactionCommand(a45_0x52ac87(0xb8),'😘',a45_0x52ac87(0x9e),a45_0x52ac87(0xc5)),generateReactionCommand('lick','👅',a45_0x52ac87(0x9d),a45_0x52ac87(0x94)),generateReactionCommand(a45_0x52ac87(0x8f),'👋',a45_0x52ac87(0xce),a45_0x52ac87(0x99)),generateReactionCommand(a45_0x52ac87(0xbc),'😏',a45_0x52ac87(0x70),a45_0x52ac87(0x9c)),generateReactionCommand(a45_0x52ac87(0xca),'🔨',a45_0x52ac87(0xca),a45_0x52ac87(0xca)),generateReactionCommand(a45_0x52ac87(0xb0),'🚀','lancer',a45_0x52ac87(0x6e)),generateReactionCommand(a45_0x52ac87(0xa4),'😊',a45_0x52ac87(0xb1),a45_0x52ac87(0xb6)),generateReactionCommand(a45_0x52ac87(0xc3),'😄',a45_0x52ac87(0xae),'fait\x20un\x20sourire\x20à'),generateReactionCommand(a45_0x52ac87(0xa6),'👋',a45_0x52ac87(0x98),'salué(e)'),generateReactionCommand(a45_0x52ac87(0x92),'✋',a45_0x52ac87(0xad),a45_0x52ac87(0xc4)),generateReactionCommand(a45_0x52ac87(0xb7),'🤝',a45_0x52ac87(0x8b),a45_0x52ac87(0x73)),generateReactionCommand(a45_0x52ac87(0x72),'🍴',a45_0x52ac87(0x6a),a45_0x52ac87(0xcb)),generateReactionCommand(a45_0x52ac87(0xa9),'🦷','mordre',a45_0x52ac87(0x80)),generateReactionCommand(a45_0x52ac87(0xa8),'🤗',a45_0x52ac87(0xbb),a45_0x52ac87(0x75)),generateReactionCommand(a45_0x52ac87(0xcc),'👋',a45_0x52ac87(0xb9),a45_0x52ac87(0xa0)),generateReactionCommand(a45_0x52ac87(0xc8),'💀',a45_0x52ac87(0x85),a45_0x52ac87(0x7c)),generateReactionCommand(a45_0x52ac87(0xa2),'🦵',a45_0x52ac87(0xbf),a45_0x52ac87(0x81)),generateReactionCommand(a45_0x52ac87(0x71),'😄',a45_0x52ac87(0x86),a45_0x52ac87(0xcd)),generateReactionCommand('wink','😉',a45_0x52ac87(0x83),a45_0x52ac87(0x6c)),generateReactionCommand(a45_0x52ac87(0x9a),'👉',a45_0x52ac87(0x74),'pousser'),generateReactionCommand('dance','💃',a45_0x52ac87(0x91),'dansé\x20pour'),generateReactionCommand(a45_0x52ac87(0x95),'😬',a45_0x52ac87(0x95),a45_0x52ac87(0xba));