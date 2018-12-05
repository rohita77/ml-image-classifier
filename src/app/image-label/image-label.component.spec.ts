import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLabelComponent } from './image-label.component';

describe('ImageLabelComponent', () => {
  let component: ImageLabelComponent;
  let fixture: ComponentFixture<ImageLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
