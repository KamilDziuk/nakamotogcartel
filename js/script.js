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
 this._hoodText = document.querySelector('.hoodText');
 this._address = document.querySelector(".address");
 this._blockCenterIconHoodText = document.querySelector(".blockCenterIconHoodText");
 this._whitelistForm = document.querySelector(".whitelistForm");
 this._textIconAddressSystemWindow = document.querySelector('.textIconAddressSystemWindow');
}


get whitelistForm()
{
  return this._whitelistForm;
}


get address()
{
  return this._address;
}


get textIconAddressSystemWindow()
{
  return this._textIconAddressSystemWindow;
}


get blockCenterIconHoodText()
{
  return this._blockCenterIconHoodText;
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

set blockCenterIconHoodText(value)
{
  this._blockCenterIconHoodText = value; 
}


set whitelistForm(value)
{
  this._whitelistForm = value;
}

set address(value)
{
  this._address = value;
}


set textIconAddressSystemWindow(value)
{
  this._textIconAddressSystemWindow = value;
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


    

 this._systemWindowIconHood.style.display = 'none'
 this._hood.addEventListener('click', () =>
 {
  this.hoodText.innerHTML = `<br><br> <b>Join</b> The Hood and Collect Points to Grab Rewards<br>`;
  this._blockCenterIconHoodText.innerHTML = "Hood"
       this._systemWindowIconHood.style.display = 'block'
       this._whitelistForm.style.display = 'none'
       this._buttonHood.style.display = 'block';
     
 })


 this._textIconHoodSystemWindow.addEventListener('click', () =>
  {
    this.hoodText.innerHTML = `<br><br> <b>Join</b> The Hood and Collect Points to Grab Rewards<br>`;
    this._blockCenterIconHoodText.innerHTML = "Hood"
    this._whitelistForm.style.display = 'none'
        this._systemWindowIconHood.style.display = 'block'
        this._buttonHood.style.display = 'block';
        
  })

  this._address.addEventListener('click', () =>
    {
      this.hoodText.innerHTML = `<br><br> Don't miss out - Join the whitelist to secure your spot. <br> Enter Ordinals Wallet Address`;
      this._whitelistForm.style.display = 'block';
      this._buttonHood.style.display = 'none';
      this._systemWindowIconHood.style.display = 'block';
      this._blockCenterIconHoodText.innerHTML = "Whitelist";
      
    })

    this._textIconAddressSystemWindow.addEventListener('click', () =>
      {
        this.hoodText.innerHTML = `<br><br> Don't miss out - Join the whitelist to secure your spot. <br> Enter Ordinals Wallet Address`;
        this._whitelistForm.style.display = 'block';
        this._buttonHood.style.display = 'none';
        this._systemWindowIconHood.style.display = 'block';
        this._blockCenterIconHoodText.innerHTML = "Whitelist";
        
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









// Whitelist from  start 

class Whitelist extends SystemWindoMenuIconeHood

{
constructor()
{
 super();
}
sendWhitelist()
{
  let inputWhitelist  = document.querySelector(".inputWhitelist");
 let send = document.querySelector(".send");
 send.addEventListener("click", () =>
{
  // Information about being added to the list start
  setTimeout(() =>
{
  // confetti start
  confetti();
  // confetti end
  this.hoodText.style.color = 'black'
  this.hoodText.innerHTML = `<br><br> Don't miss out - Join the whitelist to secure your spot. <br> Enter Ordinals Wallet Address`;
  inputWhitelist.value = "";
},3000)

// confetti start
confetti();
// confetti end
// Information about being added to the list end
this.hoodText.style.color = '#19a800'
this.hoodText.innerHTML = `<br><br> Congratulations! Your wallet address has been whitelisted`;
  Email.send({
    SecureToken : "66c5bcae-7cb9-4cfe-a26d-40a94c3c93ca",
    To : 'nakamotogcartel@gmail.com',
    From : "nakamotogcartel@gmail.com",
    Subject : `New address added to the whitelist. New address: ${inputWhitelist.value}`,
    Body : ` New address: ${inputWhitelist.value}`
  })
})

}
 
};
let resultsWhitelist = new Whitelist()

resultsWhitelist.sendWhitelist()




// Whitelist from  end 

