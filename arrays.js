//1. What is the lenth of the following contacts array?

var contacts = [];

console.log(contacts.length)


//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};
var chris = {
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
};
var tony = {
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
};
var andrew = {
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
};
var stefan = {
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
};

function addToArray([person1, person2, person3, person4, person5, person6]) {
	for (var i = 0; i < arguments[0].length; i++) {
		var person = arguments[0][i];
		contacts.push(person)
	}
}

addToArray([jake, matt, chris, tony, andrew, stefan])

console.log(contacts)

//3. Woops after adding all of those people to the same contacts list you realized you need a list just the mentors. Create a new variable named mentors populate it using contacts array.

var mentors = []

function mentorsOnly(mentArr) {
	for (var key in mentArr) {
		if (mentArr.hasOwnProperty(key)) {
			var element = mentArr[key];
			if(element.title == 'mentor'){
				mentors.push(element)
			}
		}
	}
}

mentorsOnly(contacts)
console.log(mentors)



