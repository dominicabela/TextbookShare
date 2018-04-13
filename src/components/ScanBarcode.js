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
<div className="scanPage">
  <h2>SCAN BARCODE</h2>
<div className="scanBar" id="scanBar">
    <WebcamCapture />
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
    var objTo = document.getElementById('scanBar');
    objTo.appendChild(image);


  };

  render() {
    return (

      <div className="camera">
        <Webcam
          className="webcam"
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />
        <div className="scanBtns">
          <button id="capture" onClick={this.capture}>Capture Photo</button>
          <h1 id="or">OR</h1>
          <div id="upload">
          <input type="file" id="file" name="file" />
          <label for="file">Choose a file</label>
          </div>
        </div>
      </div>
    );
  }
}


  export default CameraScan;
