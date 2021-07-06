
  let family = {  Martin: "Jean",
  Dupont: "Claude",
  Francois: "Xavier"
};

Object.getOwnPropertyNames(family).forEach(
    function(val, idx, array) {
      console.log(val + " " + family[val]);
  });