console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("WDIController", WDIController);

// var vm = this;

function WelcomeController(){
  this.full_name = "Stephen Dangerfield";
  this.age = 20;
  this.city = "Springville";
  this.state = "Utah ";
  this.shout = function(selectedElement){
    return selectedElement.toUpperCase() + "!";
  };
}

function WDIController(){
  this.myClassName = "WDI 33";
  this.enrolledStudents = [
    {name: "Sophie"},
    {name: "Martin"},
    {name: "Kevin"},
    {name: "Kyle"},
    {name: "Star"},
    {name: "Stephen"}

  ];
  this.startDate = "10/24/2016";
  this.endDate = "1/27/2017";
  this.daysRemaining = function(){
    var secondsLeft = Date.parse(this.endDate) - Date.now();
    var daysLeft = Math.floor( secondsLeft/1000/24/60/60 );
    return daysLeft;
  }

}
