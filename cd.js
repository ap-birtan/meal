function isleap(year) {
	if(year%400==0)
	{
       return true;
	}
	else if(year%4==0&&year%100!=0)
	{
       return true;
	}
	else
		return false;
}

let cal=document.getElementById("cal");
const days=[31,29,31,30,31,30,31,31,30,31,30,31];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let mon=new Date().getMonth();
document.getElementById("month").innerHTML=months[mon];
for(let i=1;i<=days[mon];i++)
{

	cal.innerHTML+='<button class="date" onclick="tog(bm'+i+')" id="bm'+i+'">'+i+'<br>সকাল</button>';
	cal.innerHTML+='<button class="date" onclick="tog(bn'+i+')" id="bn'+i+'">'+i+'<br>দুপুর</button>';
	cal.innerHTML+='<button class="date" onclick="tog(bt'+i+')" id="bt'+i+'">'+i+'<br>রাত</button>';


	if(i%4==0)
	{
	   cal.innerHTML+="<br>";	
	}
}
const td=new Date().getDate();
function tog(bid) {


if(parseInt(bid.id.slice(2))>td)
{
if(bid.style.background=="green"||bid.style.background=="")
	bid.style.background="red";
else
	bid.style.background="green";

	
}


}