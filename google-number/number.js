// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;
 
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
 
// Parse number with country code and keep raw input.
const number = phoneUtil.parseAndKeepRawInput('01029817909', 'KR');
 
// Print the phone's raw input.
console.log(number.getRawInput());








 