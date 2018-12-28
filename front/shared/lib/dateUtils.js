const moment = require('moment');
import produce from 'immer';
import Link from 'next/link';

/**
 * Reformats the dates of the array of workperiods
 * @param {Arr} periodArr 
 */
export const formatWorkperiod = (periodArr) => {
  if (!periodArr) {
    return;
  }
 return produce(periodArr, draft => {
   periodArr.forEach(product => {
     if (product.to !== null) {
       const newMom = moment(product.to);
       product.to = newMom.format('LLL');
     }
     const mom = moment(product.from);
     product.from = mom.format('LLL');
     product.link = <Link href={{ pathname: '/Workperiod', query: { id: product.id } }}><a>Link</a></Link>;
   });
  });
}

/**
 * Reformats the dates of the array of workperiods
 * @param {Array} period 
 */
export const formatCheckin = (periods) => {
  if (!periods) {
    return;
  }
        const newMom = moment(periods[0].from);
        return newMom.format('LLL');
}

/**
 * Reformats the dates of the array of workperiods
 * @param {Array} period 
 */
export const formatCheckout = (periods) => {
  if (!periods) {
    return;
  }
  const newMom = moment(periods[0].to);
  return newMom.format('LLL');
}

/**
 * Gets the time from now of the first date
 * @param {Array} period 
 */
export const timeComparison = periods => {
         if (!periods) {
           return;
         }
         const newMom = moment(periods[0].from);
         return newMom.fromNow();
       };