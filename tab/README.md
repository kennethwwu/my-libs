
[在线demo](http://ypzhou.esy.es/demos/select/select.html)

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
    delay: false //延迟时间,false时不延迟
});</code></pre>


