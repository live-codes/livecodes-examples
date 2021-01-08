export class Greeter {
  private morningGreetings = [
    "Good morning",
    "Have a good day",
    "How are you today?",
  ];

  private eveningGreetings = ["Good evening", "Good night", "Sleep well"];

  private randomSelector(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  public morning() {
    return this.randomSelector(this.morningGreetings);
  }

  public evening() {
    return this.randomSelector(this.eveningGreetings);
  }
}
