
// 引入 request 组件 
const request = require('request')
 ///access_token 
  //  62_k9e8jKmKFqgB_kpe872mbZHaESW-U8P_dpH0UOmlpgEzbQ_BAWYcxFZDO8sXKenp7M3NApTNoDARC67MkYZdlBCglCUzOa8iecEsqArqGowZYo3q5S5gIlW2lZ_P8GFNMgpYxCu0rKnIMqznBZNiADAVTH
// 发送 post 请求
// request({
//   url: 'http://localhost:8080/api/user/insert',
//   method: "POST",
//   json: true,
//   headers: {
//     "content-type": "application/json",
//   },
//   body: {
//     id:'234232332',
//     name:'张三'
//   }
// },(err,rep,body) => {
//   if(err){
//     console.log("request 请求post 出现错误 err : " , err );
//     return false ;
//   }
//   // body表示返回的数据
//   if(body){
//     // 请求成功
    
//   }
// })
 
// 发送 get 请求

function get_urllink(access_token){
  console.log('>>>',access_token)
 request({
  url: `https://api.weixin.qq.com/wxa/generate_urllink?access_token=${access_token}`,
  method: "POST",
  json: true,
  headers: {
    "content-type": "application/json",
  },
  body: {
    "path": "",
    "expire_type":1,
    "expire_interval":20
    // "path": "/pages/index/index",
    // "query": "",
    // "expire_type":1,
    // "expire_interval":1,
    // "env_version": "release",
    // "cloud_base":
    // {
    //     "env": "xxx",
    //     "domain": "xxx.xx",
    //     "path": "/jump-wxa.html",
    //     "query": "a=1&b=2"
    // }
  }
},(err,rep,body) => {
  if(err){
    console.log("request  请求post get_urllink 出现错误 err : " , err );
    return false ;
  }
  // body表示返回的数据
  if(body){
    console.log(" request body: 请求成功 get_urllink",body)
    // 请求成功
    
  }
})
}
function get_wewixin_acc(cb){
  request({
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdc1b7292be669569&secret=4abee2d3acfc499f6b38926b0419dea4',
    method: "GET",
    json: true,
    headers: {
	    "content-type": "application/json",
    },
    body: {
	 
    }
},(err,rep,body) => {
    if(err){
	    // console.log(" request 请求get请求出现错误 err:",err)
	    // return false;
    }
     // rep表示返回的数据
     if(rep){
      // console.log(" request rep:",rep)
      // 请求成功
    
    }
    // body表示返回的数据
    if(body){
      console.log(" request body: 请求成功 get_wewixin_acc",body)
      // 请求成功
    setTimeout(()=>{
      get_urllink(body.access_token)
    },2000)
    
    }
    cb && cb(err,rep,body)
})
}
// get_wewixin_acc()
get_urllink('62_SjzAy90nSm5rwmFoYmRkP2yqJLurQHmXZv4frFE6f-0DQOIBNrmE2VDaljElw3fqMYr5pndFY6GwXk9AZuiXmKCgoBLivKrii0gSXJHkBHN1CCp7eDVJOuqKimLW6SRdFzO7FCE-l-wMbTQOEPJjAAALWQ')
return ;
const http = require('http');
const port = 8000;

let list = []
let num = 0
      // node封装的请求中间件GET请求
  //  koaReq('http://api.douban.com/v2/movie/top250?start=25&count=2', function (error, response, body) {
  //   console.log('error',error)
  //   console.log('response',JSON.parse(response))
  //   console.log('body',JSON.parse(body))
  //       //     if (!error && response.statusCode == 200) {
  //       //         console.log(JSON.parse(body))
  //       //     }
  //       // })
     
// create 100,000 records
for (let i = 0; i < 10; i++) {
  num++
  list.push({
    src: 'https://miro.medium.com/fit/c/64/64/1*XYGoKrb1w5zdWZLOIEevZg.png',
    text: `hello world ${num}`,
    tid: num
  })
}

http.createServer(function (req, res) {
  // for Cross-Origin Resource Sharing (CORS)
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    'Access-Control-Allow-Headers': 'Content-Type'
  })

  
  var cb=(err,rep,body)=>{
    // res.end(JSON.stringify(list));
    let obj={
      err:err,
      rep:rep,
      body:body
    }
    res.end(JSON.stringify(obj));
  }
  get_wewixin_acc(cb);
}).listen(port, function () {
  console.log('server is listening on port nnn ' + port);
})