class RenderStatus extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.displayName = 'renderStatus';
  }

  render() {
    let responseStatus = this.props.serverStatus.deref();
    let url;

    switch (responseStatus) {
      case 'alive':
        url = 'http://www.bluetrain.ca/wp-content/uploads/its_alive.jpg';
        break;
      case 'dead':
        url = 'https://spiritualmusclehead.files.wordpress.com/2013/04/hes-dead-jim.jpg';
        break;
      default:
        url = 'http://cdn.meme.am/instances/500x/52426766.jpg';
        break;
    }

    return (
      <img src={url} />
    );
  }
}

export default RenderStatus;
