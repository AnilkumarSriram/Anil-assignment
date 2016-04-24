    
function kk(){
	UserName = "Welcome"+" "+document.getElementById('User').value;
	
    alert(UserName);
	
    }
	function MM(){
	Search = "Do you want to search for "+ " " + document.getElementById("sbox").value;
	
    alert(Search);
	
    }
	var i = 0;
var picture = new Array();
 
picture[0] = "image1.jpg";
picture[1] = "image2.jpg";
picture[2] = "image3.jpg";

function swapImage()
{
   document.slide.src = picture[i];
   if(i < picture.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;