var guestlist=[];
function submit(){
	var guestname=document.getElementById("name1").value;
	guestlist.push(guestname);
	document.getElementById("display_name").innerHTML=guestlist.toString();
}
function show(){
	var names=guestlist.join("<br>");
	document.getElementById("p1").innerHTML=names.toString();

}
function sorting(){
	guestlist.sort();
	var names=guestlist.join("<br>");
	document.getElementById("p1").innerHTML=names.toString();

}
function searching(){
	var s=document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0;j<guestlist.length;j++){
		if(s==guestlist[j]){found=found+1;}
		
	}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
}