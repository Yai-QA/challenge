describe('Update first user name via API', () => {
  const token = '55d6636b25b84832f383665a17f72117ee2b5e655a78ba968912c9a37d1c050f';
  const newName = 'Yailyn';

  it('Fetches users, updates the first user, and asserts response', () => {
    // Step 1: Get list of users
    cy.request({
      method: 'GET',
      url: '/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array').and.not.be.empty;

      const firstUser = response.body.data[0];
      const userId = firstUser.id;

      // Step 2: Update the name of the first user
      cy.request({
        method: 'PATCH',
        url: `/users/${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          name: newName,
          email: `test${Date.now()}@mail.com`,
          status: 'active',
        },
      }).then((patchResponse) => {
        // Step 3: Assertions
        expect(patchResponse.status).to.eq(200);
        expect(patchResponse.body.data.name).to.eq(newName);
      });
    });
  });
});

  