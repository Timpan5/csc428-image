import { connect } from 'react-redux';
import Results from '../components/Results';

function mapStateToProps(state) {
  return {
    results: state.get('sortedImages'),
  };
}

export default connect(mapStateToProps)(Results);
