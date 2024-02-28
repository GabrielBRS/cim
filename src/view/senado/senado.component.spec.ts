/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SenadoComponent } from './senado.component';

describe('SenadoComponent', () => {
  let component: SenadoComponent;
  let fixture: ComponentFixture<SenadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
