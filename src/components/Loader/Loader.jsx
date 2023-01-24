import GridLoader from 'react-spinners/GridLoader';

import PropTypes from 'prop-types';

import { Spinner } from './Loader.styled';

export default function Loader({ loading }) {
  return (
    <Spinner>
      <GridLoader color="#3f51b5" loading={loading} size={120} />
    </Spinner>
  );
}
Loader.propTypes = {
  loading: PropTypes.bool,
};

