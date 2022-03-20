import { TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FilterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'super-heroes'`, () => {
    const fixture = TestBed.createComponent(FilterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('super-heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FilterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'super-heroes app is running!'
    );
  });
});
