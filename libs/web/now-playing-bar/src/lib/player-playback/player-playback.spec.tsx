import { render } from '@testing-library/react';

import PlayerPlayback from './player-playback';

describe('PlayerPlayback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerPlayback />);
    expect(baseElement).toBeTruthy();
  });
});
