import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Button extends React.Component {
  render()
  {
    return(
<button class="contactme">
contact me
</button>
    );
  }
}
class Image extends React.Component {
  render()
  {
    return(
<div class="image" id="one" >
<Button/>
</div>
    );
  }
}
ReactDOM.render(<Image />, document.getElementById('body'));
