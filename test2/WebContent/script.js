function inputCheck(){
		//alert(1);
		
		str = "입력한 항목은\n"; 
		
		//if(document.myform.title.value.length==0){
		if(document.myform.title.value==""){
			alert("제목입력하세요");
			return false;
		}
		
		if(document.myform.author.value==""){
			alert("저자입력하세요");
			return false;
		}
		
		if(document.myform.publisher.value==""){
			alert("출판사입력하세요");
			return false;
		}
		
		if(document.myform.price.value==""){
			alert("가격입력하세요");
			return false;
		}
		
		if(isNaN(document.myform.price.value)){
			alert("가격은 숫자로 입력하세요");
			//document.myform.price.value="";
			document.myform.price.select();
			return false;
		}
		
		if(document.myform.date.value==""){
			alert("입고일 입력하세요");
			return false;
		}
		
		str += document.myform.title.value+"\n";
		str += document.myform.author.value+"\n";
		str += document.myform.publisher.value+"\n";
		str += document.myform.price.value+"\n";
		str += document.myform.date.value+"\n";
		
		
		var len = document.myform.kind.length; // 2
		flag = false;
		for(var i=0;i<len;i++){
			if(document.myform.kind[i].checked == true){
				str += document.myform.kind[i].value +"\n";
				flag = true;
			}
		}
		
		if(flag == false){
			alert("배송비 유무를 선택하세요");
			return false;
		}
		
		var len = document.myform.bookstore.length; // 4
		flag = false;
		for(var i=0;i<len;i++){
			if(document.myform.bookstore[i].checked == true){
				flag = true;
				str += document.myform.bookstore[i].value+" ";
			}
		}
		str += "\n";
		
		if(flag == false){
			alert("서점 최소 하나는 선택하세요");
			return false;
		}
		
		/* if(document.myform.count.value=="선택"){
			alert("보유 수량을 선택하세요");
			return false;
		} */
		
		index = document.myform.count.selectedIndex;
		if(index == 0){
			alert("보유 수량을 선택하세요");
			return false;
		}
		str += document.myform.count.value;
		
		alert(str);
		
	}
