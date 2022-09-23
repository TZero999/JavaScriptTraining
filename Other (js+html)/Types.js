alert ("Total 8 types (null it's diff type):");

alert (`Type of undefined - ${typeof undefined}`); // "undefined"

alert (`Type of 0 - ${typeof 0}`); // "number"

alert (`Type of 10n - ${typeof 10n}`); // "bigint"

alert (`Type of true - ${typeof true}`); // "boolean"

alert (`Type of "foo" - ${typeof "foo"}`); // "string"

alert (`Type of Symbol("id") - ${typeof Symbol("id")}`); // "symbol"

alert (`Type of Math - ${typeof Math}`); // "object"  (1)

alert (`Type of null - ${typeof null}`); // "object"  (2)