import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermosPage } from './termos.page';

describe('TermosPage', () => {
  let component: TermosPage;
  let fixture: ComponentFixture<TermosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
