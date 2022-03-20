import { TestBed } from '@angular/core/testing';
import { DatepickerComponent } from './datepicker.component';

describe('DatePicker', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DatepickerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'super-heroes'`, () => {
    const fixture = TestBed.createComponent(DatepickerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('super-heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DatepickerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'super-heroes app is running!'
    );
  });
});
