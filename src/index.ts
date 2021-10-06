// Ok
// $ExpectType 0
let myNumber = 0;

// Ok
// $ExpectType ""
let myString = "";

// Wrong!
// $ExpectType boolean
let myBoolean = null;

// $ExpectTypeSnapshot MyFooSnapshot
const Foo = {
  a: 1,
  n: 17,
} as const;
