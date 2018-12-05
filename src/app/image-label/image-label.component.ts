
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

const URL = '.';

@Component({
  selector: 'app-image-label',
  templateUrl: './image-label.component.html',
  styleUrls: ['./image-label.component.css']
})
export class ImageLabelComponent implements OnInit {

  @Input() label: String;

  @Output() Deleted: EventEmitter<any> = new EventEmitter();
  @Output() TrainingImageAdded: EventEmitter<any> = new EventEmitter();


  public uploader: FileUploader = new FileUploader({ url: URL });

  src = [];
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (fileItem) => this.setImageSrc(fileItem);
  }

  deleteItem() {
    this.Deleted.emit();
  }


  setImageSrc(fileItem) {

    console.log(fileItem);
    const reader = new FileReader();

    // called once readAsDataURL is completed
    reader.onload = (event) => {
      this.src.push(event.target['result']);     };

    // read file as data url
    reader.readAsDataURL(fileItem.file.rawFile);
  }

  async onImageLoad(event) {
    const image = event.target;
    this.TrainingImageAdded.emit(image);

  }

}
