import React from 'react';
import './Report.css';

import ReportChart from './ReportChart';

const Report = ({ data }) => {

  const getIssueItemLevel = (issueCount) => {
    switch(true) {
      case (issueCount === 0):
        return ["fa-check-square", "issue-item-green"];
      case ((issueCount) > 0 && (issueCount <= 3)):
        return ["fa-exclamation-triangle", "issue-item-yellow"];
      case (issueCount > 3):
        return ["fa-exclamation-circle", "issue-item-red"];
      default:
        return ["", ""];
    }
  }

  return (
    <div id="report-container">
      <h2 id="report-title">Website Accessibility Report</h2>
      <ReportChart data={data} />
      {
        Object.keys(data).map((category, i) => {
          const el = data[category];
          const [issueIcon, issueColor] = getIssueItemLevel(el.count);
          return (
            <div className="report-section" key={i}>
              <h4 className="category-item">
                <i className={`fa ${issueIcon} ${issueColor} issue-icon`}></i>
                <span className={`category-heading`}>{el.description} </span> 
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