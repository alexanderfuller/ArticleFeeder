//activate selected class in header navbar navigation
function toggleClass(el){
var kids = document.getElementById('navbar').children;
for(var i =0; i < kids.length; i++){
  kids[i].className="li";
}
el.className="active";
};

//set 'All' navbar link to active if logo is clicked
function toggleClass2(){
var kids = document.getElementById('navbar').children;
for(var i =0; i < kids.length; i++){
  if(kids[i].className=="active")
  {
      kids[i].className="li";
      kids[0].className="active";
  }
}
};
//deselect any selected class in header navbar
function removeActive(){
  var kids = document.getElementById('navbar').children;
  for(var i = 0; i < kids.length; i++){
    if(kids[i].className=="active")
    {
        kids[i].className="li";
    }
  }
};
