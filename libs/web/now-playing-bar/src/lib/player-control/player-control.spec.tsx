import { render } from '@testing-library/react';

import PlayerControl from './player-control';

describe('PlayerControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerControl />);
    expect(baseElement).toBeTruthy();
  });
});
