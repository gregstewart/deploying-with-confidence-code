import request from 'superagent';
import Promise from 'bluebird';

let getStatus = () => {
  return new Promise((resolve, reject) => {
    let req = request.get('http://localhost:8000/ping')
      .set('Accept', 'application/json');

    req.end(function (error, response) {
      if(error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
};

let pollForStatus = (serverStatus) => {
  setTimeout(() => {
    getStatus()
      .then(() => {
        serverStatus.get('status').update(() => 'alive');
      })
      .catch(() => {
        serverStatus.get('status').update(() => 'dead');
      });
    pollForStatus(serverStatus);
  }, 5000);
};

export default (state) => {
  let serverStatus = state.get('state.serverStatus');

  pollForStatus(serverStatus);
};
