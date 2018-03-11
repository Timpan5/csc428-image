import { connect } from 'react-redux';
import ImageSection from '../components/ImageSection';
import { setMainImageIndex } from '../actions/imageCategorizationActionCreators';

const actions = {
  setMainImageIndex,
};

function mapStateToProps(state) {
  return {
    topImageIndex: state.get('topImageIndex') || null,
    middleImageIndex: state.get('middleImageIndex') || null,
    bottomImageIndex: state.get('bottomImageIndex') || null,
  };
}

export default connect(mapStateToProps, actions)(ImageSection);
