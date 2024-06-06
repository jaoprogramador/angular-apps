import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPagesComponent } from './tasks-pages.component';

describe('TasksPagesComponent', () => {
  let component: TasksPagesComponent;
  let fixture: ComponentFixture<TasksPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
