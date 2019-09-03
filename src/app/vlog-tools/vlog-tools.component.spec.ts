import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogToolsComponent } from './vlog-tools.component';

describe('VlogToolsComponent', () => {
  let component: VlogToolsComponent;
  let fixture: ComponentFixture<VlogToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VlogToolsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
