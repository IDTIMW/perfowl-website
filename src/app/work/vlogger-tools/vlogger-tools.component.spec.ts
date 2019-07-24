import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VloggerToolsComponent } from './vlogger-tools.component';

describe('VloggerToolsComponent', () => {
  let component: VloggerToolsComponent;
  let fixture: ComponentFixture<VloggerToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VloggerToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VloggerToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
