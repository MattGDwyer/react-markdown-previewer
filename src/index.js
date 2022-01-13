import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles/main.scss';
import fCCLogo from '../src/assets/free-code-camp-brands.svg';
import githubLogo from '../src/assets/Github-Mark-32px.png';
import linkedinLogo from '../src/assets/linkedin-brands.svg';


const placeHolder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Header = () => {
  return (
    <header>
      {/*beginning to write react dom*/}
      <span><em><a href="https://www.freecodecamp.org/fcc315d258e-2a09-4d37-8211-d6355054806e" target="_blank"><img src={fCCLogo} alt="free code camp logo" /></a></em></span>
      <h1 className="title">React Markdown Previewer</h1>
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
      <div className="sub-header">
      <h2>Editor</h2>
      </div>
      <textarea id="editor" value={placeHolder}></textarea>
  </div>
    );
}
const Preview = () => {
  return (
  <div className="preview">
    <div className="sub-header">
    <h2>Preview</h2>
    </div>
    <div id="preview"></div>
  </div>
    );
}
const Footer = () => {
  return (
    <footer>
      <div className="my-name"><h3>Matthew Dwyer</h3></div>
            <nav className="nav">
        <ul>
          <li><a href="https://github.com/MattGDwyer" target="_blank"><img src={githubLogo} alt="github logo" /></a></li>
          <li><a href="https://www.linkedin.com/in/matthew-dwyer-5289a119b/" target="_blank"><img src={linkedinLogo} alt="linked in logo"/></a></li>
          <li><a href="https://www.freecodecamp.org/fcc315d258e-2a09-4d37-8211-d6355054806e" target="_blank"><img src={fCCLogo} alt="free code camp logo" /></a></li>
        </ul>
      </nav>
    </footer>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="app-box">
          <Editor />
          <Preview />
        </div>
        <Footer />
      </div>
    )
  }
};

ReactDOM.render(
    <App />,
  document.getElementById('app')
);