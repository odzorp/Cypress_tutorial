describe('API Plugin Test', () => {
    it('should verify API plugin functionality', () => {
      // cy.visit('GET', 'https://jsonplaceholder.typicode.com/posts') // Endpoint to retrieve posts
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          expect(response.status).to.eq(200); // Verify if the response status is 200 OK
          expect(response.body).to.have.length.above(0); // Ensure that the response contains data
          expect(response.body[0]).to.have.property('userId'); // Validate the structure of the response data
          expect(response.body[0]).to.have.property('id');
          expect(response.body[0]).to.have.property('title');
          expect(response.body[0]).to.have.property('body');
        });
    });
  });
  