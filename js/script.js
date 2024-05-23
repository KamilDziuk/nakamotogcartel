class Clock {
  constructor() {
    this._clockOnTheTaskbar = document.querySelector('.clockOnTheTaskbar');
    this._data = new Date();
    this._hours = this._data.getHours();
    this._suffix = '';
    this._intervalId = null; 
  }
 get clockOnTheTaskbar()
 {
return this._clockOnTheTaskbar;
 }

 get data()
 {
  return this._data
 }


 get hours ()
 {
  return this._hours;
 }


 get suffix ()
 {
  return this._suffix;
 }


 get intervalId()
 {
  return  this._intervalId;
 }

  set clockOnTheTaskbar(value)
 {
  this._clockOnTheTaskbar = value;
 }

 set data(value)
 {
  this._data = value;
 }


 set hours(value)
 {
  this._hours = value;
 }


 set suffix(value)
 {
  this._hours = value;
 }



 set intervalId(value)
 {
  this._intervalId = value;

 }


//  refresh method  clock start
 clockMethod()
 {

  this._intervalId = setInterval(() =>{

    this._data = new Date();
    this._hours = this._data.getHours();


if( this._hours < 12)
  {
    this._suffix  = "AM";
  }
  else
  {
    this._suffix  = "PM";
  }

  const options = { timeZone: 'America/New_York' };
  this._clockOnTheTaskbar.innerHTML = `${this._data.toLocaleTimeString('en-US',options)} `


  },1000)
}
}


let clockContent = new Clock();
clockContent.clockMethod();
//  refresh method  clock end

// system window method start

 class SystemWindoMenu
 {
constructor()
{
 this._systemWindow = document.querySelector('.systemWindow');
  this._menubutton = document.querySelector('.menubutton');
  this._clickOn = false;
}

get clickOn ()
{
  return this._clickOn; 
}

get systemWindo()
{
  return this._systemWindow; 
}

get menubutton()
{
  return this._menubutton; 
}

set systemWindo(value)
{
   this._systemWindow = value; 
}

set menubutton(value)
{
   this._menubutton = value; 
}

set clickOn(value)
{
  this._clickOn = value; 
}

clickMenubutton()
{
  this._systemWindow.style.display = 'none'
  this._menubutton.addEventListener('click', () =>
  {
    this._clickOn =  !this._clickOn;
    if( this._clickOn == true)
      {
        this._systemWindow.style.display = 'block'
      }
      else
      {
        this._systemWindow.style.display = 'none'
      }
   
  })
}


 };
let resultsClickMenubutton = new SystemWindoMenu();

resultsClickMenubutton.clickMenubutton();




// system window method end











// system  window  icone  Hood  start

