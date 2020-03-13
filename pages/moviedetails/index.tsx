import { NextPage } from 'next';

const MovieDetails: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>Movie Details</h1>
    <p>
      Movie details - in this view will display more detailed information about the movie such as
      plot, actos etc.
    </p>
  </>
);

MovieDetails.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default MovieDetails;
