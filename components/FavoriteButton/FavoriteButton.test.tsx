import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';

afterEach(cleanup);

describe('FavoriteButton', () => {
  it('should render without throwing an error', () => {
    const fakeId = '1';
    const isFavorite = true;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onClick = (id: string) => ({});

    const { getByTestId } = render(
      <FavoriteButton id={fakeId} isFavorite={isFavorite} onClick={() => onClick(fakeId)} />,
    );

    expect(getByTestId('favorite-btn').children.length).toBe(1);
  });
});
