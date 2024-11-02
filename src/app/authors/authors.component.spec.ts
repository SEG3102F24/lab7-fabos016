import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { of } from 'rxjs';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  
  let navigateSpy: jasmine.Spy;
  let router: Router;
  let location: Location;
  let mockActivatedRoute;
  
  beforeEach(() => {
    mockActivatedRoute = { params: of({ id: '13' }) };

    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    navigateSpy = spyOn(router, 'navigate').and.callThrough();

    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update routing after form submission', async () => {
    const authorId = '13';
    component.submit(authorId);

    expect(navigateSpy).toHaveBeenCalledWith(['./', authorId], { relativeTo: component['route'] });
  });
});
