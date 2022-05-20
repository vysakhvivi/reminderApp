import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteremComponent } from './deleterem.component';

describe('DeleteremComponent', () => {
  let component: DeleteremComponent;
  let fixture: ComponentFixture<DeleteremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
