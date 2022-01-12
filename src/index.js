import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles/main.scss';
import githubLogo from '../Github-Mark/PNG/Github-Mark-64px.png';
import linkedinLogo from '../linkedin-brands.svg';
import fCCLogo from '../linkedin-brands.svg';

const Header = () => {
  return (
    <header>
      {/*beginning to write react dom*/}
      <span><a href="https://www.freecodecamp.org/fcc315d258e-2a09-4d37-8211-d6355054806e" target="_blank"><img src={fCCLogo} alt="free code camp logo" /></a></span>
      <h1 className="title">React MARKDOWN Previewer</h1>
      <nav className="nav">
        <ul>
          <li><a href="https://github.com/MattGDwyer" target="_blank"><img src={githubLogo} alt="github logo" /></a></li>
          <li><a href="https://www.linkedin.com/in/matthew-dwyer-5289a119b/" target="_blank"><img src={linkedinLogo} alt="linked in logo"/></a></li>
        </ul>
      </nav>
    </header>
  );
};
const Editor = () => {
  return (
  <div className="editor">
      <h2>Editor</h2>
  </div>
    );
}
const Preview = () => {
  return (
  <div className="preview">
    <h2>Preview</h2>
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