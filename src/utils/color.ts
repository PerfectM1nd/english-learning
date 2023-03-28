// @ts-ignore
export function generateColor(input_str) {

  //TODO: adjust base colour values below based on theme
  var baseRed = 128;
  var baseGreen = 128;
  var baseBlue = 128;

  //lazy seeded random hack to get values from 0 - 256
  //for seed just take bitwise XOR of first two chars
  var seed = input_str.charCodeAt(0) ^ input_str.charCodeAt(1);
  var rand_1 = Math.abs((Math.sin(seed++) * 10000)) % 256;
  var rand_2 = Math.abs((Math.sin(seed++) * 10000)) % 256;
  var rand_3 = Math.abs((Math.sin(seed++) * 10000)) % 256;

  //build colour
  var red = Math.round((rand_1 + baseRed) / 2);
  var green = Math.round((rand_2 + baseGreen) / 2);
  var blue = Math.round((rand_3 + baseBlue) / 2);

  return { red: red, green: green, blue: blue };
}