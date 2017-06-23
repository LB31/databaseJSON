window.onload=function(){
var content;



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        chronik = JSON.parse(this.responseText);
		chronik.forEach(function(chronikData){
		console.log(chronikData.Bild);
		var medium;
		if(chronikData.Ordner.includes("videos")){
			medium =  "<video width='640' height='352' controls><source src='videos/" 
			+ chronikData.Bild + "' type='video/mp4'></video><br />"; 
		} else{
			medium = "<img src='" + chronikData.Ordner + "/" + chronikData.Bild + "'><br />";
		}
		
		content = document.getElementById( 'content' );
		content.insertAdjacentHTML( 'beforeend', 
		"<h3>" + chronikData.Datum + "</h3>" +
		medium +
		"<b class='myFont'>" + chronikData.Kommentar + "</b><br /><br />" +
		"<img src='bilder/pfeilUnten.png'><br />" 
		);
		
		
});
	content.insertAdjacentHTML( 'beforeend', 
	"More to come"
	);
    }
};
xmlhttp.open("GET", "datenbank/chronik.json", true);
xmlhttp.send(); 




}