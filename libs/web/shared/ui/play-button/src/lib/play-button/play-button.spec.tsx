import { render } from '@testing-library/react';

import PlayButton from './play-button';

describe('PlayButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayButton />);
    expect(baseElement).toBeTruthy();
  });
});
