import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles/main.scss';

const Header = () => {
  return (
    <header>
      {/*beginning to write react dom*/}
      <h1 className="title">React MARKDOWN Previewer</h1>
      <nav className="nav">
        <ul>
          <li>Github</li>
          <li>linkedin</li>
        </ul>
      </nav>
    </header>
  );
};
const Editor = () => {
  return (
  <div className="editor">
      <h1>Editor</h1>
  </div>
    );
}
const Preview = () => {
  return (
  <div className="preview">
    <h1>Preview</h1>
  </div>
    );
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Editor />
        <Preview />
      </div>
    )
  }
};

ReactDOM.render(
    <App />,
  document.getElementById('app')
);