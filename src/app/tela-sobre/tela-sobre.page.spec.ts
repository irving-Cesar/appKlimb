import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaSobrePage } from './tela-sobre.page';

describe('TelaSobrePage', () => {
  let component: TelaSobrePage;
  let fixture: ComponentFixture<TelaSobrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSobrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaSobrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
