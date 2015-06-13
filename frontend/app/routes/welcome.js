import BaseRoute from './base-route';

class WelcomeRoute extends BaseRoute {
  renderStatus(status) {
    let responseStatus = status.deref();
    let url;

    console.log(responseStatus);
    switch (responseStatus) {
      case 'alive':
        url = 'http://www.bluetrain.ca/wp-content/uploads/its_alive.jpg';
        break;
      case 'dead':
        url = 'https://spiritualmusclehead.files.wordpress.com/2013/04/hes-dead-jim.jpg';
        break;
      default:
        url = 'http://sticktwiddlers.com/wp-content/uploads/2012/08/one-does-not-simply-keep-the-servers-online1.png';
        break;
    }

    return (
      <img src={url} />
    );
  }
  getTitle() {
    return super.getTitle('Welcome!');
  }

  render() {
    let serverStatus = this.props.appState.get('state.serverStatus.status');

    return (
      <div className="container">
        {this.renderStatus(serverStatus)}
      </div>
    );
  }
}

export default WelcomeRoute;
