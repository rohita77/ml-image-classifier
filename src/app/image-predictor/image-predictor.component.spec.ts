import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePredictorComponent } from './image-predictor.component';

describe('ImagePredictorComponent', () => {
  let component: ImagePredictorComponent;
  let fixture: ComponentFixture<ImagePredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
