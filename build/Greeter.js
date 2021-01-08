var Greeter = /** @class */ (function () {
    function Greeter() {
        this.morningGreetings = [
            "Good morning",
            "Have a good day",
            "How are you today?",
        ];
        this.eveningGreetings = ["Good evening", "Good night", "Sleep well"];
    }
    Greeter.prototype.randomSelector = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    Greeter.prototype.morning = function () {
        return this.randomSelector(this.morningGreetings);
    };
    Greeter.prototype.evening = function () {
        return this.randomSelector(this.eveningGreetings);
    };
    return Greeter;
}());
export { Greeter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JlZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HcmVldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7UUFDVSxxQkFBZ0IsR0FBRztZQUN6QixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLG9CQUFvQjtTQUNyQixDQUFDO1FBRU0scUJBQWdCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBYTFFLENBQUM7SUFYUyxnQ0FBYyxHQUF0QixVQUF1QixLQUFlO1FBQ3BDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSx5QkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSx5QkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyJ9