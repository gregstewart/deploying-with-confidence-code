import api from '../../service/api.js';

describe('routes', () => {
  describe('requests', () => {
    describe('GET', () => {
      it('returns a 200 status code on valid response', (done) => {
        api.inject(
          {
            method: 'GET',
            url: '/ping'
          },
          function handler(response) {
            expect(response.statusCode).toEqual(200);
            expect(response.result).toEqual({response: 'pong'});
            done();
          }
        );
      });
    });
  });
});
