# [Ally](https://amyweitzman.github.io/shellhacks-21/)


Did you know that 3.8 million U.S. adults aged 21-64 are blind or have trouble seeing, even with glasses? Or that more than 466 million people worldwide have a hearing disability? Unfortunately, 98% of the world's top one million websites don't offer full accessibility and 71% of website visitors with disabilities will leave a website that is not accessible. With technology being a prominent feature of everyday life, it is crucial that people develop websites that adhere to accessibility standards and guidelines so that everyone has an opportunity to access content on the web. However, much of the tools and information that is available to help developers ensure that their sites contain the necessary accessibility features is not well known and requires people to use multiple tools. Thus, it is easy for developers to skip this crucial development step. But, since the internet is necessary for everyone's lives, developers should be an ally for the A11Y community. I created a website that eases this process and provides centralized tools and resources for developers to check the accessibility of their site and receive guidance on how to fix the issues. 

Ally is a web application that helps developers find the accessibility issues in their site and fix them using provided guidance and resources. Ally allows users to create an account and run a scan on their website URL to check against Web Content Accessibility Guideline (WCAG) errors. After the scan, the user will be provided with a report of accessibility errors, categorized by type, along with brief explanations of the specific issues. The categories are color-coded based on how many issues were found in that category to alert the user to areas that need more work than others. The user can also view a breakdown the errors by category to see which categories they are doing better or worse in to guide their future website updates. When the report is generated, the user can also receive an email sent via Courier. If I had more time, I would also include a way for users to view past reports and see metrics about how their site accessibility is improving. Finally, there is a page with a list of resources to help developers fix accessibility issues. Overall, the website includes many accessibility features itself, including contrasting colors, symbols along with text and color, and patterns on the report chart for those who are colorblind.

The web app was built using React, Bootstrap, Chart.js, Firebase, the [WAVE Web Accessibility API](https://wave.webaim.org/), and the Courier API.

<img src="https://github.com/AmyWeitzman/shellhacks-21/blob/dev/sign-up.PNG" alt="Sign up page">

<img src="https://github.com/AmyWeitzman/shellhacks-21/blob/dev/sign-in.PNG" alt="Sign in page">

<img src="https://github.com/AmyWeitzman/shellhacks-21/blob/dev/profile.PNG" alt="Profile page">

<img src="https://github.com/AmyWeitzman/shellhacks-21/blob/dev/scan.PNG" alt="Website scan page">

<img src="https://github.com/AmyWeitzman/shellhacks-21/blob/dev/scan-report-1.PNG" alt="Website Accessibility Report: Chart breakdown of issues by category">

<img src="https://github.com/AmyWeitzman/shellhacks-21/blob/dev/scan-report-2.PNG" alt="Website Accessibility Report: List of accessibility issues">

This project was created as part of ShallHacks 2021.

[Source: CrownPeak](https://www.crownpeak.com/blog/accessibility-ada/the-ultimate-list-of-web-accessibility-and-ada-statistics)
