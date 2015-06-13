import request from 'superagent';
import Promise from 'bluebird';

let getStatus = (apiEndpoint) => {
  return new Promise((resolve, reject) => {
    let req = request.get(apiEndpoint + '/ping')
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

let sendRequest = (state) => {
  let uri = state.get('state.api.baseUri').deref();
  let serverStatus = state.get('state.serverStatus');

  return getStatus(uri)
    .then(() => {
      serverStatus.get('status').update(() => 'alive');
    })
    .catch(() => {
      serverStatus.get('status').update(() => 'dead');
    });
}

let pollForStatus = (state) => {
  setTimeout(() => {
    sendRequest(state);
    pollForStatus(state);
  }, 5000);
};

export default (state) => {
  if (process.env.ARCH_ENV === 'browser') {
    pollForStatus(state);
  } else {
    sendRequest(state);
  }
};
