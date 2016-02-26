package lab2;
//
//
//		Name: Aaron Shelton
//		Assignment: Lab2
//		ULID: ashelto
//		class: IT 353
//		Instructor: Lim
//
public class CheckValidator 
{
	public static boolean isCounterfeit(String check)
	{
		boolean counterfit = false;
		for(int i=0; i < check.length(); i++)
		{
			String temp = check.substring(i,i+1);
			if(temp.equals("0") || temp.equals("1") || temp.equals("2") || temp.equals("3") || temp.equals("4")||  
					temp.equals("5") || temp.equals("6") || temp.equals("7") || temp.equals("8") || temp.equals("8"))
			{
				counterfit = false;
			}
			else
			{
				counterfit = true;
				return counterfit;
			}	
		}
		if (check.length() != 10)
		{
			counterfit = true;
			return counterfit;
		}
		else
		{
			for(int i=0, x=0, y=0; i < check.length(); i++)
			{
				String temp = check.substring(i, i+1);
				System.out.println(temp); 
				if(temp.equals("0"))
				{
					x++;
					y=0;
					if(x==3)
					{
						counterfit = true;
						return counterfit;
					}
				}
				else
				{
					x=0;
					y++;
					if(y==4)
					{
						counterfit = true;
						return counterfit;
					}
				}
			}	
		}
		
		return counterfit;
	}
}
