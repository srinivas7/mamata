import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it('tst', () => {
    expect(true).toBeTruthy();
  });
  it('should check checkEmpsExistance', ()=> {
    const aryLength = component.emps.length;
    const data = component.checkEmpsExistance('test');
    expect(aryLength ).toEqual(component.emps.length);
    expect(data).toBeFalse();
  })

  it('should check removeEmp', () => {
    const aryLength = component.emps.length;
    component.removeEmp();
    expect(aryLength - 1).toEqual(component.emps.length);
  });

  it('should check save when input is 1', () => {
    component.emps = ['test', 'john'];
    const aryLength = component.emps.length;
    component.save(1);
    expect(aryLength ).toEqual(component.emps.length);
  })

  it('should check save when input is 2', () => {
   
    component.save(2);
    expect(component.emps.indexOf('sample')).toEqual(-1);
  })
});
