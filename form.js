let a=document.getElementById("paraElement");
let academicYear=document.getElementById("academicYear");
let sscExamNumber=document.getElementById("sscExamNumber");
let yearOfPass=document.getElementById("yearOfPass");
let dateOfBirth=document.getElementById("dateOfBirth");
let validatingAY=null;
let validatingSscNo=null;
let validatingYofP=null;
let validatingdDoB=null;
let searchButton=document.getElementById("search");
function submitApplication()
{
    if(academicYear!=="")
    {
        validatingAY=true;
    }
    else
    {
        alert("Enter valid Academic Year");
        validatingAY=false;
    }
    if( sscExamNumber.value!=="" && isNaN(sscExamNumber.value)==false)
        {
            validatingSscNo=true;
        }
    else
        {
            alert("Enter valid SSC Exam Number");
            validatingSscNo=false;
        }
    if(yearOfPass.value!=="" && isNaN(yearOfPass.value)==false && getlength(yearOfPass.value)==4)
        {
            validatingYofP=true;
        }        
    else
        { 
            alert("Enter valid details for year of pass");
            validatingYofP=false;
        }
    if(dateOfBirth.value!=="")
    {
        validatingdDoB=true;
    }
    else
    {
        alert("Enter valid details for Date of Birth");
        validatingdDoB=false;
    }
    if(validatingAY==true && validatingSscNo==true && validatingYofP==true && validatingdDoB==true)
        {
            searchButton.disabled=true;
            searchButton.style.opacity=0.25;
            setTimeout(function(){
                
                searchButton.disabled=false;
                searchButton.style.opacity=1;
                a.innerHTML="Your Application Number is '202210003274', Please remember it for further reference !";
                a.classList.add("submission");
            },5000);  
        }
    else
        {
            alert("There was some error occured, Please enter the correct deatils");
        }
};

function getlength(number) 
  {
    return number.toString().length;
  };