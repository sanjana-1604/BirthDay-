function changeBackgroundColor(image, image_src,color)
{
	if(image === 'no')
	{	
		document.body.style.background = "red";
	}
	else
	{
		document.body.style.backgroundImage = "url('Img/bg.png')";
	}
}
var imageCount = 01;
total = 20;

function slide(x)
{

var image = document.getElementsByClassName('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 01;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Img/big_pics"+ imageCount +".jpg";

}

