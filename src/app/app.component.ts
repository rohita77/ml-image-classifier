import { Component, OnInit } from '@angular/core';

import * as ml5 from '../../node_modules/ml5/dist/ml5.min.js';

import {Classifier} from './classifier';

import { FileUploader } from 'ng2-file-upload';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = '.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ML Image Classifier';
  modelName = 'mobilenet';

  classifier = null;
  classifierReady = false;

  customClassifier = {
    modelName: 'mobilenet',
    model: null,
    modelLoaded: false,
    lossValue: -1,
    isTraining: false
  };

  newLabel: String = null;
  Submitted = false;


  public uploader: FileUploader = new FileUploader({ url: URL });

  /* Classes to train */
  customClasses = [];

  constructor() {
    this.loadClassifier();
  }

  async loadClassifier() {
    this.classifierReady = false;
    this.classifier = await new Classifier(this.modelName);
    await this.classifier.loadModel();
    console.log(this.classifier);
    console.log('classifier loaded....');
    this.classifierReady = true;
  }

  ngOnInit() {

  }

  addLabel() {
    this.Submitted = true;
    if (this.newLabel === '') {
      return;
    }

    // Check for dulplicates

    this.customClasses.splice(0, 0, this.newLabel);
    this.newLabel = '';
  }

  ShouldBeHidden(
    Valid: boolean,
    Pristine: boolean,
  ): boolean {
    if (this.Submitted) {
      return Valid;
    } else {
      return Valid || Pristine;
    }
  }

}
