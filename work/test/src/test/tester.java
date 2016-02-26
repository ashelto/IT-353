package test;

public class tester 
{
	public static boolean isValid (String email)
	{
		int x =0;
		int y =0;
		int index = email.indexOf("@");
		int after = index+1;
		String locaiton = "";
		
		for(int i= index-1; i < email.length(); i++)
		{
			String temp = email.substring(i,i+1);
			if(temp.equals("."))
			{
				y++;
			}
		}
		
		for(int i=0; i < email.length(); i++)
		{
			String temp = email.substring(i,i+1);
			if(temp.equals("@"))
			{
				x++;
			}
		}
	
		if(email.substring(0,1).equals("@") || email.substring(0,1).equals("."))
		{
		
			System.out.println("invalid: there is a period or @ sign at the beginning of the email address");
			return false;
		}
		else if (email.substring(email.length() -1).equals("@") || email.substring(email.length() -1).equals("."))
		{
			System.out.println("invalid: there is a period or @ sign at the end of the email address");
			return false;
		}
		else if (x > 1)
		{
			System.out.println("invalid:  there is more than one @ sign");
			return false; 
		}
		else if (y < 1)
		{
			System.out.println("invalid:  there must be at least one period after the @ sign");
			return false;
		}
		else if (after > email.length())
		{
			String str = email.substring(after,after +1);
			if(str.equals("."))
			{
				System.out.println("invalid:  there cannot be a period directly after the @ sign");
				return false;
			}
		}
		else
		{
			System.out.println("email is valid");
			return true;
		}
		System.out.println("email is valid");
		return true;
	
	}
	
	public static void aTest (String email)
	{
		
		int index = email.indexOf("@");
		int after = index+1;
		if (after > email.length())
		{
			String str = email.substring(after,after +1);
			if(str.equals("."))
			{
				System.out.println("error there is a . after the @ sign");
			}
		}
		else
		{
			System.out.println("error");
		}
		
		
		
	}
}
