import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Imagebutton extends React.Component {
  render() {
    return (
      <input type="image" className="square" width="24" height="24" src={this.props.value} alt=" " />
    );
  }
}
class Text3 extends React.Component {
  render() {
    return (
      <h1 className="smalltext">
Click one of the social icons below to switch <br />between card or click Contact Me link to show<br /> the contact from card.<br />
Make sure you're running this experiment in <br />the latest Chrome browser.
      </h1>
    );
  }
}
class Text2 extends React.Component {
  render() {
    return (
      <h1 className="social">
Social Card
      </h1>
    );
  }
}
class Text1 extends React.Component {
  render() {
    return (
      <h1 className="personal">
Personal
      </h1>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <button className="contactme">
        {this.props.value}
      </button>
    );
  }
}
class Image extends React.Component {
  render() {
    return (
      <div className="image" id="one" >
        <Button value="CONTACT ME" />
        <Text1 />
        <Text2 />
        <Text3 />
        <Imagebutton value="https://cdn.dribbble.com/assets/dribbble-ball-1col-dnld-e29e0436f93d2f9c430fde5f3da66f94493fdca66351408ab0f96e2ec518ab17.png" />
        <Imagebutton value="https://image.flaticon.com/icons/png/512/34/34364.png" />
        <Imagebutton value="http://alumni.iitd.ac.in/images/in.png" />
        <Imagebutton value="https://png.icons8.com/metro/1600/twitter.png" />
      </div>
    );
  }
}
ReactDOM.render(<Image />, document.getElementById('body'));
