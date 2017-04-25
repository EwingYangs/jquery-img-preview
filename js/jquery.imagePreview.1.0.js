// JavaScript Document
//copyright c by Ewing 2017-4-25 
/*由于大图绑定在href属性中，故一般而言，需使用a标签的href指向大图。仅支持png,gif,jpg,bmp四种格式的图片。用法是：目标.preview();
在原来的基础下做了两处修改
1、可以设置图片预览的大小
2、窗口高度太大有滚动条的时候能有更好的预览效果，随着移动屏幕的位置决定在上下方的显示
例如：
①：不设置高度
<a href="xx.jpg">图片</a>
$("a").preview();就可以了
②：设置高度
$("a.preview").preview({
		'height' : '1000px',
		'width' : '800px',
	});	 
//设置显示的预览高度为1000px,宽为800px，可以为不同的图片设置不用的宽高
*/
(function($){
	$.fn.preview = function(config){
		var xOffset = 10;
		var yOffset = 20;
		var w = $(window).width();
		var h = $(window).height();
		var height = config.height;
		var width = config.width;
		$(this).each(function(){
			$(this).hover(function(e){
				if(/.png$|.gif$|.jpg$|.bmp$/.test($(this).attr("href"))){
					$("body").append("<div id='preview'><div><img style='height:"+height+";width:"+width+"' src='"+$(this).attr('href')+"' /><p>"+$(this).attr('title')+"</p></div></div>");
				}else{
					$("body").append("<div id='preview'><div><p>"+$(this).attr('title')+"</p></div></div>");
				}
				$("#preview").css({
					position:"absolute",
					padding:"4px",
					border:"1px solid #f3f3f3",
					backgroundColor:"#eeeeee",
					zIndex:1000
				});
				$("#preview > div").css({
					padding:"5px",
					backgroundColor:"white",
					border:"1px solid #cccccc"
				});
				$("#preview > div > p").css({
					textAlign:"center",
					fontSize:"12px",
					padding:"8px 0 3px",
					margin:"0"
				});
				if(e.pageX < w/2){
					$("#preview").css({
						left: e.pageX + xOffset + "px",
						right: "auto"
					}).fadeIn("fast");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left", "auto").fadeIn("fast");	
				}
				if(e.clientY < h/2){
					$("#preview").css({
						top: (e.pageY - yOffset) + "px",
					}).fadeIn("fast");
				}else{
					$("#preview").css({
						bottom: (window.innerHeight-e.pageY-yOffset) + "px",
					}).fadeIn("fast");	
				}
			},function(){
				$("#preview").remove();
			}).mousemove(function(e){
				// $("#preview").css("top",(e.pageY - xOffset) + "px")
				if(e.pageX < w/2){
					$("#preview").css("left",(e.pageX + yOffset) + "px").css("right","auto");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left","auto");
				}
				if(e.clientY < h/2){
					$("#preview").css({
						top: (e.pageY - yOffset) + "px",
					}).fadeIn("fast");
				}else{
					$("#preview").css({
						bottom: (window.innerHeight-e.pageY-yOffset) + "px",
					}).fadeIn("fast");	
				}
			});						  
		});
	};
})(jQuery);