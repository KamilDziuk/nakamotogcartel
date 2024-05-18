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








// system  window  icone  Envelope  start

class SystemWindoMenuIconeEnvelope
{
constructor()
{
  
  this._iconEnvelopeButtonX = document.querySelector('.iconEnvelopeButtonX');
this._systemWindowIconEnvelope = document.querySelector('.systemWindowIconEnvelope');
 this._envelope = document.querySelector('.envelope');
 this._textIconEnvelopeSystemWindow = document.querySelector('.textIconEnvelopeSystemWindow');
 this._clickOnIcone = false;
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
}


get textIconEnvelopeSystemWindow ()
{
 return this._textIconEnvelopeSystemWindow; 
}

get iconEnvelopeButtonX ()
{
 return this._clickOnIcone; 
}


get systemWindo()
{
 return this._systemWindowIconEnvelope; 
}

get envelope()
{
 return this._envelope; 
}

set systemWindo(value)
{
  this._systemWindowIconEnvelope = value; 
}

set envelope(value)
{
  this._envelope = value; 
}

set clickOnIcone(value)
{
 this._clickOnIcone = value; 
}


set iconEnvelopeButtonX (value)
{
  this._clickOnIcone = value; 
}

set textIconEnvelopeSystemWindow (value)
{
  this._textIconEnvelopeSystemWindow = value; 
}



clickEnvelope()
{
 this._systemWindowIconEnvelope.style.display = 'none'
 this._envelope.addEventListener('click', () =>
 {
 
       this._systemWindowIconEnvelope.style.display = 'block'
     
   
 })


 this._textIconEnvelopeSystemWindow.addEventListener('click', () =>
  {
  
        this._systemWindowIconEnvelope.style.display = 'block'
      
    
  })

}



clickEnvelopeClose()
{



this._clickOnIcone =  !this._clickOnIcone;

this._iconEnvelopeButtonX.addEventListener('click', () =>{
if( this._clickOnIcone == true)

  {
    this._systemWindowIconEnvelope.style.display = 'none'
  }
})
}



};
let resultsClickenvelope = new SystemWindoMenuIconeEnvelope();

resultsClickenvelope.clickEnvelope();
resultsClickenvelope.clickEnvelopeClose();



// system  window  icone  Envelope end




// system  window  icone  Portfolio  start

class SystemWindoMenuIconePortfolio
{
constructor()
{
  
  this._iconPortfolioButtonX = document.querySelector('.iconPortfolioButtonX');
this._systemWindowIconPortfolio = document.querySelector('.systemWindowIconPortfolio');
 this._portfolio = document.querySelector('.portfolio');
 this._textIconPortfolioSystemWindow = document.querySelector('.textIconPortfolioSystemWindow');
 this._clickOnIcone = false;
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
}


get textIconPortfolioSystemWindow ()
{
 return this._textIconPortfolioSystemWindow; 
}

get iconPortfolioButtonX ()
{
 return this._clickOnIcone; 
}


get systemWindo()
{
 return this._systemWindowIconPortfolio; 
}

get portfolio()
{
 return this._portfolio; 
}

set systemWindo(value)
{
  this._systemWindowIconPortfolio = value; 
}

set portfolio(value)
{
  this._portfolio = value; 
}

set clickOnIcone(value)
{
 this._clickOnIcone = value; 
}


set iconPortfolioButtonX (value)
{
  this._clickOnIcone = value; 
}

set textIconPortfolioSystemWindow (value)
{
  this._textIconPortfolioSystemWindow = value; 
}



clickPortfolio()
{
 this._systemWindowIconPortfolio.style.display = 'none'
 this._portfolio.addEventListener('click', () =>
 {
 
       this._systemWindowIconPortfolio.style.display = 'block'
     
   
 })


 this._textIconPortfolioSystemWindow.addEventListener('click', () =>
  {
  
        this._systemWindowIconPortfolio.style.display = 'block'
      
    
  })

}



clickPortfolioClose()
{



this._clickOnIcone =  !this._clickOnIcone;

this._iconPortfolioButtonX.addEventListener('click', () =>{
if( this._clickOnIcone == true)

  {
    this._systemWindowIconPortfolio.style.display = 'none'
  }
})
}



};
let resultsClickportfolio = new SystemWindoMenuIconePortfolio();

resultsClickportfolio.clickPortfolio();
resultsClickportfolio.clickPortfolioClose();



// system  window  icone  Portfolio end


// system  window  icone  Services  start

class SystemWindoMenuIconeServices
{
constructor()
{
  
  this._iconServicesButtonX = document.querySelector('.iconServicesButtonX');
this._systemWindowIconServices = document.querySelector('.systemWindowIconServices');
 this._services = document.querySelector('.services');
 this._textIconServicesSystemWindow = document.querySelector('.textIconServicesSystemWindow');
 this._clickOnIcone = false;
}

get clickOnIcone ()
{
 return this._clickOnIcone; 
}


get textIconServicesSystemWindow ()
{
 return this._textIconServicesSystemWindow; 
}

get iconServicesButtonX ()
{
 return this._clickOnIcone; 
}


get systemWindo()
{
 return this._systemWindowIconServices; 
}

get services()
{
 return this._services; 
}

set systemWindo(value)
{
  this._systemWindowIconServices = value; 
}

set services(value)
{
  this._services = value; 
}

set clickOnIcone(value)
{
 this._clickOnIcone = value; 
}


set iconServicesButtonX (value)
{
  this._clickOnIcone = value; 
}

set textIconServicesSystemWindow (value)
{
  this._textIconServicesSystemWindow = value; 
}



clickServices()
{
 this._systemWindowIconServices.style.display = 'none'
 this._services.addEventListener('click', () =>
 {
 
       this._systemWindowIconServices.style.display = 'block'
     
   
 })


 this._textIconServicesSystemWindow.addEventListener('click', () =>
  {
  
        this._systemWindowIconServices.style.display = 'block'
      
    
  })

}



clickServicesClose()
{



this._clickOnIcone =  !this._clickOnIcone;

this._iconServicesButtonX.addEventListener('click', () =>{
if( this._clickOnIcone == true)

  {
    this._systemWindowIconServices.style.display = 'none'
  }
})
}



};
let resultsClickservices = new SystemWindoMenuIconeServices();

resultsClickservices.clickServices();
resultsClickservices.clickServicesClose();



// system  window  icone  Services end






















































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