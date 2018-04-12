import React from 'react';
import SignInForm from './SignIn';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import '/Users/BirBird/Documents/Documents - Brittany’s MacBook Pro/TextbookShare/src/res/css/index.css';
import '/Users/BirBird/Documents/Documents - Brittany’s MacBook Pro/TextbookShare/src/res/css/ScanBarcode.css';
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
      <section id="container" class="container">
        <div class="controls">
            <fieldset class="input-group">
                <button class="stop">Stop</button>
            </fieldset>
            <fieldset class="reader-config-group">
                <label>
                    <span>Barcode-Type</span>
                    <select name="decoder_readers">
                        <option value="code_128" selected="selected">Code 128</option>
                        <option value="code_39">Code 39</option>
                        <option value="code_39_vin">Code 39 VIN</option>
                        <option value="ean">EAN</option>
                        <option value="ean_extended">EAN-extended</option>
                        <option value="ean_8">EAN-8</option>
                        <option value="upc">UPC</option>
                        <option value="upc_e">UPC-E</option>
                        <option value="codabar">Codabar</option>
                        <option value="i2of5">Interleaved 2 of 5</option>
                        <option value="2of5">Standard 2 of 5</option>
                        <option value="code_93">Code 93</option>
                    </select>
                </label>
                <label>
                    <span>Resolution (width)</span>
                    <select name="input-stream_constraints">
                        <option value="320x240">320px</option>
                        <option selected="selected" value="640x480">640px</option>
                        <option value="800x600">800px</option>
                        <option value="1280x720">1280px</option>
                        <option value="1600x960">1600px</option>
                        <option value="1920x1080">1920px</option>
                    </select>
                </label>
                <label>
                    <span>Patch-Size</span>
                    <select name="locator_patch-size">
                        <option value="x-small">x-small</option>
                        <option value="small">small</option>
                        <option selected="selected" value="medium">medium</option>
                        <option value="large">large</option>
                        <option value="x-large">x-large</option>
                    </select>
                </label>
                <label>
                    <span>Half-Sample</span>
                    <input type="checkbox" checked="checked" name="locator_half-sample" />
                </label>
                <label>
                    <span>Workers</span>
                    <select name="numOfWorkers">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected="selected" value="4">4</option>
                        <option value="8">8</option>
                    </select>
                </label>
                <label>
                    <span>Camera</span>
                    <select name="input-stream_constraints" id="deviceSelection">
                    </select>
                </label>
                <label>
                    <span>Zoom</span>
                    <select name="settings_zoom"></select>
                </label>
                <label>
                    <span>Torch</span>
                    <input type="checkbox" name="settings_torch" />
                </label>
            </fieldset>
        </div>
      <div id="result_strip">
        <ul class="thumbnails"></ul>
        <ul class="collector"></ul>
      </div>
      <div id="interactive" class="viewport"></div>
    </section>

      // <div className="camera">
      //   <Webcam
      //     audio={false}
      //     height={350}
      //     ref={this.setRef}
      //     screenshotFormat="image/jpeg"
      //     width={350}
      //   />
      //   <button onClick={this.capture}>Capture Photo</button>
      // </div>
    );
  }
}


  export default CameraScan;
