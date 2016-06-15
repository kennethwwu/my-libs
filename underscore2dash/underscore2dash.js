var fs = require('fs');

var filePath = "image";

fs.readdir(filePath,function(error,files ){
	files.forEach(function(fileName){

		var oldPath = filePath + "/" + fileName,
		reg = /_/g,
		newPath = filePath + "/" + fileName.replace(reg,"-");

		fs.rename(oldPath,newPath,function(err){
			if(err){
				throw err;
			}
			console.log(fileName + "下划线替换成功");
		});
	});
})