class SystemWindoMenuIconeHood
{
constructor()
{
  
  this._iconHoodButtonX = document.querySelector('.iconHoodButtonX');
this._systemWindowIconHood = document.querySelector('.systemWindowIconHood');
 this._hood = document.querySelector('.hood');
 this._textIconHoodSystemWindow = document.querySelector('.textIconHoodSystemWindow');
 this._clickOnIcone = false;
 this._buttonHood = document.getElementById('buttonHood');
 this._buttonHood2 = document.getElementById('buttonHood2');
 this._hoodText = document.querySelector('.hoodText');
 
 
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
}

get hoodText ()
{
 return this._hoodText;
}
get buttonHood ()
{
 return  this._buttonHood; 
}
get buttonHood2 ()
{
 return  this._buttonHood2; 
}

get textIconHoodSystemWindow ()
{
 return this._textIconHoodSystemWindow; 
}

get iconHoodButtonX ()
{
 return this._clickOnIcone; 
}


get systemWindo()
{
 return this._systemWindowIconHood; 
}

get hood()
{
 return this._hood; 
}

set systemWindo(value)
{
  this._systemWindowIconHood = value; 
}

set hood(value)
{
  this._hood = value; 
}

set clickOnIcone(value)
{
 this._clickOnIcone = value; 
}

set buttonHood (value)
{
   this._buttonHood = value; 
}

set buttonHood2 (value)
{
   this._buttonHood2 = value; 
}

set hoodText (value)
{
  this._hoodText = value;
}


set iconHoodButtonX (value)
{
  this._clickOnIcone = value; 
}

set textIconHoodSystemWindow (value)
{
  this._textIconHoodSystemWindow = value; 
}



clickHood()
{

  this._buttonHood.addEventListener('click', () =>
{

   window.open("https://www.tropee.com/nakamotoogscartel","","width=750,height=550,left=350,top=100");
   this._systemWindowIconHood.style.display = 'none';


  })

  this._buttonHood2.addEventListener('click', () =>
    {

       window.open("https://www.tropee.com/nakamotoogscartel", "", "width=10,height=10,left=,top=100");
       this._systemWindowIconHood.style.display = 'none';
    
    
      })
    

 this._systemWindowIconHood.style.display = 'none'
 this._hood.addEventListener('click', () =>
 {
 
       this._systemWindowIconHood.style.display = 'block'
     
   
 })


 this._textIconHoodSystemWindow.addEventListener('click', () =>
  {
  
        this._systemWindowIconHood.style.display = 'block'
      
    
  })

}



clickHoodClose()
{



this._clickOnIcone =  !this._clickOnIcone;

this._iconHoodButtonX.addEventListener('click', () =>{
if( this._clickOnIcone == true)

  {
    this._systemWindowIconHood.style.display = 'none'
  }
})
}



};
let resultsClickhood = new SystemWindoMenuIconeHood();

resultsClickhood.clickHood();
resultsClickhood.clickHoodClose();



// system  window  icone  Hood end


// system  window  icone  Vision  start

class SystemWindoMenuIconeVision
{
constructor()
{
  
  this._iconVisionButtonX = document.querySelector('.iconVisionButtonX');
this._systemWindowIconVision = document.querySelector('.systemWindowIconVision');
 this._vision = document.querySelector('.vision');
 this._textIconVisionSystemWindow = document.querySelector('.textIconVisionSystemWindow');
 this._clickOnIcone = false;
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
}


get textIconVisionSystemWindow ()
{
 return this._textIconVisionSystemWindow; 
}

get iconVisionButtonX ()
{
 return this._clickOnIcone; 
}


get systemWindo()
{
 return this._systemWindowIconVision; 
}

get vision()
{
 return this._vision; 
}

set systemWindo(value)
{
  this._systemWindowIconVision = value; 
}

set vision(value)
{
  this._vision = value; 
}

set clickOnIcone(value)
{
 this._clickOnIcone = value; 
}


set iconVisionButtonX (value)
{
  this._clickOnIcone = value; 
}

set textIconVisionSystemWindow (value)
{
  this._textIconVisionSystemWindow = value; 
}



clickVision()
{
 this._systemWindowIconVision.style.display = 'none'
 this._vision.addEventListener('click', () =>
 {
 
       this._systemWindowIconVision.style.display = 'block'
     
   
 })


 this._textIconVisionSystemWindow.addEventListener('click', () =>
  {
  
        this._systemWindowIconVision.style.display = 'block'
      
    
  })

}



clickVisionClose()
{



this._clickOnIcone =  !this._clickOnIcone;

this._iconVisionButtonX.addEventListener('click', () =>{
if( this._clickOnIcone == true)

  {
    this._systemWindowIconVision.style.display = 'none'
  }
})
}



};
let resultsClickvision = new SystemWindoMenuIconeVision();

resultsClickvision.clickVision();
resultsClickvision.clickVisionClose();



// system  window  icone  Vision end






















































// movable block start


(function() {
    // Init
    let container = document.getElementById("container"),
      inner = document.getElementById("inner");
  
    // Mouse
    let mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //-----------------------------------------
  
    let counter = 0;
    let updateRate = 10;
    let isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    let onMouseEnterHandler = function(event) {
      update(event);
    };
  
    let onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    let onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    let update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    let updateTransformStyle = function(x, y) {
      let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  })();

  // movable block end