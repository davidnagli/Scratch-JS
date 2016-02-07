// New Functions to add:
/**
 * To DO:
    * Add direction property to protoype
    * Add new methods to the prototype
 * New methods to add:
    * pointInDirection()
    * turn(turnAmount)
    * move(moveAmount)
    * changeXBy()
    * changeYBy()
    * setXTo()
    * setYTo()
 */


var sprites = new Object();
var spritesArray = new Array();

//sprite object constructor
function Sprite(x, y, value){
    this.x = x;
    this.y = y;
    
    
    this.updateLocation = function(){
        this.element.style.left = (originOffsetX + this.x)+"px";
        this.element.style.top = (originOffsetY + this.y)+"px";
    }
    
    //hack of a hack of a solution, but still works. Regex checks if value is an html tag
    var valueIsHtmlTag = (/<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i.test(value))
    
    
    if(valueIsHtmlTag){
        //if value is an html tag name
        this.isCustom = false;
        var containingDiv = document.createElement("div");
        containingDiv.innerHTML = value;
        this.element = containingDiv.firstChild;
        this.updateLocation();
        document.body.appendChild(containingDiv);
    }else if(value === undefined){
        console.error("Please enter a value for the new sprite(3rd argument)")
    }else{
        //value is not html or error so custom sprite, use value as img src
        this.isCustom = true;
        this.element = document.createElement("img")
        this.element.src = value;
        this.updateLocation();
        document.body.appendChild(this.element);
    }
    
    this.goTo = function(x,y){
        var animationTime = arguments[2];
        if(animationTime){
            //Glide function: Animates the sprites movment -- Algorithm not yet complete
            console.error("Scratch-JS: Animation is not yet supported");            
        }else{
            this.x = x;
            this.y = y;
            this.updateLocation();
        }
    }
    
    
}


function calculateDistance(x1,y1,x2, y2){
    //simple pythagorean theorm to find distance between points
    return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)))
}

var whenPageLoads = function(){}

var originOffsetX;
var originOffsetY;
var maxX;
var maxY;
window.onload = function(){
    originOffsetX = window.innerWidth / 2;
    originOffsetY = window.innerHeight / 2;
    maxX = originOffsetX;
    maxY = originOffsetY;
    whenPageLoads();
}

window.onresize = function(){
    originOffsetX = window.innerWidth / 2;
    originOffsetY = window.innerHeight / 2;
    maxX = originOffsetX;
    maxY = originOffsetY;
    for(var sprite in sprites){
        sprites[sprite].updateLocation();
    }
}

