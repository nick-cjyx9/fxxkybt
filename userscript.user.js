// ==UserScript==
// @name         fxxkybt
// @namespace    http://tampermonkey.net/
// @version      0.114514
// @description  fxxk it
// @author       cjyx9
// @match        http://ybt.ssoier.cn:8088/*
// @grant        none
// ==/UserScript==

//--global--//
function loadBoot() {
    let script = document.createElement('link');
    script.setAttribute('rel', 'stylesheet');
    script.setAttribute('type', 'text/css');
    script.setAttribute('integrity', 'sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu');
    script.setAttribute('crossorigin', 'anonymous');
    script.href = "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
    document.documentElement.appendChild(script);

    let script1 = document.createElement('script');
    script1.src = "https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js";
    document.documentElement.appendChild(script1);

    let script2 = document.createElement('script');
    script2.setAttribute('integrity', 'sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd');
    script2.setAttribute('crossorigin', 'anonymous');
    script2.src = "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
    document.documentElement.appendChild(script2);
    let script3 = document.createElement('link');
    script3.setAttribute('rel', 'stylesheet');
    script3.setAttribute('type', 'text/css');
    script3.href = "https://cdn.jsdelivr.net/gh/nick-cjyx9/fxxkybt/global/global.css";
    document.documentElement.appendChild(script3);

    document.documentElement.innerHTML=document.documentElement.innerHTML.replace(`<link rel=stylesheet href='bnuoj.css'></link>`,'');
    document.documentElement.innerHTML=document.documentElement.innerHTML.replace('﻿','');
}
function createTop() {
    let bf = document.querySelector("body > center");
    let af = document.querySelector("body>center>hr:nth-child(3)");
    let example = document.createElement("nav");
    example.classList.add("navbar", "navbar-default", "navbar-static-top");
    example.innerHTML = `
    <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="http://ybt.ssoier.cn:8088/index.php">信息学奥赛一本通</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a href="http://ybt.ssoier.cn:8088/index.php">主页</a></li>
        <li><a href="http://ybt.ssoier.cn:8088/ranklist.php">排名</a></li>
        <li><a href="http://ybt.ssoier.cn:8088/status.php">提交记录</a></li>
        <li><a href="http://ybt.ssoier.cn:8088/problem_list.php?page=">题目列表</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="unsign-show"><a href="login0.php">用户登录</a></li>
        <li class="unsign-show"><a href="find_pd.php">找回密码</a></li>
        <!-- 艹tmd把href写成herf以为是bug改了半天，日！ --!-->
        <li class="unsign-show"><a href="register.php">注册新用户</a></li>
        <li id="toast_ss"><a href="http://ybt.ssoier.cn:8088/login0.php">请登录</a></li>
        <li class="sign-show"><a href="#" id="editProf">修改资料</a></li>
        <li class="sign-show fuck"><a href="http://ybt.ssoier.cn:8088/mail_index.php" id="mail">邮件</a></li>
        <li class="sign-show fuck"><a href="http://ybt.ssoier.cn:8088/logout.php" id="unlog">退出登录</a></li>
      </ul>
    </div>
  </div>
    `;
    bf.insertBefore(example, af);
    let stlyess=document.createElement('style');
    if(isSigned()){
      stlyess.innerText=`.unsign-show{display:none !important;}`;
      let id=getId();
      document.querySelector("#toast_ss>a").innerHTML=`你好，`+id;
      document.querySelector("#editProf").href="http://ybt.ssoier.cn:8088/update_userinfo.php?name="+id;
    }else{
      stlyess.innerText=`.sign-show{display:none !important;}`;
    }document.documentElement.appendChild(stlyess);
}
function isSigned() {
    let father = document.querySelector("table.webtop>tbody>tr>th:nth-child(3)");
    let childlist = father.children;
    for (let i = 0; i < childlist.length; i++) {
        const element = childlist[i];
        if (element.innerText == "用户登录") {
            return false;
        }
    }
    return true;
}
function getId() {
    let father = document.querySelector("body > center > table.webtop > tbody > tr > th:nth-child(3) > table > tbody > tr:nth-child(1) > th");
    return father.innerText.replace("  修改资料", '');
}

//--problemshow--//
function createBtn() {
    let child = document.querySelectorAll(".bottom_link");
    let af = child[0].parentElement;
    let bf = document.querySelector(".pcontent");
    let btn = document.createElement("div");
    btn.innerHTML = `
    <div class="holder" style="text-align: center;margin: 18px 0;">
    <div class="btn-group">
    <a href="#" class="btn btn-default yt">提交</a>
    <a href="#" class="btn btn-default yt">统计信息</a>
    <a href="#" class="btn btn-default yt">提交记录</a>
    </div>
    </div>`;
    bf.insertBefore(btn, af);
    af.setAttribute("style", "display:none;");
    let btns = document.querySelectorAll(".yt");
    for (let i = 0; i < child.length; i++) {
        btns[i].href = child[i].href;
    }
}
function createCopyBtn() {
    let preTags = document.querySelectorAll("pre"); //选中所有pre标签
    for (let i = 0; i < preTags.length; i++) {
        const preTag = preTags[i];
        let box = preTag.parentElement;
        let holder = document.createElement("div"); //搭载按钮的容器
        holder.innerHTML = `
        <a class="copy" style="
        font-size: .8em;
        float: right;
        margin-right: 18px;">copy</span>
        `; //按钮
        holder.onclick = function () {
            //监听按钮按下事件
            const textarea = document.createElement('textarea'); // 创建textarea对象
            textarea.value = preTag.innerText; // 设置复制内容
            document.body.appendChild(textarea); // 添加临时实例
            textarea.select() // 选择实例内容
            document.execCommand('Copy'); // 执行复制
            document.body.removeChild(textarea); // 删除临时实例
            truebtn = holder.children[0];
            truebtn.innerText = 'copied!';
            setTimeout(() => truebtn.innerText = 'copy', 1000);
            //设计一个copied效果提示用户
        }
        box.appendChild(holder); //添加按钮
    }
}
function problemShow() {
    let script = document.createElement('link');
    script.setAttribute('rel', 'stylesheet');
    script.setAttribute('type', 'text/css');
    script.href = "https://cdn.jsdelivr.net/gh/nick-cjyx9/fxxkybt/problemshow/problemshow.css";
    document.documentElement.appendChild(script);
    createBtn();
    createCopyBtn();
}

(function () {
    'use strict';
    var path = location.pathname;
    loadBoot();
    createTop();
    if (path.search("problem_show.php")!=-1) {
        problemShow();
    }
})();
