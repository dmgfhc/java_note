var xmlHttpRequest ;	// 这个是Ajax主要的处理对象
		function create() {	// 该函数的主要功能是创建XmlHttpRequest对象
			if (window.XMLHttpRequest) {	// 当前浏览器不是IE
				xmlHttpRequest = new XMLHttpRequest() ;	// 直接创建对象
			} else {	// 如果是IE则需要通过ActiveX进行对象创建
				xmlHttpRequest = new ActiveXObject("Microsoft.XMLHttp") ;
			}
		}

window.onload = function(){
	create() ;
	xmlHttpRequest.open("post","AreaplusServlet?aid=" + this.value) ;	// 地址重写
	xmlHttpRequest.send(null) ;	// 表示发送请求
	xmlHttpRequest.onreadystatechange = function(){
		//表示请求发送成功的操作
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){


		}

	}
}