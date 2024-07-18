// Converting a string to upper case

var getBig = function (str) {
    return str.toUpperCase();
  };
  
  var getSmall = function (str) {
    return str.toLowerCase();
  };
  
  var planet = "Jupiter";
  var bigPlanet = getBig(planet);
  
  console.log(planet + " becomes " + bigPlanet);
  
  var star = "SIRIUS";
  var smallStar = getSmall(star);
  
  console.log(star + " becomes " + smallStar);
  
  
  
  
  /* Further Adventures
   *
   * 1) Create a getBig function that accepts a
   *    string as an argument and returns it
   *    converted to upper case.
   *
   * There is also a toLowerCase string method.
   *
   * 2) Create a getSmall function that accepts a
   *    string as an argument and returns it
   *    converted to lower case.
   *
   */