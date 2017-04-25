由于大图绑定在href属性中，故一般而言，需使用a标签的href指向大图。仅支持png,gif,jpg,bmp四种格式的图片。用法是：目标.preview();
在原来的基础下做了两处修改
1、可以设置图片预览的大小
2、窗口高度太大有滚动条的时候能有更好的预览效果，随着移动屏幕的位置决定在上下方的显示
例如：
①：不设置高度
        
        <a href="xx.jpg">图片</a>
		$("a").preview();
        就可以了
②：设置高度
        
        $("a.preview").preview({
                'height' : '1000px',
                'width' : '800px',
            });	 
设置显示的预览高度为1000px,宽为800px，可以为不同的图片设置不用的宽高

- 效果图如下

![](http://a.hiphotos.baidu.com/image/pic/item/21a4462309f79052a066891d06f3d7ca7bcbd59c.jpg)