const ftoc = function (fahr) {
  let celc = (fahr - 32) * 5 / 9;
  celcRounded = Math.round(celc * 10) / 10;
  return celcRounded;
};

const ctof = function (celc) {
  let fahr = (celc * (9 / 5)) + 32;
  fahrRounded = Math.round(fahr * 10) / 10;
  return fahrRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
