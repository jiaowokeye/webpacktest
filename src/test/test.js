  var test1=require("./test1.js");
  var test2=require("./test2.js");
  require("./test.css")
  console.log("22111");
  console.log(test1);
  console.log(test2);
  var oImg=document.createElement("img");
  oImg.src="http://img3.imgtn.bdimg.com/it/u=214931719,1608091472&fm=21&gp=0.jpg";
  document.body.appendChild(oImg);
  if (module.hot) {
    module.hot.accept();
  }