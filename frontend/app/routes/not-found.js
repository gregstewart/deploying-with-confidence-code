import BaseRoute from './base-route';

class NotFoundRoute extends BaseRoute {
  getTitle() {
    return super.getTitle('Not Found');
  }

  render() {
    return (
      <div className="container">
        <h1>('Page Not Found'</h1>
      </div>
    );
  }
}

export default NotFoundRoute;
