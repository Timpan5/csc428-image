import { connect } from 'react-redux';
import ImageMain from '../components/ImageMain';

function mapStateToProps(state) {
  return {
    mainImageIndex: state.get('mainImageIndex'),
  };
}

export default connect(mapStateToProps)(ImageMain);
