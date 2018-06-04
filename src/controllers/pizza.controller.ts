// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { post, get, requestBody } from "@loopback/rest";

export class PizzaController {
  constructor() {}

  @get('/user')
  getPizzas(): Array<object> {
    return [
      {
        name: "Hawaii",
        topping:"pinepple"
      }
    ];
  }

  @post('/pizzas')
  requestPizza(@requestBody() pizza: any): object {
    pizza.requested = "yes";
    return pizza;
  }
}
