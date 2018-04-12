import React from 'react';
import SignInForm from './SignIn';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import '../res/css/index.css';
import '../res/css/ScanBarcode.css';
import Webcam from 'react-webcam';
import ImageFilter from 'react-image-filter';


const CameraScan = () =>
<div>
  <div id="scanner">
    <WebcamCapture />
  </div>
  <div id="upload">
  <input type="file" id="file" name="file" />
  <label for="file">Choose a file</label>
  </div>
</div>

class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    var image = new Image();
    image.src = imageSrc;
    image.setAttribute('id', 'newImg');
    var objTo = document.getElementById('scanner');
    objTo.appendChild(image);


  };

  render() {
    return (

      <div className="camera">
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <button onClick={this.capture}>Capture Photo</button>
      </div>
    );
  }
}


  export default CameraScan;
