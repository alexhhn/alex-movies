import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';

afterEach(cleanup);

describe('FavoriteButton', () => {
  it('should render without throwing an error', () => {
    const id = '1';
    const isFavorite = true;
    const onClick = (id: string) => ({});

    const { getByTestId } = render(
      <FavoriteButton id={id} isFavorite={isFavorite} onClick={() => onClick(id)} />,
    );

    expect(getByTestId('favorite-btn').children.length).toBe(1);
  });
});
