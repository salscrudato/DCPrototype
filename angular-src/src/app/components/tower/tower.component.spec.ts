/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TowerComponent } from './tower.component';

describe('TowerComponent', () => {
  let component: TowerComponent;
  let fixture: ComponentFixture<TowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
