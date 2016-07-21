[在线demo](http://zhouyupeng.github.io/numUp/numUp.html)
<blockquote>
<h1><strong>使用方法</strong></h1>
</blockquote>
####不依赖其他框架

引入numUp.js在标签里加上num属性
```html
<div num="2928293293" ></div>
<div num="202932323" ></div>
<div num="22312324" ></div>
```
NumUpUI(elm,otp);

#otp配置
```javascript
{
    num:100000,//可选，如果标签中有num这个值配置中的num将失效
    duration: 1500, //默认间隔
    prefix: "", //前缀 100000000 vs  ￥100000000
    decimal: 0, //小数点100000000 vs 100000000.00
    isfomat: false, //是否格式化,100000000 vs 1,000,000
    isUpAuto: true //动画效果
}
```
