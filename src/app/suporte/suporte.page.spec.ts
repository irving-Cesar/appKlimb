import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuportePage } from './suporte.page';

describe('SuportePage', () => {
  let component: SuportePage;
  let fixture: ComponentFixture<SuportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
