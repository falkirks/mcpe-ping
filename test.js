var mcpeping = require("./index");
function testPing(ip, port){
  mcpeping(ip, port, function (err, res) {
    console.log("%j", {
      ip: ip,
      port: port,
      error: err,
      result: res}
    );
  }, 5000);
}
testPing("play.inpvp.net", 19132);
testPing("play.lbsg.net", 19132);
