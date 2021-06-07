import { createServer } from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    let groceries = [
      { id: 1, nameProduct: 'product 1', unitPrice: '2.5' },
      { id: 2, nameProduct: 'product 2', unitPrice: '1.5' },
      { id: 3, nameProduct: 'product 3', unitPrice: '1' },
      { id: 4, nameProduct: 'product 4', unitPrice: '3' },
      { id: 5, nameProduct: 'product 5', unitPrice: '4.5' },
    ];
    this.get('/api/waiting-list', () => {
      return { groceries };
    });
    this.post('/api/waiting-list', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return {
        groceries: groceries.push({ id: groceries.length + 1, ...attrs }),
      };
    });
  },
});
