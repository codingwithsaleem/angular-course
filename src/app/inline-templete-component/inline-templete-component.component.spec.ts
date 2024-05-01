import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTempleteComponentComponent } from './inline-templete-component.component';

describe('InlineTempleteComponentComponent', () => {
  let component: InlineTempleteComponentComponent;
  let fixture: ComponentFixture<InlineTempleteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTempleteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTempleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
