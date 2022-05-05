1.
console.log(hello);
var hello = 'world';
// var hello ;
// console.log(hello);
// hello = 'world';
// returns undefined

=================================
2.
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
/*
var needle
function test(){
    var needle
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
returns magnet from test function
*/
=====================================
3.
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
var brandan;
function print(){
    brandan = 'only okay';
    console.log(brandan);
}
brendan = 'super cool'
console.log(brendan);
will return super cool
*/
=====================================
4.
var food = 'chicken';
console.log(food);
eat();

function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
var food ;
function eat(){
    var food;
    food = half chicken ;
    console.log(food);
    food = gone;
}
food = chicken;
console.log(food);
eat();
returns half chicken and chicken
*/
======================================
5. 
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*
var mean 
mean();
console.log(food);
function(){
    var food;
    food = chicken;
    console.log(food);
    food = fish;
    console.log(food);
}
console.log(food);
returns mean = undefined
*/
=======================================
6.
console.log(genre);
var genre = "disco";
rewind();

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
var genre 
function rewind(){
    var genre 
    genre = rock 
    console.log(genre)
    genre = R&B
    console.log(genre)
}
console.log(genre)
genre = disco 
rewind(); 
console.log(genre)
returns rock,r & b,disco
*/
=======================================
7.
dojo = "san jose";
console.log(dojo);
learn();

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
dojo = san jose 
learn();
function learn(){
    var dojo 
    dojo = seattle
    console.log(dojo)
    dojo = burbank 
    console.log(dojo)
}
console.log(dojo);
console.log(dojo);
returns seattle burbank san jose san jose 

*/

Saurabh Dahal to Everyone(4: 58 PM)
git add.
git commit - m "some message here";
git push