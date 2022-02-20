import { PipeCountPipe } from './pipe-count.pipe';

describe('PipeCountPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeCountPipe();
    expect(pipe).toBeTruthy();
  });
});
