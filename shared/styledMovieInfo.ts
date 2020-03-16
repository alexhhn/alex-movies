import styled from 'styled-components';
import devices from 'shared/media';
import { grey } from 'shared/colors';
import { typeScale } from './typography';

interface Props {
  large?: boolean;
}

export const Score = styled.div<Props>`
  width: ${props => (props.large ? '100px' : '38px')};
  height: ${props => (props.large ? '100px' : '38px')};

  @media ${devices.mobileOnly} {
    width: ${props => (props.large ? '50px' : '38px')};
    height: ${props => (props.large ? '50px' : '38px')};
  }

  border: 1px solid #d2d2d2;
  border-radius: ${props => (props.large ? '0' : '50%')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  strong {
    margin: 0;
    font-size: ${props => (props.large ? '42px' : '16px')};

    @media ${devices.mobileOnly} {
      font-size: ${props => (props.large ? '22px' : '14px')};
    }
  }
`;

export const Description = styled.p<Props>`
  font-size: ${props => (props.large ? '18px' : '14px')};
  ${props => !props.large && 'max-height: 100px'};
  color: ${grey.dark};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => (props.large ? '10' : '3')};
  line-height: 1.5em;
  overflow: hidden;

  @media ${devices.mobileOnly} {
    display: none;
  }
`;

export const Stats = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  margin: ${props => (props.large ? '12px 0 48px' : '12px 0 24px')};
  font-size: ${props => (props.large ? '18px' : '16px')};

  pre {
    margin: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${devices.mobileOnly} {
    margin: ${props => (props.large ? '12px 0 32px' : '12px 0 24px')};
  }
`;

export const Genres = styled.p<Props>`
  font-size: ${props => (props.large ? '18px' : '14px')};
  font-weight: 500;
  font-style: italic;
`;

export const Actors = styled.p<Props>`
  font-size: ${props => (props.large ? '18px' : '12px')};
`;

export const Year = styled.pre<Props>`
  font-size: ${props => (props.large ? '18px' : '12px')};
`;

export const ContentRating = styled.pre<Props>`
  font-size: ${props => (props.large ? '18px' : '12px')};
  text-decoration: underline;
`;

export const Duration = styled.pre<Props>`
  font-size: ${props => props.large && '18px'};
  font-style: italic;
`;

export const IMDBRating = styled.pre<Props>`
  font-size: ${typeScale.helperText};
`;
