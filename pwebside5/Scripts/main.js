var myImage=document.querySelector("img");
myImage.onclick=function(){
    var mySrc=myImage.getAttribute("src");
    if(mySrc==="Images/pic1.PNG")
        myImage.setAttribute('src',"Images/eye.PNG");
    
    else if(mySrc==="Images/eye.PNG")
        myImage.setAttribute('src',"Images/pic3.jpg");
    

    else if(mySrc==="Images/pic3.jpg")
        myImage.setAttribute('src',"Images/pic5.jpg");
    
    else
    myImage.setAttribute('src',"Images/pic1.PNG");
}