"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondsToArray = exports.ArrayToSeconds = void 0;

var ArrayToSeconds = function ArrayToSeconds(timeArr) {
  var hh = parseInt(timeArr[0]) * 10 + parseInt(timeArr[1]);
  var mm = parseInt(timeArr[2]) * 10 + parseInt(timeArr[3]);
  var ss = parseInt(timeArr[4]) * 10 + parseInt(timeArr[5]);
  var seconds = hh * 3600 + mm * 60 + ss; //console.log(seconds)

  return seconds;
};

exports.ArrayToSeconds = ArrayToSeconds;

var SecondsToArray = function SecondsToArray(timeInSec) {
  var timeArr = [0, 0, 0, 0, 0, 0];

  if (timeInSec < 0) {
    timeInSec = timeInSec * -1;
    timeArr[6] = '-';
  }

  var totalSeconds = parseInt(timeInSec);
  var hour = Math.floor(totalSeconds / 3600); //console.log(hour)

  var hourSec = hour * 3600;
  var minutes = Math.floor((totalSeconds - hourSec) / 60);
  var seconds = totalSeconds - hourSec - minutes * 60;

  if (hour < 10) {
    timeArr[1] = hour;
  } else {
    var strhour = hour.toString();
    timeArr[0] = strhour.substr(0, 1);
    timeArr[1] = strhour.substr(1);
  }

  if (minutes < 10) {
    timeArr[3] = minutes;
  } else {
    var strMinutes = minutes.toString();
    timeArr[2] = strMinutes.substr(0, 1);
    timeArr[3] = strMinutes.substr(1);
  }

  if (seconds < 10) {
    timeArr[5] = seconds;
  } else {
    var strSeconds = seconds.toString();
    timeArr[4] = strSeconds.substr(0, 1);
    timeArr[5] = strSeconds.substr(1);
  } //console.log(timeArr);


  return timeArr;
}; //console.log(SecondsToArray(-3))
//console.log(SecondsToArray(ArrayToSeconds([1,1,5,8,0,3])))


exports.SecondsToArray = SecondsToArray;