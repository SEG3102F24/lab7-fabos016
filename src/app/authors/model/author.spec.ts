import { Author } from './author';

describe('Author', () => {
  it('should create an instance', () => {
    expect(new Author(1, 'test', 'test')).toBeTruthy();
  });

  it('should create an instance of Author using the correct attributes', () => {
    const author = new Author(1, 'Test', 'Author');
    expect(author.id).toBe(1);
    expect(author.firstName).toBe('Test');
    expect(author.lastName).toBe('Author');
  });
});
