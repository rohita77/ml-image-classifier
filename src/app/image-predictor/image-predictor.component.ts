import { Component, OnInit, Input } from '@angular/core';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-image-predictor',
  templateUrl: './image-predictor.component.html',
  styleUrls: ['./image-predictor.component.css']
})
export class ImagePredictorComponent implements OnInit {

  @Input() classifier;
  @Input() image;

  src = '../../assets/images/cat.jpg';
  results = [{
    className : null,
    probability: null,
  }];

  inferenceTime = null;

  IMAGE_SIZE = 224;

  ngOnInit() {
    this.setImageSrc();
  }

  async classifyImage(image) {
    image.width = this.IMAGE_SIZE;
    image.height = this.IMAGE_SIZE;

    const startTime = performance.now();
    this.results = await this.classifier.classifyImage(image);
    this.inferenceTime = Math.floor(performance.now() - startTime);

  }

  async setImageSrc() {
    const reader = new FileReader();

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.src = event.target['result'];
    };

    reader.readAsDataURL(this.image.rawFile); // read file as data url
  }
}
