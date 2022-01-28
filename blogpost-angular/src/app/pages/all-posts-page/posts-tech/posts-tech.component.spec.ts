import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTechComponent } from './posts-tech.component';

describe('PostsTechComponent', () => {
  let component: PostsTechComponent;
  let fixture: ComponentFixture<PostsTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
