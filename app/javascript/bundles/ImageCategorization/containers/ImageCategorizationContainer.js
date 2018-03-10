import { connect } from 'react-redux';
import ImageCategorization from '../components/ImageCategorization';
import * as actions from '../actions/imageCategorizationActionCreators';

const mapStateToProps = (state) => ({ name: state.name });

export default connect(mapStateToProps, actions)(ImageCategorization);
