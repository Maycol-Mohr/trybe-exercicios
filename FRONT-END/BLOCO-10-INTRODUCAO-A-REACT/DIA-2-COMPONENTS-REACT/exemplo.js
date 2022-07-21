/*
function greeting(name, lastName){
    return `Hello, ${name} ${lastName}`;
  }
  console.log(greeting('Samuel', 'Silva'));
  */

  const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

  // o console log foi adicionado para facilitar a compreensão
const items = shoppingList.map((item) => {
  console.log("item: ", item);
  return (<li>{ item }</li>);
});