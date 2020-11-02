import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaDescansoPage } from './tela-descanso.page';

describe('TelaDescansoPage', () => {
  let component: TelaDescansoPage;
  let fixture: ComponentFixture<TelaDescansoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDescansoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaDescansoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
