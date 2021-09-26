import React from 'react';
import "./ResourceLink.css";

const ResourceLink = ({ url, text }) => {
  return (
    <div className="resource-link">
      <a href={url} target="_blank" rel="noreferrer">{text}</a>
    </div>
  );
}

export default ResourceLink;