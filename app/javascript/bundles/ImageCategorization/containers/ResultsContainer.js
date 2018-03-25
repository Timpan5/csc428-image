import { connect } from 'react-redux';
import Results from '../components/Results';

function mapStateToProps(state) {
  return {
    results: state.get('sortedImages'),
    score: state.get('score'),
    confirmationMessage: state.get('confirmationMessage'),
    beginTime: state.get('beginTime'),
    endTime: state.get('endTime'),
  };
}

function mergeProps(stateProps) {
  const secondsElapsed = (stateProps.endTime - stateProps.beginTime) / 1000;

  return {
    results: stateProps.results,
    score: stateProps.score,
    confirmationMessage: stateProps.confirmationMessage,
    secondsElapsed,
  };
}

export default connect(mapStateToProps, null, mergeProps)(Results);
