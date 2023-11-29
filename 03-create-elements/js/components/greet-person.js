console.log("from other js");
const rootElement = document.getElementById("root");
const container = document.createElement("span");

export default function greetPerson(name) {
  console.log(`Hey 👋 ${name}!`);
  rootElement.insertAdjacentElement("afterbegin", container);
  container.innerText = `Hey 👋 ${name}!`;
}
