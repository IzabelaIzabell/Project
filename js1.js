
function createEvent (obj,eventName,functiontoInvoke)

{ 
    if(document.addEventListener)
    obj.addEventListener(eventName,functiontoInvoke);
else
    obj.addEvent("on"+eventName,functiontoInvoke);
}

function removeEvent (obj,eventName,functiontoInvoke)

{
    
    if(document.removeEventListener)
    obj.removeEventListener(eventName,functiontoInvoke);
else
   obj.detachEvent("on"+eventName, functiontoInvoke); 
}

function zmienOpacity(){

        this.className = "zmienOpacity";
    }

function zmniejszOpacity(){
    this.removeAttribute("class");
}


window.onload=function(){
var opacity_change = document.getElementById("opacity_change");
var opacity_change1 = document.getElementById("opacity_change1");
var opacity_change2 = document.getElementById("opacity_change2");
var opacity_change3 = document.getElementById("opacity_change3");
var opacity_change4 = document.getElementById("opacity_change4");
var opacity_change5 = document.getElementById("opacity_change5");
var opacity_change6 = document.getElementById("opacity_change6");
var opacity_change7 = document.getElementById("opacity_change7");




createEvent(opacity_change,"mouseover", zmienOpacity);
createEvent(opacity_change,"mouseout", zmniejszOpacity);
createEvent(opacity_change1,"mouseover", zmienOpacity);
createEvent(opacity_change1,"mouseout", zmniejszOpacity);
createEvent(opacity_change2,"mouseover", zmienOpacity);
createEvent(opacity_change2,"mouseout", zmniejszOpacity);
createEvent(opacity_change3,"mouseover", zmienOpacity);
createEvent(opacity_change3,"mouseout", zmniejszOpacity);
createEvent(opacity_change4,"mouseover", zmienOpacity);
createEvent(opacity_change4,"mouseout", zmniejszOpacity);
createEvent(opacity_change5,"mouseover", zmienOpacity);
createEvent(opacity_change5,"mouseout", zmniejszOpacity);
createEvent(opacity_change6,"mouseover", zmienOpacity);
createEvent(opacity_change6,"mouseout", zmniejszOpacity);
createEvent(opacity_change7,"mouseover", zmienOpacity);
createEvent(opacity_change7,"mouseout", zmniejszOpacity);
};