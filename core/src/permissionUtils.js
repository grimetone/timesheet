const moment = require('moment');
/**
 * 
 * @param {Object Account} user 
 * @param {Enum Permission} permissionRequired 
 */
function permissionCheck(user, permissionRequired) {
  console.log(user.permissions);
  console.log(permissionRequired);
  if (!user.permissions.some(r => permissionRequired.includes(r))){
     throw new Error('Lacking permissions');
   }
}

/**
 * Returns start of month in ISO format
 */
function getStartMonth() {
  return moment().startOf('month').toISOString();
}

/**
 * Returns end of month in ISO format
 */
function getEndMonth() {
  return moment().endOf('month').toISOString();
}

/**
 * Returns start of week in ISO
 */
function getStartWeek() {
  return moment().startOf('week').toISOString();
}

/**
 * Returns current time in ISO format
 */
function getCurrTime() {
  return moment().toISOString();
}

module.exports = {
  permissionCheck,
  getStartMonth,
  getEndMonth,
  getCurrTime,
  getStartWeek,
};