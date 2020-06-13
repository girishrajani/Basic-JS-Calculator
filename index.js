<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript">
			function perform(id){
				alert("task performed");
				var number1=  parseInt(document.getElementById("number1").value);
				var number2=  parseInt(document.getElementById("number2").value);
				var ans;
				
				if (id=='add') {
					ans= number1+number2
					document.getElementById("ans").innerHTML = "Answer: "+ans
				}else if (id=='sub') {
					ans= number1-number2
					document.getElementById("ans").innerHTML = "Answer: "+ans
				}else if (id=='div') {
					ans= number1/number2
					document.getElementById("ans").innerHTML = "Answer: "+ans
				}else if (id=='mod') {
					ans= number1%number2
					document.getElementById("ans").innerHTML = "Answer: "+ans
				}else if (id=='mul') {
					ans= number1*number2
					document.getElementById("ans").innerHTML = "Answer: "+ans
				}else{
					document.getElementById("ans").innerHTML = "ERROR"
				}
			}
		</script>
		<title>
			Basic JavaScript Calculator
		</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"crossorigin="anonymous">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	</head>
	<body class="text-center" style="background-color:tomato;">
		<h1> My BASIC JS Calculator </h1>
		<br> <br> <br>
		<h2> Enter First Number </h2> 
		<input type="text" id="number1">
		<h2> Enter Second Number </h2>
		<input type="text" id="number2">
		<br><br><br>
		<h3>Choose the operation which is to be performed </h3> <br>
		<a class="btn btn-success" id='add' onclick="perform(this.id)" >Addition</a>
		<a class="btn btn-primary" id='sub' onclick="perform(this.id)" >Subraction</a>
		<a class="btn btn-danger" id='mul' onclick="perform(this.id)" >Multiplication</a>
		<a class="btn btn-light" id='div' onclick="perform(this.id)">Division</a>
		<a class="btn btn-info" id='mod' onclick="perform(this.id)">Modulo</a>
		<h3 id= "ans">  </h3>
		<br><br><br>
		<h4>
			Project By Girish Rajani
		</h4>
	</body>
</html>
