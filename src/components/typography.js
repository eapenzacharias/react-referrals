import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MyText = ({ text, type }) => {
  switch (type) {
    case 'h1':
      return <Typography variant="h3" sx={{ fontWeight: '600', margin: '0.5rem auto' }}>{text}</Typography>;
    case 'h4':
      return <Typography variant="h5" sx={{ fontWeight: '600', margin: '0.5rem auto' }}>{text}</Typography>;
    case 'link':
      return (
        <>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              fontWeight: '300',
              margin: '1rem 0',
              padding: '0.25rem',
              backgroundColor: '#f3f3f3',
              fontSize: '1rem',
            }}
          >
            {text}
          </Typography>
        </>
      );
    default:
      return <Typography variant="p" sx={{ fontWeight: '600' }}>{text}</Typography>;
  }
};

MyText.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MyText;
