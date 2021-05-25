import { render } from '@testing-library/react';

import NowPlayingBar from './now-playing-bar';

describe('NowPlayingBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NowPlayingBar />);
    expect(baseElement).toBeTruthy();
  });
});
