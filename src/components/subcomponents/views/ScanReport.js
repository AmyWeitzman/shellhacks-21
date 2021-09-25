import React, { useState } from 'react';
import { saveReportToDB } from '../../../firebaseApp';
import './ScanReport.css';

import Report from '../Report';

const BASE_URL = "https://wave.webaim.org/api/request";
const API_KEY = process.env.REACT_APP_WAVE_API_KEY;

const Scan = ({ uid, url }) => {
  const [report, setReport] = useState();

  const scanWebsite = () => { 
    fetch(`${BASE_URL}?key=${API_KEY}&reporttype=2&url=${url}`)
    .then(res => res.json())
    .then(data => {
      var parsedData = data.categories;
      setReport(parsedData);
      saveReportToDB(uid, parsedData);
    });
  }

  return (
    <div id="scan-container">
      {report 
        ? <Report data={report} />
        : <button type="submit" class="btn btn-primary btn-block" id="scan-btn" onClick={scanWebsite}>Scan Website</button>
      }
    </div>
  );
};
      
export default Scan;