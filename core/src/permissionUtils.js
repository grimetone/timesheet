
const moment = require('moment');
/**
 * 
 * @param {Object Account} user 
 * @param {Enum Permission} permissionRequired 
 */
function permissionCheck(user, permissionRequired) {
  console.log(user);
   if (!user.permissions.includes(permissionRequired)){
     throw new Error('Lacking permissions');
   }
}
const startOfMonth = moment().startOf('month').toISOString();
const endOfMonth = moment().endOf('month').toISOString();
// just for demonstration:
console.log(startOfMonth);

exports.permissionCheck = permissionCheck;