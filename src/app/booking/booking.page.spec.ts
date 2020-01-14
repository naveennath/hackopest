import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { bookingPage } from './booking.page';

describe('bookingPage', () => {
  let component: bookingPage;
  let fixture: ComponentFixture<bookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [bookingPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(bookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
