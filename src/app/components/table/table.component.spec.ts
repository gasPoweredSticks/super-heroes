import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'super-heroes'`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('super-heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'super-heroes app is running!'
    );
  });
});
