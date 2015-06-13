const html = `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
      <title>{title}</title>
      <body>
      {body}
      </body>
    </html>`;

class BaseRoute extends React.Component {

  getLayoutTemplate () {
    return (context) => {
      return html
        .replace('{body}', context.body)
        .replace('{title}', context.title);
    }
  }

  getTitle(title) {
    if (title) {
      return `Arch App | ${title}`;
    } else {
      return "Arch App";
    }
  }
}

export default BaseRoute;
