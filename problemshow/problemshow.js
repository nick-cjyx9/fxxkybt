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
