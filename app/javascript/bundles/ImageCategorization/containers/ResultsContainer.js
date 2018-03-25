import { connect } from 'react-redux';
import Results from '../components/Results';

function mapStateToProps(state) {
  return {
    results: state.get('sortedImages'),
    score: state.get('score'),
    confirmationMessage: state.get('confirmationMessage'),
  };
}

export default connect(mapStateToProps)(Results);
