import { connect } from 'react-redux';
import ImageCategorization from '../components/ImageCategorization';
import { setInitialImages } from '../actions/imageCategorizationActionCreators';

const actions = { setInitialImages };

export default connect(null, actions)(ImageCategorization);
