import React from 'react';
import PropTypes from 'prop-types';
import { KEY_TO_CATEGORY_NAME } from '../constants/imageCategorizationConstants';
import { Dropbox } from 'dropbox';
import { v4 } from 'uuid';

const ACCESS_TOKEN = 'LwE7g1TIELAAAAAAAAAACEbfzIGvug0V2shO18EWsm7vLkMXLrbn4lRRw1ikaqmw';
const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

//score
//time
//results dump
//confirmation or no

function test() {
  dbx.filesUpload({
    path: '/CSC428/test.txt',
    contents: 'Text Content3',
    mode: { ".tag": "overwrite" },
    autorename: false
  }).then((data) => { console.log(data); })
    .catch((error) => { console.error(error); })
}

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
            <th>Category</th>
          </tr>
          {generateRows(results)}
        </tbody>
      </table>
  );
}

function Results(props) {
  return (
    <div id="results">
      <h2>Categorization Completed</h2>
      <div>Thank you for your participation</div>
      <button id="submit" onClick={test}>Submit Results</button>
      {generateResultsTable(props.results)}
    </div>
  );
}

Results.propTypes = {
  results: PropTypes.object.isRequired,
}

export default Results;
