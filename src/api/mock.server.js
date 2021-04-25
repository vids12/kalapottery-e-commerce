import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("products");
    },

    seeds(server) {
      [...Array(50)].forEach((_) => {
        server.create("product", {
          id: faker.random.uuid(),
          name: faker.commerce.productName(),
          image: faker.random.image(),
          price: faker.commerce.price(),
          brand: faker.lorem.word(),
          inStock: faker.random.boolean(),
          fastDelivery: faker.random.boolean(),
          ratings: faker.random.arrayElement([1, 1.5, 2, 3, 3.5, 4, 4.5, 5]),
          offer: faker.random.arrayElement([
            "Save 50",
            "70% bonanza",
            "Republic Day Sale",
            "Hot Sale"
          ]),
          level: faker.random.arrayElement([
            "beginner",
            "amateur",
            "intermediate",
            "advanced",
            "professional"
          ]),
          color: faker.commerce.color(),
          quantity: 1
        });
      });
    }
  });
}
