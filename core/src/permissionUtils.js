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

exports.permissionCheck = permissionCheck;