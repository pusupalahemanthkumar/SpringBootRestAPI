import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsGeneralComponent } from './posts-general.component';

describe('PostsGeneralComponent', () => {
  let component: PostsGeneralComponent;
  let fixture: ComponentFixture<PostsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
