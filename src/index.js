import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles/main.scss';
import fCCLogo from '../dist/assets/free-code-camp-brands.svg';
import githubLogo from '../dist/assets/Github-Mark-32px.png';
import linkedinLogo from '../dist/assets/linkedin-brands.svg';
import { marked } from 'marked';
// Starting here:
/*
https://devcenter.heroku.com/articles/troubleshooting-node-deploys
i wonder if my devdependencies need to be dependencies
Could be Blank app log issue. This is most likely.
Could be too many dependencies at the same time
Might need to reinstall them half at a time
Could be that I need to run both scripts at once
research npm ls to see dependencies not using https
could be global params in scripts
Could be You can try to tweak the memory allowed for the node process by passing NODE_OPTIONS="__max_old_space_size=2560"
Could be:
After a whole day, and noticing there were some SSL problems with Heroku servers, i noticed i had the configuration config.force_ssl = true on my production.rb file.

So i just tried, and put config.force_ssl = false, and voilá, I'm back to life again!

Well, afterwards i've put it to true again, and still managed to publish again...

Guess this was an heroku thing


*/
marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

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
const Editor = (props) => {
  return (
    <div className="editor-box">
      <div className="sub-header">
      <h2>Editor</h2>
      </div>
      <textarea
      id="editor"
      onChange={props.onChange}
      type="text"
      value={props.markdown}
      />
  </div>
    );
  }
  const Preview = (props) => {
    return (
      <div className="preview-box">
        <div className="sub-header">
        <h2>Preview</h2>
        </div>
        <div
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer })
        }}
        id="preview"></div>
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
    this.state = {
      markdown: placeHolder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }


  render() {
    return (
      <div>
        <Header />
        <div className="app-box">
          <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
          <Preview markdown={this.state.markdown}/>
        </div>
        <Footer />
      </div>
    )
  }
};

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

ReactDOM.render(
  <App />,
  document.getElementById('app')
);