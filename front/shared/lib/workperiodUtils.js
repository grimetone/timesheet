const moment = require('moment');

/**
 * Calculates total hours from an array of workPeriods
 * @param {Arr} periodArr
 */
export const getTotalHours = (periodArr) =>{
  if (!periodArr) {
    return 0;
  }
  let finalCount = 0;
  var i;
  for (i = 0; i < periodArr.length; i++) {
    if (periodArr[i].to){
      const from = moment(periodArr[i].from);
      const to = moment(periodArr[i].to);
     const hours = to.diff(from, 'hours');
      finalCount += hours;
    };
  }
return finalCount;
}

/**
 * Calculates total unassigned to a project hours from an array of workPeriods
 * @param {Arr} periodArr
 */
export const getTotalUnassignedHours = (periodArr) => {
  if (!periodArr) {
    return 0;
  }
  let finalCount = 0;
  var i;
  for (i = 0; i < periodArr.length; i++) {
    if (periodArr[i].to && periodArr[i].project == null) {
      const from = moment(periodArr[i].from);
      const to = moment(periodArr[i].to);
      const hours = to.diff(from, 'hours');
      finalCount += hours;
    };
  }
  return finalCount;
}