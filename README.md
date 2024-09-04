javascript :- 

- Javascript is a programing language which helps to write code to building sone logics
- javascript is a high level programming lanugage for building web apllication.
- javascript works both frotend site and backend site.
- javascript is come from echma script so we see the latest version of javascript in the form of echma script.
- Now we use javascript version 6 i.e ES6(Echma script)
- In anathor way echma script as the vanilla javascript.

Variable:- 
- Variable is container to store the data.
- There are 3 types of variable present over the javascript.
1. Let:-
 - Let is type of variable which is used for changing the variable name letter.
 - Now a days, Most of the cases we used let for creating variable.
 - Let is a block scope code so we have been using let for more cases.

 2. var:-
  - var is a tyoe of variable which is also used for changing the variable later stage.
  - var is used in oldest broswer so now a days we are don't use var most of cases

  3:-Const:-
   - cosnst is a type of variable where we can't change our data further.
   - const means constant to store some data like numbers,integers etc.

 Rules for creating variable:-
  - variable names are case senstive "a", &"A" is diffrent.
  - Only letter,digit,underscore & is allowed.(not even space).Datatypes in JS :-

data types is an attributes associated with a piece of data that tells a computer system how to interpet its value.
in data types we used "typeof" operator to know that what type of data it is.
mainly in javascript their are 2 types of data types.
primitive :-
in javascript their are 7 types of primitive data types.
Number - Number are the type of data types those it contain some numerical values.

Boolean - in Boolean data types we get boolean value like true, false.

Undefined - in undefined data types the data is not define so that it will show undfined.

Null - in this data type we get null for the value means nothing.

bigInt - in bigInt we will get big integer value

Symbol - in symbol we will get whole symbol as well as the value we get for the data type

String - String is a type of data type that can hold some character like names...

Reference or Non-primitive :-

non primitive data type are the type of data type that can hold multiple items in a single time
non primitive data types are - object, array, function etc..
objects is a non primitive data types which can hold multiple of item in one single entity.
mainly objects are working on (key:value) pair.
the left side part is our keys of object & right side parts are the objects of the project. ex. object -
let student = { name : "mithun pani", mob-no : 8328892097, college : "GIFT" }
  - Only letter,underscore or $ should be the 1st character only.
  - reserved words cannot be variables names.
  
Operator in JS :- 
- operator are the key features to do some task or operate some task. 
- ex. A + B 
- in this above example A,B are the operands & "+" is the operator.
- there are 5 types of operator are their in javascript 

1. arithmetic operator  
    (+,-,*,/)
    modulus -> %
    exponentiation -> **

2. unary operator 
    increment (++)
    decreament (--)

3. assignment operator
    (assign some values to the variables)
    (=, +=, -=, *=, %=, **=)

4. comparison operator
    (compair the values)
    it gives the result of true or false. 
    equal to -> ==
    not equal to -> !=
    equal to & type -> ===
    not equal to & type -> !==

5. logical operator 
    checks the logic of the operator(true/false)
    logical AND (&&) -> table of logical AND operator is -> 
    cond1  cond2  res(&&)
    T       T      T
    T       F      F
    F       T      F
    F       F      F

    logical OR (||) -> tab
    logical OR (||) -> table of logical OR operator is -> 
    cond1  cond2  res(&&)
    T       T      T
    T       F      T
    F       T      T
    F       F      F

    logical Not (!)

    are 3 types of conditional statement are there 

1. if condition :- 
    - if condition is true then statement is true otherwise false. 
    syntax - 
    if(condition){
        statemeconditional statement :- 

- to implement some condition in the code.
- there nt
    }

2. if-else condition :- 
    - if condition is true then if bloack is executed otherwise its terminate to else condition.
    syntax - 
    if(condition){
        statement
    } else {
        statement
    }

3. else-if condition :- 
    - its check the condition multiple times where the condition is true. 
    syntax - 
    if(condition){
        statement
    } else if(condition){
        statement
    } else if(condition){
        statement
    } else {
        statement
   }

Loops in JS :- 

- loops are used to execute a piece of code again and again.
1. For Loop :-
    syntax - 
    for (initialization; condition; updation){
        statement
    }
    ex - 
    for(let i = 1;i <= 5; i++){
        console.log("web bocket")
    }

    web bocket
    web bocket
    web bocket
    web bocket

While loop:-







Do While loop :-
  Syntax - 
  do {
      statement
      updation
  }while (condition)

  for of loop :- it itrate on string and array
  for in loop :- it itrate over objects (key-value)
 pair.