import React from 'react';
import PropTypes from 'prop-types';
import functional from 'react-functional';
import ImageSectionContainer from '../containers/ImageSectionContainer';
import ImageMainContainer from '../containers/ImageMainContainer';
import IntroductionContainer from '../containers/IntroductionContainer';
import ResultsContainer from '../containers/ResultsContainer';

function ImageCategorization(props) {
  return (
    <div>
      {props.showIntroduction && <IntroductionContainer />}
      {props.showCategorization && <ImageSectionContainer />}
      {props.showCategorization && <ImageMainContainer />}
      {props.showResults && <ResultsContainer />}
    </div>
  );
}

ImageCategorization.componentDidMount = (props) => props.addKeyListener();

ImageCategorization.componentWillUnmount = (props) => props.removeKeyListener();

ImageCategorization.propTypes = {
  showIntroduction: PropTypes.bool.isRequired,
  showCategorization: PropTypes.bool.isRequired,
  showResults: PropTypes.bool.isRequired,
  addKeyListener: PropTypes.func.isRequired,
  removeKeyListener: PropTypes.func.isRequired,
};

export default functional(ImageCategorization);
