<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">

img{
align-content: center;
height: 300px;
width: 1000px;

}

body{
text-align: center;
font-size: 10px;
}
.btn {
	display: inline-block;
	margin: 8px;
	border: 1px solid transparent;
	font-size: 20px;
	border-radius: 10px
}
</style>
<script type="text/javascript">
function login() {
	   location.href = "login.jsp";
}
function makeuser() {
	   location.href = "makeuser.jsp";
}

</script>

</head>
<body>
<img alt="main" src="img/mainimg.png"  ><br>
<input type="button" style="width: 500px; height: 50px " class="btn" value="로그인" onclick="login()"><br>
<input type="button" style="width: 500px; height: 50px" class="btn" value="회원가입" onclick="makeuser()"><br>
<br>
<a href="findlog.jsp">아이디/비밀번호찾기</a>

</body>
</html>