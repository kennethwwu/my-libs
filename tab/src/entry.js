var $ = jQuery = require("./jquery");
var tabUI = require("./tab");
tabUI.init();
tabUI.tab($(".tab-wrap2"),{
	autoPlay : 2000
});
tabUI.tab($(".tab-wrap3"),{
	tabEvent :"mouseover",
	delay :300
});
