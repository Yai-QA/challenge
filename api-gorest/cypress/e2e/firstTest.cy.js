describe('Get details of first active user', () => {
  it('Fetches users, finds first active user, and asserts details', () => {
    // Step 1: Get list of users
    cy.request({
      method: 'GET',
      url: '/users',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array').and.not.be.empty;

      // Step 2: Find first active user
      const activeUser = response.body.data.find(user => user.status === 'active');
      expect(activeUser, 'At least one active user exists').to.exist;

      // Step 2: Get details of the first active user
      cy.request({
        method: 'GET',
        url: `/users/${activeUser.id}`,
      }).then((userDetailsResponse) => {
        // Step 3: Assertions
        expect(userDetailsResponse.status).to.eq(200);
        expect(userDetailsResponse.body.data.status).to.eq('active');
      });
    });
  });
});
