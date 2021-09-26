import React, { useState } from 'react';
import { saveReportToDB } from '../../../firebaseApp';
import { sendNotification } from '../../../courierService';
import './ScanReport.css';

import Report from '../Report';

const BASE_URL = "https://wave.webaim.org/api/request";
const API_KEY = process.env.REACT_APP_WAVE_API_KEY;

const Scan = ({ uid, email, url }) => {
  const [report, setReport] = useState();
  const [isScanning, setIsScanning] = useState(false);

  const scanWebsite = () => { 
    setIsScanning(true);
    fetch(`${BASE_URL}?key=${API_KEY}&reporttype=2&url=${url}`)
    .then(res => {
      setIsScanning(false);
      return res.json();
    })
    .then(data => {
      var parsedData = data.categories;
      setReport(parsedData);
      saveReportToDB(uid, parsedData);
      sendNotification(uid, email, url, JSON.stringify(parsedData));
    });
  }

  return (
    <div id="scan-container">
      { report 
        ? <Report data={report} />
        : <button type="submit" class="btn btn-primary btn-block" id="scan-btn" onClick={scanWebsite} disabled={isScanning}>Scan Website</button>
      }
      { isScanning
        ? <p id="scanning-message">Scanning...</p>
        : ""
      }
    </div>
  );
};
      
export default Scan;