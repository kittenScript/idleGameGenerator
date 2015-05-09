var Game = {
  update: function() {
    this.farm();
    this.fixText();
  },
  farm: function () {
    console.log(this.farmCount);
    if (this.farmCount==10) {
      this.farmCount=0;
      this.workVal=0;
      if (this.tractor > 0) {
       for (var i = 0; i != this.farmer; i++) {
         if (i > this.tractor) {
           this.workVal++;
         } else {
           this.workVal+=5;
         }
       }
      } else {
        this.workVal = this.farmer;
      }
        if (this.land > this.workVal) {
          this.money += this.workVal;
        } else {
          this.money += this.land;
        }
    } else {
      this.farmCount++;
    }
  },
  fixText: function () {
    document.getElementById('money').innerHTML = this.money //localStorage.money;
    if (this.land == 1) document.getElementById('land').innerHTML = this.land + ' acre'//localStorage.money;
    if (this.land != 1) document.getElementById('land').innerHTML = this.land + ' acres'//localStorage.money;
    if (this.tractor == 1) document.getElementById('tractor').innerHTML = this.tractor + ' tractor'//localStorage.money;
    if (this.tractor != 1) document.getElementById('tractor').innerHTML = this.tractor + ' tractors'//localStorage.money;
    document.getElementById('farmer').innerHTML = this.farmer //localStorage.money;
  },
  farmCount: 10,
  workVal: 0,
  farmer: 0,
  money: 500,
  land: 0,
  tractor: 0
}

function load() {
  /*if (localStorage.money == undefined) {
    localStorage.money = 0;
  }*/
  window.setInterval(function () {Game.update();}, 1000);
}

function init() {
  Game.money++;
  //localStorage.money++;
      Game.fixText();
}

function land() {
  if (Game.money >= 10) {
    Game.money -= 10;
    Game.land++;
      Game.fixText();
  }
}

function farmer () {
  if (Game.money >= 25) {
    Game.money -= 25;
    Game.farmer++;
      Game.fixText();
  }
}

function tractor () {
  if (Game.money >= 50) {
    Game.money -= 50;
    Game.tractor++;
      Game.fixText();
  }
}
