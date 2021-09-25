import React from 'react';
import './Report.css';

import ReportChart from './ReportChart';

const Report = ({ data }) => {

  const getIssueItemColor = (issueCount) => {
    switch(true) {
      case (issueCount === 0):
        return "issue-item-green";
      case ((issueCount) > 0 && (issueCount <= 3)):
        return "issue-item-yellow";
      case (issueCount > 3):
        return "issue-item-red";
      default:
        return "";
    }
  }

  return (
    <div id="report-container">
      <h2 id="report-title">Website Accessibility Report</h2>
      <ReportChart data={data} />
      {
        Object.keys(data).map((category, i) => {
          const el = data[category];
          return (
            <div className="report-section" key={i}>
              <h4 className="category-item">
                <span className={`category-heading ${getIssueItemColor(el.count)}`}>{el.description} </span> 
                <span className="category-count">({el.count})</span>
              </h4>
              <ul>
              {
                Object.keys(el.items).map((item, i) => {
                  const issue = el.items[item];
                  return (
                    <li className="issue-item">{issue.description} ({issue.count})</li>
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