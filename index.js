express=require("express"),app=express(),axios=require("axios"),cheerio=require("cheerio");function tiktok(e){return new Promise(((i,t)=>{axios.get("https://musicaldown.com/id",{headers:msg.agent}).then((t=>{let d=cheerio.load(t.data),o=d("#link_url").attr("name"),n=d("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name"),s=d("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),h=d("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value"),l={[`${o}`]:e,[`${n}`]:s,verify:h};axios.request({url:"https://musicaldown.com/id/download",method:"post",data:new URLSearchParams(Object.entries(l)),headers:{"user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",cookie:t.headers["set-cookie"]}}).then((e=>{let d=cheerio.load(e.data);if(d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(3)").attr("href"))axios.request({url:"https://musicaldown.com/id/mp3",method:"post",headers:{"user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",cookie:t.headers["set-cookie"]}}).then((e=>{let t=cheerio.load(e.data),o={pp:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div > div > img").attr("src"),username:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div > h2:nth-child(2) > b").text(),desc:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4.center-align > div > h2:nth-child(3)").text(),vid1:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(3)").attr("href"),vid2:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(5)").attr("href"),vid_hd:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(7)").attr("href"),vid_wm:d("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(9)").attr("href"),aud:t("body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(6)").attr("href"),aud_dwn:t("#download").attr("href")};i(o)}));else{let e=[];d("body > div.welcome.section > div > div:nth-child(2) > div > div.row > div").each((function(i,t){e.push({url:d(t).find("img").attr("src"),url_dwn:d(t).find("a").attr("href")})}));let t={aud:d("body > div.welcome.section > div > div:nth-child(2) > div > a:nth-child(7)").attr("href"),aud_dwn:d("#download").attr("href"),photo:e};t.photo[0]?i(t):i()}}))}))}))}app.use(express.json()),require("./mess");const token=["zhsu&&sb88","qiwj**zbs4","fjid@#nsx12","hfh$*db5=5","yhtt=$hgg","ffxdd+22","ggcffx$$6","jgtc@1$$6","rickk"];app.get("/api/token",((e,i)=>{i.json({status:"success",message:"token",data:token})})),app.get("/api/tiktok",((e,i)=>{let t=e.query.url,d=e.query.token;t||i.json(msg.url),d||i.json(msg.token),token.includes(d)?tiktok(t).then((e=>{let t=e;t||i.json(msg.result),i.json({status:"success","token":d,data:t})})):i.json(msg.tokenx)})),app.listen(3e3);
