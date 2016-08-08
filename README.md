## 插件
#numUp数字增长效果
[在线demo](http://zhouyupeng.github.io/numUp/numUp.html)
<blockquote>
<h1><strong>使用方法</strong></h1>
</blockquote>
####不依赖其他库

引入numUp.js在标签里加上num属性
```html
<div num="2928293293" ></div>
<div num="202932323" ></div>
<div num="22312324" ></div>
```
NumUpUI(elm,opt);

##opt配置
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
#select模拟
[在线demo](http://ypzhou.esy.es/demos/select/select.html)
<blockquote>
<h1><strong>使用方法</strong></h1>
</blockquote>
##opt配置
```javascript
{
	selectClass: "mySel",//给selectUI的最外层添加class//默认不添加
	timer:200,//下拉时间,默认200ms
	isScroll:false,//鼠标在下拉框中时页面是否滚动,默认不滚动
	maxHeight:225,//设置下拉框的最大高度，默认0不设置
	callBack : function(value){//下拉框点击后的回调事件,value回调函数的返回参数，为当前select选中的值 
		alert("当前选中值为"+ value);
}
```			

				
<h1><strong>使用方法</strong></h1>
导入selectUI.css和导入selectUI.js(依赖jquery),在原始select上加class "selectUI"
.调用selectUI.init();init()中可添加参数,或
.在select上添加另外class,selectUI.select($(".selectUI1"),{
	//这里是参数
})
#Tab选项卡
[在线demo](http://ypzhou.esy.es/demos/tab/out/tab.html)

<blockquote>
<h1><strong>使用方法</strong></h1>
</blockquote>
<h2>使用以下html格式</h2>
<pre><code class="lang-html"> &lt;div id="tab-wrap"&gt;
    &lt;div class="tab-hd"&gt;
        &lt;span class="tab-hd-con"&gt;选项卡一&lt;/span&gt;
        &lt;span class="tab-hd-con"&gt;选项卡二&lt;/span&gt;
        &lt;span class="tab-hd-con"&gt;选项卡三&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="tab-bd"&gt;
        &lt;div class="tab-bd-content"&gt;
            选项卡1111
        &lt;/div&gt;
        &lt;div class="tab-bd-content"&gt;
            选项卡2222
        &lt;/div&gt;
        &lt;div class="tab-bd-content"&gt;
            选项卡3333
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
<h2>配置</h2>
<pre><code class="lang-javascript">this.options = { //配置初始化
    autoPlay: false, //自动播放时间，默认false不自动播放
    tabEvent: "click", //tab事件有click,mouseover
    now: 0, //默认第几个显示
    animate : false,//淡入淡出,默认false
    delay: false //延迟时间,false时不延迟
}</code></pre>
<h2>调用</h2>
<p><strong>多个一起调用</strong>

</p>
<ol>
<li>给id="tab-wrap"的div添加class="tabWrap";</li>
<li>tabUI.init();</li>
</ol>
<p><strong>单个调用</strong>
</p>
<pre><code class="lang-javascript">1. 给id="tab-wrap"的div添加你的class;
2. tabUI.tab($(youClass),{
    autoPlay: false, //自动播放时间，默认false不自动播放
    tabEvent: "click", //tab事件有click,mouseover
    now: 0, //默认第几个显示
    animate : false,//淡入淡出,默认false
    delay: false //延迟时间,false时不延迟
});</code></pre>