import React from 'react';
import PropTypes from 'prop-types';
import { KEY_TO_CATEGORY_NAME } from '../constants/imageCategorizationConstants';
import { Dropbox } from 'dropbox';
import { v4 } from 'uuid';

const ACCESS_TOKEN = 'LwE7g1TIELAAAAAAAAAACEbfzIGvug0V2shO18EWsm7vLkMXLrbn4lRRw1ikaqmw';
const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

function generateRows(results) {
  return results.map(
    (category, imgIndex) => (<tr key={imgIndex}><td>{imgIndex}</td><td>{KEY_TO_CATEGORY_NAME[category]}</td></tr>)
  ).toArray();
}

function generateResultsTable(results) {
  return (
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Image Index</th>
            <th>Your Categorization</th>
          </tr>
          {generateRows(results)}
        </tbody>
      </table>
  );
}

function Results(props) {
  //score
  //time
  //results dump
  //confirmation or no

  function submitHandler() {
    const uploadText = `Score: ${props.score}\nConfirmation: ${props.confirmationMessage}\n`;

    dbx.filesUpload({
      path: '/CSC428/test.txt',
      contents: uploadText,
      mode: { ".tag": "overwrite" },
      autorename: false
    }).then((data) => { console.log(data); })
      .catch((error) => { console.error(error); })
  }

  return (
    <div id="results">
      <h2>Categorization Completed</h2>
      <div>Thank you for your participation</div>
      <div>{`Your Score: ${props.score} out of 30`}</div>
      <button id="submit" onClick={submitHandler}>Submit Results</button>
      <h4>Responses</h4>
      <div>Correct Responses:</div>
      <div>&nbsp;{'Image Index < 11 == Trees'}</div>
      <div>&nbsp;{'Image Index >= 11 && < 21 == People'}</div>
      <div>&nbsp;{'Image Index >= 21 == Other'}</div>
      {generateResultsTable(props.results)}
    </div>
  );
}

Results.propTypes = {
  results: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  confirmationMessage: PropTypes.bool.isRequired,
}

export default Results;
