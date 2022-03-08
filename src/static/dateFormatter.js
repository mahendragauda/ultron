
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var full_months = ['January', 'Febrauary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function timeDifference(time, dateBeforeMonth = false, withTime = false, s = false) {
  if (!time) return 
  var previous = getValidDateObject(time);
  var diff = (new Date().valueOf() - previous) / 1000;

  if (parseInt(diff) < 60) {
    return 'Just now';
  }
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var elapsed = new Date().getTime() - previous;

  if (elapsed < msPerMinute) {
    return s ? '1m' : '1 mins ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + (s ? 'm' : ' mins ago');
  } else if (elapsed < msPerDay) {
    let hours = Math.round(elapsed / msPerHour);

    if (hours === 1) {
      return s ? '1h' : '1 hour ago';
    }
    else {
      return hours + (s ? 'h' : ' hours ago');
    }
  } else {
    return convertDateTime(time, withTime, dateBeforeMonth, s);
  }
};

function liveBlog(timeToConvert, isFullMonthRequired = false, withDot) {
  var time = getValidDateObject(timeToConvert);
  let hours = time.getHours() % 12 || 12;
  let ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  if (isFullMonthRequired == true) {
    var nmin = time.getMinutes();
    if(time.getMinutes() <= 9) {
      nmin = "0" + time.getMinutes();
    }
    else{
      nmin = time.getMinutes();
    }
    return full_months[time.getMonth()] + ' ' + time.getDate() + ' ' + ',' + ' ' + time.getFullYear() + ' ' + time.getHours() + ':' + nmin;   // October 22 , 2020 21:33
  }
  else if (withDot) {
    return hours + ':' + ('0' + time.getMinutes()).slice(-2) + ' ' + ampm + ' • ' + months[time.getMonth()] + ' ' + + time.getDate() + ',' + ' ' + time.getFullYear() + ' ';  //  5:42 PM • Jan 5, 2022
  }
  else {
    return hours + ':' + ('0' + time.getMinutes()).slice(-2) + ' ' + ampm + ' ' + months[time.getMonth()] + ' ' + + time.getDate() + ',' + ' ' + time.getFullYear() + ' ';  // 12:16 PM Jan 5, 2021 
  }
}

// function parseISOLocal(s) {
//   console.log(s)
//   var b = s.split('/\D/');
//   console.log(b)
//   return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
// }

function getValidDateObject(time) {
  if (time === undefined) {
    return '';
  }

  if (!isNaN(time)) {
    time = parseInt(time, 10);
  }
  var t = time.toString().split(/[- :]/);
  var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  let previous = new Date(d);
  if (!previous || isNaN(previous.getTime())) {
    // time = parseISOLocal(time);
    previous = new Date(time);

  }

  return previous;
}

function convertDateTime(timeToConvert, withTime, dateBeforeMonth, s = false) {
  var time = getValidDateObject(timeToConvert);
  let hours = time.getHours() % 12 || 12;
  let ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  if (s) {
    return time.getDate() + ' ' + months[time.getMonth()];
  }
  if (dateBeforeMonth) {
    return time.getDate() + ' ' + months[time.getMonth()] + ' ' + ' ' + time.getFullYear();  //21 nov 2021
  } else if (withTime) {
    return months[time.getMonth()] + ' ' + time.getDate() + ' ' + ',' + ' ' + time.getFullYear() + ' ' + hours + ':' + ('0' + time.getMinutes()).slice(-2) + ' ' + ampm; //nov 21,2021 9:23 pm or am
  } else {
    return months[time.getMonth()] + ' ' + time.getDate() + ' ' + ',' + ' ' + time.getFullYear(); //Dec 4 2021
  }
}

function convertDateTimeTwentyFour(time, dateBeforeMonth = false, withTime = false, s = false) {
  var previous = getValidDateObject(time);
  var diff = (new Date().valueOf() - previous) / 1000;

  if (parseInt(diff) < 60) {
    return 'Just now';
  }
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var elapsed = new Date().getTime() - previous;

  if (elapsed < msPerMinute) {
    return s ? '1m' : '1 mins ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + (s ? 'm' : ' mins ago');
  } else if (elapsed < msPerDay) {
    let hours = Math.round(elapsed / msPerHour);

    if (hours === 1) {
      return s ? '1h' : '1 hour ago';
    }
    else {
      return hours + (s ? 'h' : ' hours ago');
    }
  } else {
    return convertDateTime(time, withTime, dateBeforeMonth, s);
  }
};

function DisplayCurrentTime(timeToConvert, withTime, dateBeforeMonth, s = false) {
  // var format =  SimpleDateFormat("HH:mm:ss");
  // format.parse(timeToConvert)
};

function getTimeIn24HoursFormat(date) {
  var format = new SimpleDateFormat("HH:mm:ss");
  return format.parse(timeToConvert)
}