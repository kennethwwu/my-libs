;(function($,window,undefined) {
	var selectUI = selectUI || {};
	function decoration(obj, opts) {
		var myConfig = {
			selectClass: "", //添加自定义样式
			timer: 200, //下拉时间
			maxHeight: 0, //ul的最大高度，为0时不设置，默认252px
			isScroll: false, //鼠标在ul上时是否让body滚动,
			callBack: function() { //li点击后的回调函数
			}
		}
		var obj = $(obj);
		var selectWrap = obj.next(".select-wrap")
		var selectTitle = selectWrap.find(".selectTitle");
		var selectDown = selectWrap.find(".selectDown");
		var ico = selectWrap.find(".select-ico")
		var options = $.extend(myConfig, opts);
		
		init();
		function init() {
			selectTitle.css({
				"display": "block",
				"height": obj.height(),
				"lineHeight": obj.height() + "px",
				"width": obj.width(),
			})
		
			selectWrap.css({
				"width": obj.width()
			})
			selectDown.css({
				"width": obj.width(),
				"top": obj.height() + 1
			});
			selectDown.find("li").css({
				"height": obj.height(),
				"lineHeight": obj.height() + "px",
				"width": obj.width(),
			});
			if (options.maxHeight) {
				selectDown.css("max-height", options.maxHeight);
			}
			if (!options.isScroll && options.maxHeight) {
				scrollUnique()
			}
			if (options.selectClass && typeof(options.selectClass) === "string") {
				selectWrap.addClass(options.selectClass);
			}
		}
		if(obj.attr("disabled")){
			selectTitle.css("cursor","not-allowed");
			return false;
		}
		function up() {
			selectDown.stop().slideUp(options.timer);
		}

		function down() {
			selectDown.stop().slideDown(options.timer);
		}
		selectWrap.on("click", ".selectTitle", function(e) {
			selectDown.stop().slideToggle(options.timer);
			ico.hasClass("select-ico-chk") ?
			ico.removeClass("select-ico-chk") : ico.addClass("select-ico-chk");

		}).on("click", "li", function() {
			selectWrap.find("li").removeClass("active");
			$(this).addClass('active');
			selectWrap.find(".select-ico").removeClass("select-ico-chk");
			up();
			obj.find("option").attr("selected", false).eq($(this).index()).attr("selected", true)
			selectTitle.find("em").html($(this).html());
			if (options.callBack && typeof(options.callBack) === "function") {
				options.callBack($(this).val());
			}
		});

		$(document, selectDown).on("click", function(e) {
			var target = $(e.target);
			if (target.closest(selectWrap).length == 0) {
				up();
				ico.removeClass("select-ico-chk");
			}
		});

		function scrollUnique() {
			selectDown.each(function() {
				var eventType = 'mousewheel';
				if (document.mozHidden !== undefined) {
					eventType = 'DOMMouseScroll';
				}
				$(this).on(eventType, function(event) {
					var scrollTop = this.scrollTop,
						scrollHeight = this.scrollHeight,
						height = this.clientHeight;
					var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);
					if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
						// IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
						this.scrollTop = delta > 0 ? 0 : scrollHeight;
						// 向上滚 || 向下滚
						event.preventDefault();
					}
				});
			});
		}

	}
	var select = function(dom, opts) {
		if (dom.length < 1) {
			return false;
		}
		dom.each(function(index, domEle) {
			var thisDom = $(domEle).html();
			var aUi = thisDom.replace(/<\/option>/gi, '</li>').replace(/<option/gi, '<li');
			var value = $(domEle).find('option:selected').html();
			var html = '<div class="select-wrap">';
			html += "<span class='selectTitle'><em>" + value + "</em><i class='select-ico'></i></span>";
			html += "<ul class='selectDown'>" + aUi + "</ul></div>";
			$(domEle).after(html);
			decoration(domEle, opts);
		})

	}
	selectUI.select = select;
	selectUI.init = function(opts) {
		$('select') && selectUI.select($("select.selectUI"),opts);
	}
	
	    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
	    	module.exports = selectUI;
	  	} else if (typeof define === 'function' && define.amd) {
	   		define(function() { return selectUI; });
	  	} else {
	    	window.selectUI = selectUI;
	 	}
})(jQuery,window)