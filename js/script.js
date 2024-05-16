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
    this._suffix  = "PM"
  }
  else
  {
    this._suffix  = "AM"
  }


  this._clockOnTheTaskbar.innerHTML = `${this._data.toLocaleTimeString()} ${this._suffix} `


  },1000)
}
}
//  refresh method  clock end

let clockContent = new Clock();
clockContent.clockMethod();


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