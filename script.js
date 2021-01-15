window.onload=function(){fetch('https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/pz').then((response) => {return response.json();}).then((ar) => {
{for (i of ar) {$("<div id='"+i['id']+"'> </div>").appendTo( "#root" ).attr("style","top:"+i['t']+"%;width:"+i['w']+"%;height:"+i['h']+"%;position:absolute;left:"+i['l']+"%;background: url("+i['u']+") no-repeat;animation: "+i['a']+" "+i['s']+"s ease-in-out infinite "+i['r']+";");}}})};

[
{"id":"f1","a":"aii","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/f2.svg","l":"42","t":"25","r":"","w":"60","h":"60"},
{"id":"f","a":"af","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/f.svg","l":"0","t":"80","r":"","w":"100","h":"30"},
{"id":"b1","a":"aiii","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/b1.svg","l":"42","t":"35","r":"","w":"100","h":"50"},
{"id":"b2","a":"ab","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/b2.svg","l":"42","t":"35","r":"","w":"100","h":"50"},
{"id":"a","a":"aa","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/a.png","l":-1,"t":"1","r":"","w":"100","h":"100"},
{"id":"a2","a":"ai","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/a2.svg","l":"46","t":"81","reverse":"r","w":"50","h":"30"},
{"id":"a1","a":"ai","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/a1.svg","l":"0","t":"7","r":"","w":"100","h":"100"},
{"id":"c1","a":"ad","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/c1.svg","l":"0","t":"32","r":"reverse","w":"60","h":"50"},
{"id":"c2","a":"ada","s":"15","u":"https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/c2.svg","l":"0","t":"52","r":"reverse","w":"60","h":"60"}
]
// 	for (i of arr) 
// {$("<div id='"+i['id']+"'> </div>").appendTo( "#root" ).attr("style","top:"+i['t']+"%;width:"+i['w']+"%;height:"+i['h']+"%;position:absolute;left:"+i['l']+"%;background: url("+i['u']+") no-repeat;animation: "+i['a']+" "+i['s']+"s ease-in-out infinite "+i['r']+";");
// };
// window.onload=function(){
// fetch('https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/pz').then((response) => {return response.json();}).then((ar) => {
// {for (i of ar) 
// 	{
// 		}}})}



https://raw.githubusercontent.com/DeathBarmaglot/perevez/main/a1.svg
document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translate3D(0, 0, 0)' },
  { transform: 'translate3D(0, -300px, 0)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
})