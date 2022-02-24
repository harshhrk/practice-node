const secret = "SUPER SECRET";
const john = "john";
const peter = "peter";


/**
 * running this module gives a Module Object, and in that object we have quite a few properties.
 * One of those propeties is "exports".
 * These exports tells that it is also an object, so whatever we dump in that exports, I will be able to access anywhere in the application
 */
// console.log(module);

module.exports = { john, peter };