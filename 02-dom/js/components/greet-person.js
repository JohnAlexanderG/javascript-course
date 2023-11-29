console.log("from other js");

export default function greetPerson(name) {
  console.log(`Hey 👋 ${name}!`);
  document.getElementById("root").innerText = `Hey 👋 ${name}!`;
}
