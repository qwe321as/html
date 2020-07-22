function inputCheck() {
		
		str = "입력한 항목은 \n";
		
		if (document.myform.title.value.length == 0) {
			alert('제목을 입력하세요');
			return false;
		}
		if (myform.author.value.length == 0) {
			alert('저자을 입력하세요');
			return false;
		}
		if (myform.publisher.value.length == 0) {
			alert('출판사를 입력하세요');
			return false;
		}
		if (isNaN(myform.price.value) || myform.price.value.length == 0) {
			alert('가격을 숫자로 입력하세요');
			//myform.price.value="";
			myform.price.select(); //블록잡아줌
			return false;
		}
		if (myform.date.value.length == 0) {
			alert('입고일을 입력하세요');
			return false;
		}
		
		str += myform.title.value+"\n";
		str += myform.author.value+"\n";
		str += myform.publisher.value+"\n";
		str += myform.price.value+"\n";
		str += myform.date.value+"\n";
		
		
		len = myform.kind.value.length;
		flag = false;
		for (var i = 0; i < len; i++) {
			if (myform.kind[i].checked == true) {
			str += myform.kink[i].value+"\n";
			flag = true;
			}
		}
		
		if(flag==false){
			alert("배송비 유무를 선택하세요");
			return false;
		}
		
		len = myform.bookstore.value.length;
		for (var i = 0; i < len; i++) {
			if(myform.bookstore[i].checked == true){
				str += myform.bookstore[i].value +" ";
				flag =true;
			}
		}
		str+="\n";
		if(flag==false){
			alert("서점 최소 하나는 선택하세요");
			return false;
		}

			if (myform.count.value=="선택") {
				  alert ("보유수량을 선택하세요");
				  return false;
			}
			str+=myform.count.value;
			alert(str);

	}