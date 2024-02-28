/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LegislacaoComponent } from './legislacao.component';

describe('LegislacaoComponent', () => {
  let component: LegislacaoComponent;
  let fixture: ComponentFixture<LegislacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
