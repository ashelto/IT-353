/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import model.ProfileBean;

/**
 *
 * @author it3530218
 */
@ManagedBean
@SessionScoped
public class ProfileController 
{

    // This is the model that captures the user profile info
    private ProfileBean theModel;
    
    // This corresponds to the response to be sent back to the client
    private String response;
    
    /**
     * Creates a new instance of ProfileController
     */
    public ProfileController() 
    {
         theModel = new ProfileBean();
    }

    /**
     * @return the theModel
     */
    public ProfileBean getTheModel() {
        return theModel;
    }

    /**
     * @param theModel the theModel to set
     */
    public void setTheModel(ProfileBean theModel) {
        this.theModel = theModel;
    }

    /**
     * @return the response
     */
    public String getResponse() 
    {
        String resultStr = "";
        resultStr += "Hello " + theModel.getClientName() + "<br/>";
        resultStr += "I see that you are a " + theModel.getGender()+" "+theModel.getPosition() + "<br/>";
        String temp = "";
        
        for (int i = 0; i < theModel.getIndustries().length; i++) 
        {
             temp += theModel.getIndustries()[i] + "; ";
        }
        resultStr += "We have expertise in the industries you are in, namely " + temp + "<br/>";
        if(resultStr.indexOf("Financial") > 0)
        {
            resultStr += "We have espeically worked with many clients in the Financial Industry<br/> ";
        }
        temp = "";
        
        
        int x=0;
        for (int i = 0; i < theModel.getInterests().length; i++) 
        {
            String newTemp = theModel.getInterests()[i];
            temp += theModel.getInterests()[i] + "; ";
            if(newTemp.equals("Travel") ||newTemp.equals("Reading") ||newTemp.equals("Programming"))
            {
                x++;
            }
        }
        
        if(x>0)
        {
            resultStr += "We also note your interests of " + temp + "<br/><br/>";
        }
        resultStr += "Our people will contact your people ASAP. Thanks for contacting us! <br/><br/>";
        
        if (theModel.getComment().equals(""))
        {
            resultStr += "You have no comments";
        }
        else
        {
            resultStr += "Comments: <br/><br/>" + theModel.getComment();
        }
        
        response = resultStr;
        return response;
    }

    /**
     * @param response the response to set
     */
    public void setResponse(String response) {
        this.response = response;
    }
    
    
}
