	function inputCheck(){
		//alert(2);
		str = "입력한 항목은\n";
		
		if($('input[name=title]').val()==""){
			alert("jquery 제목 누락");
			$('input[name=title]').focus();
			return false;
		}
		
		
		if($('input[name=author]').val()==""){
			alert("author 누락");
			$('input[name=author]').focus();
			return false;
		}
		
		if($('input[name=publisher]').val()==""){
			alert("publisher 누락");
			$('input[name=publisher]').focus();
			return false;
		}
		
		if($('input[name=price]').val()==""){
			alert("price 누락");
			$('input[name=price]').focus();
			return false;
		}
		
		if( isNaN($('input[name=price]').val()) == true){
			alert("가격은 숫자로 입력하세요");
			$('input[name=price]').select();
			return false;
		}
		
		if($('input[name=date]').val()==""){
			alert("date 누락");
			return false;
		}
		
		str += $('input[name=title]').val()+"\n";
		str += $('input[name=author]').val()+"\n";
		str += $('input[name=publisher]').val()+"\n";
		str += $('input[name=price]').val()+"\n";
		str += $('input[name=date]').val()+"\n";
		
		
		if(!$('input[name=kind]').is(":checked")){
			alert("배송비 체크 누락");
			return false;
		}
		
		str += $('input[name=kind]:checked').val()+"\n";
		
		if($('input[name=bookstore]:checked').length==0){
			alert("서점 최소 하나 선택하세요");
			return false;
		}
		
		$('input[name=bookstore]:checked').each(function(){
			str += $(this).val() +" ";
		});
		str += "\n";
		
		
		if($('select[name=count] option:selected').val() == "선택"){
			alert("보유수량을 선택하세요");
			return false;
		}
		
		count = $('select[name=count] option:selected').val();
		str += count +"\n";
		
		alert(str);
		
	}