// A function with three arguments

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    return callOutCharge + costPerHour * numberOfHours - discount;
};

// 1) Cost for 12 hours work
console.log("$" + totalCost(30, 40, 12, 0)); // This will display the cost for 12 hours

// 4) Total cost with a $20 off coupon for 3 hours
console.log("$" + totalCost(30, 40, 3, 20)); // This will display $130 for 3 hours

/* Further Adventures
 *
 * 1) What is the cost for 12 hours work?
 *
 * 2) The plumber sometimes issues discount coupons.
 *    Add a fourth parameter to the totalCost
 *    function definition to account for discounts.
 *
 * 3) Update the function to subtract the discount
 *    from the total before returning it.
 *
 * 4) If a customer has a $20 off coupon,
 *    update the call to totalCost
 *    to display the total cost.
 *    It should now be $130 for 3 hours.
 *
 */