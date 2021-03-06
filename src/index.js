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
** i wonder if my devdependencies need to be dependencies
  tried both ways to fix this. Short answer is that they need to be moved to dependencies.
** added npm and node versions to "engines" object in package.json
  no dice
  checking versions are correct...
  tried changing node version to exact version. no dice.
** update package-lock using npm install
  ..had to force install node newest version. Found an error stating my node was too old.
  worried this will break something.
  got node and npm updated to latest version. Learned package lock dictates what version npm/node will be updated to.
  * test run deployment
    fail
  * try npm install again to update package lock
    done
  * then run on local server to see if I've broken anything else.
    found a sass environment error. ran npm rebuid node sass fixed it.
    running locally w/one resource not loading.
  so I am 0.0.1 version of npm away from where I need to be.
** compare procfiles with old projects
  no difference
** found node modules being tracked by grep. Not sure what grep is, but I"m gonna stop them being tracked.
  so at one point I tracked my node modules. I stopped, but apparently the record of them being tracked impacts the behavior of the build. I'm trying to filter the branch in order to not have to reset the head. We shall see if it works... no dice. I don't know this command I found, so I"m not gonna screw around with it.
** added node modules, pushed them, and now I'm going to try to remove them again.
  *** PUTTING A PIN IN THIS: removed them, but when I run grep there are still a bunch listed.
** address NPM error in build
** Brave new errors. Now webpack is cycling multiple times a second, each time it compiles a small bit more data. I'm thinking somehow node modules is being added still. Not sure. Need to start a new ticket.



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
      <div class="flexbox">
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