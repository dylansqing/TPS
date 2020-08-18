const express = require("express");
const router = express.Router();
const request = require("request");
const iconv = require("iconv-lite");

router.get("/getCityWeather", async (req, res) => {
  //   let url = "http://ip.ws.126.net/ipquery";
  //   let options = {
  //     url: url
  //   };
  //   request(options).on("response", function(response) {
  //     let chunks = [];
  //     response.on("data", function(chunk) {
  //       chunks = chunks.concat(chunk);
  //     });
  //     response.on("end", function() {
  //       let buf = Buffer.concat(chunks);
  //       // 转码
  //       let text = iconv.decode(buf, "gbk");
  //       console.log(text);
  //       var patt1 = new RegExp("/city:/i");
  //       text.replace(reg, function() {
  //         console.log(arguments.length); //5
  //         console.log(arguments[1]); //test
  //       });
  //       res.send(text);
  //     });
  //   });

  let url = "http://wthrcdn.etouch.cn/weather_mini?city=成都市";
  let options = {
    url: url
  };
  request(options).on("response", function(response) {
    let chunks = [];
    response.on("data", function(chunk) {
      chunks = chunks.concat(chunk);
    });
    response.on("end", function() {
      let buf = Buffer.concat(chunks);
      // 转码
    //   let text = iconv.decode(buf, "gbk");
      console.log(buf);
      res.send(buf);
    });
  });
});

module.exports = router;
