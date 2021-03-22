const scriptName = "카쿠 기댓값계산기";

const n = "\n";


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
var add = [];
var add_ = 0;
  if (msg.startsWith(".기댓값\n")) {
    var Crystal = msg.substr(5).split(n);
    for (i=0; i<Crystal.length; i++) {
      var now = Crystal[i].split(" ");
      add.push(now[0]/100+"×"+now[1]+"×"+now[2] +"="+now[0]*now[1]*now[2]/100);
      add_ = (Number(add_) + Number(now[0]*now[1]*now[2]/100)).toFixed(3);
    }
    replier.reply("[기댓값 계산결과]"+n+n
    +add.join(n)+n+n
    +"결과: "+add_);
    add = [];
    add_ = 0;
  }
}
