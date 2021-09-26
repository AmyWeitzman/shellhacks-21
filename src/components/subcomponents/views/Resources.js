import React from 'react';
import './Resources.css';

import ResourceLink from '../ResourceLink';

const Resources = () => {

  return (
    <div id="resources-container">
      <h2 id="resources-page-title">Web Accessbility Resources</h2>
      <ResourceLink url="https://www.w3.org/TR/WCAG21/" text="Web Content Accessibility Guidelines (WCAG) 2.1" />
      <ResourceLink url="https://www.a11yproject.com/checklist/" text="The A11Y Project: Checklist" />
      <ResourceLink url="https://www.ibm.com/able/requirements/requirements/" text="IBM Accesibility Requirements" />
      <ResourceLink url="https://wave.webaim.org/" text="WAVE Web Accesibility Evaluation Tool" />
      <ResourceLink url="https://contrastchecker.com/" text="Color Contrast Checker" />
      <ResourceLink url="https://www.toptal.com/designers/colorfilter" text="Toptal Color Blind Filter" />
    </div>
  );
};
      
export default Resources;