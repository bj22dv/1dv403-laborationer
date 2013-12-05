"use strict";
var makePerson = function (persArr) {
    var i = 0;
    var totalAge = 0;
    var ages = [];
    var name = [];
    //Läser in namn och ålder.
    for (i; i < persArr.length; i++) {
        totalAge += persArr[i].age;
        ages.push(persArr[i].age);
        name.push(persArr[i].name);
    }
    //Sorterar åldrarna och tar fram minsta, högsta och medelåldern.
    ages.sort();
    var person = {
        minAge: ages[0],
        maxAge: ages[ages.length - 1],
        averageAge: Math.round(totalAge / ages.length)
    };
    //Sorterar namnen.
    person.names = name.sort(function (a, b) { return a.localeCompare(b) }).join(", ");

    return person;
};
var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];
makePerson(data);