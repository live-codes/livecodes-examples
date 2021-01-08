import { Greeter } from "./Greeter.js";
const greeter = new Greeter();
const button = document.querySelector("button") as HTMLButtonElement;
const h1 = document.querySelector("h1") as HTMLElement;

button.addEventListener("click", () => {
  h1.innerHTML = greeter.morning();
});
