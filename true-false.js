// falsy = 0, "", undefined, null,  NaN, false
/*
0 ---- (numberValue = 0)

"" ---- (emptyString)

undefined ---- ( if i set a value to undefined like [let name = undefined] or [let name] in both case it will be undefined )
*/
// truthy
/*
'0', " ", ' ', anything inside a String, [],empty Array, {}, empty Object*/
let name = 0;
if (name || name == 0) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}