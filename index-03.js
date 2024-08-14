// a) Use Object.preventExtensions to prevent further additions to the student object
const student = {
    name: 'John',
    age: 21,
    grade: 'A'
};

Object.preventExtensions(student);

// b) Use Object.isExtensible to check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'
const teacher = {
    subject: 'Math'
};

// d) Use Object.seal to seal the teacher object
Object.seal(teacher);

// e) Use Object.isSealed to check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log('Is student object extensible?', extensibleStatus);
console.log('Is teacher object sealed?', sealedStatus);
