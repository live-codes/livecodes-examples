import { Greeter } from "./Greeter.js";
var greeter = new Greeter();
var button = document.querySelector("button");
var h1 = document.querySelector("h1");
button.addEventListener("click", function () {
    h1.innerHTML = greeter.morning();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQzlCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixDQUFDO0FBQ3JFLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFnQixDQUFDO0FBRXZELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUMifQ==