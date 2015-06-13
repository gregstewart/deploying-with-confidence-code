import BaseRoute from './base-route';
import RenderStatus from '../components/render-status';

class WelcomeRoute extends BaseRoute {
  getTitle() {
    return super.getTitle('Welcome!');
  }

  render() {
    let serverStatus = this.props.appState.get('state.serverStatus.status');

    return (
      <div className="container">
        <RenderStatus serverStatus={serverStatus} />
      </div>
    );
  }
}

export default WelcomeRoute;
