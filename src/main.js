let html = document.querySelector("#demo");
let style = document.querySelector('#style');
let string = `
/*你好，我是一名前端新人
接下来我要加样式了
我要加的样式是*/
body{
    color: red;
}
/*然后我要准备一个div*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*接下来把div变成太极
首先把div变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*太极是阴阳一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个圆*/
#div1::before{
    width:  100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:  100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%);
}
`;
let string2 = '';
let n = 0;


let step = () => {
    setTimeout(() => {
        n = n + 1;
        string2 += (string[n] === "\n" ? "<br>" : string[n]);
        if (string[n] === ' ') {
            string2 += "&nbsp;";
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        demo.scrollTo(0, 9999);
        if (n + 1 < string.length) {
            step();
        }
    }, 0);
};
step();