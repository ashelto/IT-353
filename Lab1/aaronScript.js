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

function totalTester()
{
	var numberTests = prompt("enter number of test scores");
	
	var num1 = parseInt(numberTests);
	
	var scores = new Array(num1);
	
	for (i=0, x=1; i < scores.length; i++, x++)
	{
		var num2 = prompt ("enter test score number " + x + ":");
		
		scores[i] = num2int;
	}
	
}

function displayName()
{
	var names = ["Taylor, Ross" , "Shelton, Aaron", "Dinardi, Connor", "Kociss, Jordan", "Petersen, Matt" , "Boma, Aaron", "Mccormick, Adam", "Eppel Max", "Panno, Mark", "Parrish, Aaron"];
	var num1 = names.length;
	var x = Math.floor((Math.random() * num1) + 0);
	var name = names[x];
}

function openWindow()
{
	window.open("/Lab1/displaypage.htm");
}

function myMove() {
	
	var names = ["Taylor, Ross" , "Shelton, Aaron", "Dinardi, Connor", "Kociss, Jordan", "Petersen, Matt" , "Boma, Aaron", "Mccormick, Adam", "Eppel Max", "Panno, Mark", "Parrish, Aaron"];
	var num1 = names.length;
	var x = Math.floor((Math.random() * num1) + 0);
	var name = names[x];
	document.getElementById("demo").innerHTML = name;
	return name;
}
