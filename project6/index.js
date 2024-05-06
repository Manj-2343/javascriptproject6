const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
//note:JSON.stringify: This function converts a JavaScript object or value into a JSON string. It serializes the object's data into a JSON-formatted string representation.
/**
 * ex:const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30}'
oneline ans:JSON.stringify is used to convert a JavaScript object into a JSON string.
 */
// JSON.parse: This function takes a JSON-formatted string as input and converts it back into a JavaScript object.
/**
 * const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj); // { name: 'John', age: 30 }
oneline ans:JSON.parse is used to convert a JSON string into a JavaScript object.
 */
