import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { availPage } from './avail.page';

describe('availPage', () => {
  let component: availPage;
  let fixture: ComponentFixture<availPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [availPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(availPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
