import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Author } from '../model/author';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from './authors.service';

import { of } from 'rxjs';

describe('AuthorsService', () => {
  let authorsServiceSpy: jasmine.SpyObj<AuthorsService>;
  let authorsService: AuthorsService;
  let mockActivatedRoute;

  beforeEach(() => {
    authorsServiceSpy = jasmine.createSpyObj('AuthorsService', ['getAuthor', 'addAuthor']);
    mockActivatedRoute = { params: of({ id: '13' }) };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthorsService, useValue: authorsServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();

    authorsService = TestBed.inject(AuthorsService);
  });

  it('should successfully identify the author from a given ID', () => {
    const mockAuthor: Author = { id: 13, firstName: 'Test', lastName: 'Author' };
    authorsServiceSpy.getAuthor.and.returnValue(of(mockAuthor));

    authorsService.getAuthor('13').subscribe((author) => {
      expect(author).toEqual(mockAuthor);
      expect(authorsServiceSpy.getAuthor).toHaveBeenCalledWith('13');
    });
  });

  it('should create the author based on the given information', () => {
    const mockAuthor: Author = { id: 13, firstName: 'Test', lastName: 'Author' };
    authorsServiceSpy.addAuthor.and.returnValue(of(mockAuthor));

    authorsService.addAuthor(mockAuthor).subscribe((author) => {
      expect(author).toEqual(mockAuthor);
      expect(authorsServiceSpy.addAuthor).toHaveBeenCalledWith(mockAuthor);
    });
  });
});
