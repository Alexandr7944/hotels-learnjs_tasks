// Использование "this" в литерале объекта

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name );

// в данном случае this ссылается на объект, которго нет поэтому undefined
