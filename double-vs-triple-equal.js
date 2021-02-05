
/*
double equal (==) just compare value
where 0=false, even though 0 is Number, false is Boolean
same in 1 = true
also number and number in string are same
like 0 = '0'

triple equal (===) it will compare not only value but also type
so there 0 and false will not be equal cause type doesn't match
*/
const num1 = 1;
const num2 = true;
// double equal
if (num1 == num2) {
    console.log('Double equal condition is true');
}
else{
    console.log('Double equal condition is false');

}
// triple equal
if (num1 === num2) {
    console.log('triple equal condition is true');
}
else{
    console.log('triple equal condition is false');

}