import React from 'react';
import './Report.css';

const Report = ({ data }) => {
  return (
    <div id="report-container">
      <h2 id="report-title">Website Accessibility Report</h2>
      {
        Object.keys(data).map((category, i) => {
          const el = data[category];
          return (
            <div key={i}>
              <h4>{el.description} ({el.count})</h4>
              <ul>
              {
                Object.keys(el.items).map((item, i) => {
                  const issue = el.items[item];
                  return (
                    <li>{issue.description} ({issue.count})</li>
                  )
                })
              }
              </ul>
            </div>
          )
        })
      }
    </div>
  );
};
      
export default Report;