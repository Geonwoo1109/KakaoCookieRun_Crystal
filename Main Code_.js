const scriptName = "카쿠 기댓값계산기";

const n = "\n";

var go = true;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  var msg_ = msg;
  if ((msg_.startsWith("/기댓값\n") || msg_.startsWith(".기댓값\n")
  || msg_ == ".봇사용법" || msg_ == "/봇사용법")) {
    if (go == true) {
      go = false;

      if (msg_.startsWith("/기댓값\n") || msg_.startsWith(".기댓값\n")) {
        replier.reply(Cookie(msg));
      }
      if (msg_ == ".봇사용법" || msg_ == "/봇사용법") {
        replier.reply(
          "[형식]"+n
          +".기댓값"+n
          +"{확률(%)} {크리스탈} {보물개수}"
          +n+n
          +"[예시]"+n
          +".기댓값"+n
          +"27 4 2"+n
          +"50 3 1"
          +n+n
          +"[주의!]"+n
          +"봇은 3초의 쿨타임을 가지고 있으며, 대기시간 중에는 답장하지 않습니다.");
      }
    }
  }
  java.lang.Thread.sleep(3000);
  go = true;
}

function Cookie(M) {
  var add = [];
  var add_ = 0;
  var Crystal = M.substr(5).split(n);
  for (i = 0; i < Crystal.length; i++) {
    var now = Crystal[i].split(" ");
    add.push(now[0] / 100 + "\xd7" + now[1] + "\xd7" + now[2] + "=" + now[0] * now[1] * now[2] / 100);
    add_ = (Number(add_) + Number(now[0] * now[1] * now[2] / 100)).toFixed(3);
  }
  return ("[기댓값 계산결과]" + n + n + add.join(n) + n + n + "결과: " + add_);
  add = [];
  add_ = 0;
}
