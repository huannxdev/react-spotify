import { render } from '@testing-library/react';

import SpotifyRoute from './spotify-route';

describe('SpotifyRoute', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpotifyRoute />);
    expect(baseElement).toBeTruthy();
  });
});
