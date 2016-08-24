/*
 
method:get/post

url : php/get.php

data :  user=leo

dataType : 'json/xml'

succ : 成功执行的代码

fail : 失败执行的代码

*/
//function ajax(method,url,data,dataType,succ,fail){
function ajax(json){
	
	var settings = {
		url:json.url || '',
		method:json.method || 'get',
		data:json.data || '',
		dataType:json.dataType || 'json',
		succ:json.succ || '',
		fail:json.fail || ''
	}
	
	var ajax = new XMLHttpRequest();
	
	if(settings.method.toLowerCase() === 'get'){
		/*
			 php/get.php?user=leo&321321321
		*/
		//console.log(settings.url+'?'+settings.data)
		ajax.open(settings.method,settings.url+'?'+settings.data+'&'+new Date().getTime(),true);
		
	}else{
		ajax.open(settings.method,settings.url,true);
		
	}
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState === 4){
			if(ajax.status >= 200 && ajax.status<=299 || ajax.status == 304){
				
				if(settings.succ && typeof settings.succ === 'function'){
					
					if(settings.dataType.toLowerCase() === 'json'){
						//console.log(ajax.responseText)
						//settings.succ(JSON.parse(ajax.responseText));
						settings.succ(eval('('+ajax.responseText+')'));
					}else if(settings.dataType.toLowerCase() === 'xml'){
						settings.succ(ajax.responseXML);
					}else{
						settings.succ(ajax.responseText);
					}
					
				}
			}else{
				
				if(settings.fail && typeof settings.fail === 'function'){
					settings.fail(ajax.status);
				}
				
			}
		}
	}
	
	if(settings.method.toLowerCase() === 'get'){
		ajax.send();
	}else{
		ajax.setRequestHeader( 'Content-Type','application/x-www-form-urlencoded');
		ajax.send(settings.data);
		
	}
	
	
	
}
