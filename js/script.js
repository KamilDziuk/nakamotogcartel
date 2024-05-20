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


  this._clockOnTheTaskbar.innerHTML = `${this._data.toLocaleTimeString()} ${this._suffix} `


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
  this._menuButtom = document.querySelector('.menuButtom');
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

get menuButtom()
{
  return this._menuButtom; 
}

set systemWindo(value)
{
   this._systemWindow = value; 
}

set menuButtom(value)
{
   this._menuButtom = value; 
}

set clickOn(value)
{
  this._clickOn = value; 
}

clickMenuButtom()
{
  this._systemWindow.style.display = 'none'
  this._menuButtom.addEventListener('click', () =>
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
let resultsClickMenuButtom = new SystemWindoMenu();

resultsClickMenuButtom.clickMenuButtom();




// system window method end








// system  window  icone  Twitter  start

class SystemWindoMenuIconeTwitter
{
constructor()
{
  
  this._iconTwitterButtonX = document.querySelector('.iconTwitterButtonX');
this._systemWindowIconTwitter = document.querySelector('.systemWindowIconTwitter');
 this._twitter = document.querySelector('.twitter');
 this._textIconTwitterSystemWindow = document.querySelector('.textIconTwitterSystemWindow');
 this._clickOnIcone = false;
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
}


get textIconTwitterSystemWindow ()
{
 return this._textIconTwitterSystemWindow; 
}

get iconTwitterButtonX ()
{
 return this._clickOnIcone; 
}


get systemWindo()
{
 return this._systemWindowIconTwitter; 
}

get twitter()
{
 return this._twitter; 
}

set systemWindo(value)
{
  this._systemWindowIconTwitter = value; 
}

set twitter(value)
{
  this._twitter = value; 
}

set clickOnIcone(value)
{
 this._clickOnIcone = value; 
}


set iconTwitterButtonX (value)
{
  this._clickOnIcone = value; 
}

set textIconTwitterSystemWindow (value)
{
  this._textIconTwitterSystemWindow = value; 
}



clickTwitter()
{
 this._systemWindowIconTwitter.style.display = 'none'
 this._twitter.addEventListener('click', () =>
 {
 
       this._systemWindowIconTwitter.style.display = 'none'
     
   
 })


 this._textIconTwitterSystemWindow.addEventListener('click', () =>
  {
  
        this._systemWindowIconTwitter.style.display = 'none'
      
    
  })

}



clickTwitterClose()
{



this._clickOnIcone =  !this._clickOnIcone;

this._iconTwitterButtonX.addEventListener('click', () =>{
if( this._clickOnIcone == true)

  {
    this._systemWindowIconTwitter.style.display = 'none'
  }
})
}



};
let resultsClicktwitter = new SystemWindoMenuIconeTwitter();

resultsClicktwitter.clickTwitter();
resultsClicktwitter.clickTwitterClose();



// system  window  icone  Twitter end




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
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
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