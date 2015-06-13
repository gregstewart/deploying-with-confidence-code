import arch from 'arch';

import initObservers from './observers/init';

import welcome from './routes/welcome';
import notFound from './routes/not-found';

let initialState = {
  api: {
    baseUri: 'http://localhost:8000'
  },
  serverStatus: {
    status: null
  }
};

let app = arch.application.create({
  getInitialState() {
    return initialState;
  },

  start(appState) {
    initObservers(appState);
  },

  routes() {
    let page = arch.routes.page;

    return arch.routes.define(
      page('/', welcome),
      page('*', notFound)
    );
  }
});

export default app;
