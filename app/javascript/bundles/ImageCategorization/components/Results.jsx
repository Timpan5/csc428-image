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

function countByCategory(results) {
  const countCategoryA = results.filter((category) => category === 'a');
  const countCategoryS = results.filter((category) => category === 's');
  const countCategoryD = results.filter((category) => category === 'd');

  return {
    categoryA: countCategoryA.count(),
    categoryS: countCategoryS.count(),
    categoryD: countCategoryD.count(),
  };
}

function Results(props) {
  function submitHandler() {
    const counts = countByCategory(props.results);

    const uploadText = `Score: ${props.score}\nSeconds: ${props.secondsElapsed}\nConfirmation: ${props.confirmationMessage}\nCounts: ${JSON.stringify(counts)}\nResults: ${props.results}`;

    dbx.filesUpload({
      path: `/CSC428/${v4()}.txt`,
      contents: uploadText,
      mode: { ".tag": "overwrite" },
      autorename: false
    }).then((data) => { console.log(data); alert('Submit Success'); })
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
  secondsElapsed: PropTypes.number.isRequired,
}

export default Results;
