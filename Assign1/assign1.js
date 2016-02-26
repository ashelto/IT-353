function displayName()
{
	alert("test");
}

function getName()
{
	alert("Hello! I am an alert box!");
	
	var firstName = prompt("Please enter your first name");
	
	var lastName = prompt ("please enter your last name");
	
	alert ("Hello " + lastName + ", " + firstName + "! Welcome to ITK 353!");

}

function getScores()
{
	alert("test");
	var numberTests = prompt("enter number of test scores");
	
	var num1 = parseInt(numberTests);
	
	var scores = new Array(num1);
	
	for (i=0, x=1; i < scores.length; i++, x++)
	{
		var num2 = prompt ("enter test score number " + x + ":");
		var num2int = parseInt(num2);
		scores[i] = num2int;
	}
	
	
	var total = 0;
	
	for (i=0; i < scores.length; i++)
	{
		total += scores[i];
	}
	
	var average = total/num1;
	
	high = scores[0];
	
	for(i =1; i < scores.length; i++)
	{
		if(high < scores[i])
		{
			high = scores[i];
		}
	}
	
	
	low = scores[0];
	
	for(i =1; i < scores.length; i++)
	{
		if(low > scores[i])
		{
			low = scores[i];
		}
	}
	
	var y = "";
	
	for(i=0, z =0; i < scores.length; i++)
	{
		if (scores[i] > average)
		{
			if (z >0)
			{
				var scoreString = scores[i].toString();
				y += ", " + scoreString;
				
			}
			else
			{
				var scoreString = scores[i].toString();
				y += scoreString;
				z++;
			}
		}
	}
	alert("Aaron Q3 Output \nLowest Score: " + low + "\nHighest Score: " + high + "\nAverage Score: " + average + "\nScores Above Average:\n" + y);
}

function getPay()
{
	var name = prompt ("Please enter your name");
	var ssn = prompt("Please enter your social security number");
	var rate = 10;
	var hours = 50;
	var overtimeHours = 0;
	var hours = prompt ("Please enter hours worked", hours);
	var rate = prompt ("Please enter your pay rate", rate);
	var hoursInt = parseInt(hours);
	var rateInt = parseInt(rate);
	
	var overtimeRate = (rateInt * .5) + rateInt;
	
	if (hours > 40)
	{
		overtimeHours = hours-40;
		hoursInt = 40;
	}
	var subtotal = (hoursInt * rateInt);
	var overtimeTotal = (overtimeHours * overtimeRate);
	total = subtotal + overtimeTotal;
	alert(" Name: " + name + "\nSocial Security Number: " + ssn + "\nStandard Hours: " + hours + "\nStandard Rate: " + rate + "\nOvertime Hours: " +
	overtimeHours + "\nOvertime Rate: " + overtimeRate + "\nPaycheck Total: " + total);
}

function isValid(form)
{
	var email = form.email.value;
	var zip = form.zip.value;
	var name = form.name.value;
	var gender = form.gender.value;
	var age = form.age_range.value;
	var values = ["","","","",""];
	var count = 0;
	var valid = true;
	
	if(document.getElementById('gender_Male').checked) 
	{
		gender = "male";
	}
	else if(document.getElementById('gender_Female').checked) 
	{
		gender = "female";
	}
	else
	{
		values[count] = "gender";
		count ++;
	}
	
	var ageValid = "";
	if(age == "Below 18" || age == "18-39" || age == "40 or above" || age =="")
	{
		ageValid = "valid";
	}
	

	if(ageValid !="valid")
	{
		alert("ERROR: The value for age Range is not valid. Please select an option from the drop down menus");
		valid = false;
	}

	if(age == "")
	{
		values[count] = "age";
		count++;
	}
	
	if(zip == "")
	{
		values[count] = "zip";
		count++;
	}
	
	if(email == "")
	{
		values[count] = "email";
		count++;
	}
	
	if(name == "")
	{
		values[count] = "name";
		count++;
	}
	
	var display = "Please complete the following fields:" + "\n";
	
	for(i=0;i<count;i++)
	{
		if(values[i] != "")
		{
			display += values[i] + "\n";
		}
	}
	
	if(values[0] != "")
	{
		alert ("ERROR: " + display);
		valid = false;
	}
	
	var atSign = email.indexOf("@");
		
	if(valid == true)
	{
		if (email.charAt(atSign + 1) == "." || (email.charAt(atSign-1)) == ".")
		{
			alert("ERROR: There is a period next to the @ sign");
			valid = false;
		}
	}
		
	var emailSub1 = email.substr(0,atSign);
	var emailSub2 = email.substr(atSign + 1,email.length);
	
	var periodMatches = email.split(".").length - 1;
	
	if(valid == true)
	{
		if(email.charAt(0) == "@" || email.charAt(email.length-1) == "@")
		{
			alert("ERROR: There is an @ sign at the beginning or end of the email address");
			valid = false;
		}	
	}
		
	if(valid == true)
	{
		if(email.charAt(0) == "." || email.charAt(email.length-1) == ".")
		{
			alert("ERROR: There is a period at the beginning or end of the email address");
			valid = false;
		}
	}
		
	if(valid==true)
	{
		for(i=0, x=0; i < email.length; i++)
		{
			if (email.charAt(i) == "@")
			{
				x++;
			}
		}
		if(x > 1)
		{
			alert("ERROR: There is more than one @ sign in the email address");
			valid = false; 
		}
	}
		
	if(valid==true)
	{
		for(i=0, x=0; i < email.length; i++)
		{
			if (emailSub2.charAt(i) == ".")
			{
				x++;
			}
		}
		if(x > 1)
		{
			alert("ERROR: There is more than 1 period after the @ sign");
			valid = false; 
		}
	}

	if (valid==true)
	{
		if (zip.length != 5 && zip.length != 10)
		{
			alert("ERROR zip code needs to be in one of the following formats where X is a number \nXXXXX or XXXXX-XXXX");
			valid = false;
		}
	}
		
	if (valid ==true && zip.length ==10)
	{
		if(zip.chatAt(5) != "-")
		{
			alert("ERROR zip code needs to be in one of the following formats where X is a number \nXXXXX or XXXXX-XXXX");
			valid = false;
		}
	}
		
	var numeric = isNaN(zip);
		
	if (valid == true)
	{
		if(zip.length == 5 && numeric == true)
		{
			alert("ERROR zip code needs to be in one of the following formats where X is a number \nXXXXX or XXXXX-XXXX");
			valid = false;
		}
	}
		
	if(valid == true)
	{
		return (true);
	}
	else
	{
		return (false);
	}
}

function draw(myCanvas,form)
{
	var name = form.name.value;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "20px Georgia";
	ctx.fillText("Sweet Drawing!", 70, 50);
	var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
	gradient.addColorStop("0", "black");
	gradient.addColorStop("0.5", "red");
	gradient.addColorStop("1.0", "black");
	ctx.fillStyle = gradient;
	ctx.fillText(name, 70, 70);

}
function rotateClock(myCanvas)
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.rotate(10 * Math.PI / 180);
}

function rotateCounter(myCanvas)
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.rotate(-10 * Math.PI / 180);
}

function aaron(myCanvas)
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(70, 0, c.height, 500);
}
