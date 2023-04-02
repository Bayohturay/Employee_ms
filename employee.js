const prompt = require("prompt-sync")({sigint:true})
let emp_hr = prompt('Enter your hours work');
let emp_r = prompt('Enter your Rate per hour');
let emp_basic = emp_hr * emp_r;
let bonus = 2/3*emp_basic;
let emp_gross = emp_basic + bonus;
let tax = 0.3 * emp_gross;
let emp_net = emp_gross - tax;
console.log(emp_net);
//document.write('Your net salary is '+ emp_net);