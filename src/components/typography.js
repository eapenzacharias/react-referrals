import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MyText = ({ text, type }) => {
  switch (type) {
    case 'h1':
      return <Typography variant="h1" sx={{ fontWeight: '600' }}>{text}</Typography>;
    case 'h4':
      return <Typography variant="h5" sx={{ fontWeight: '600' }}>{text}</Typography>;
    default:
      return <Typography variant="p" sx={{ fontWeight: '600' }}>{text}</Typography>;
  }
};

MyText.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MyText;
