import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsJobsComponent } from './posts-jobs.component';

describe('PostsJobsComponent', () => {
  let component: PostsJobsComponent;
  let fixture: ComponentFixture<PostsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
