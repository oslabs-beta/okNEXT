
# okNEXT

Resources for Open Source Contributors: 
1. Auth0: https://www.npmjs.com/package/@auth0/nextjs-auth0#basic-setup 

# okNEXT Documentation

### Website/Dev-tool: [https://oknext-oslabs.vercel.app/](https://oknext-oslabs.vercel.app/)

## Overview

Next.js Dev-tool to monitor, display, store, and optimize Next.js websites. Power your Next.js Application during development with the okNext developer tool. 

1. **Core Web-Vitals:** Google Lighthouse audits performance, accessibility and search engine optimization of web pages. okNEXT handles your Next.js optimization.

2. **Save your reports:** Safely store the entire history of your website's analytics in a SQL database, and review them on your own time.

3. **Next.js Recommendations:** Get curated recommendations on how to optimize your Next.js website.

## Getting Started
To get started, it is very simple. Just enter any Next.js website endpoint and click 'Get Report'!

<img width="261" alt="enterendpoint" src="https://user-images.githubusercontent.com/106799452/204878211-85fdccbe-c582-4eff-bfbc-a1b6e4f7fc21.png">

#### Examples of Usable URLs (make sure you include FULL https):
```
https://localhost:3000/
https://localhost:3000/monitoring/monitor
https://localhost:3000/docs/gettingstarted
https://oknext-one.vercel.app/
https://oknext-oslabs.vercel.app/
```

## Understanding the Metrics

### Next.js Metrics

- **Next.js-hydration (Hydration Duration)** | Length of time it takes for the page to start and finish hydrating (in ms)

- **Next.js-route-change-to-render (Before Render Start)** | Length of time it takes for a page to start rendering after a route change (in ms)

- **Next.js-render (Before Hydration Duration)** | Length of time it takes for a page to finish render after a route change (in ms)

### Key Lighthouse Metrics

- **Performance** | Identifies areas that may lead to slow performance or reduced responsiveness, such as large images.

- **Accessibility** | Analyzes performance against accessibility best practices, including compatibility with assistive technology.

- **Best Practices** | Recommendations against the best practices in modern web development.

- **SEO** | Highlights potential improvements to improve search engine performance.

### Performance Web Vitals
- **First Contentful Paint (FCP)** | The time at which the first text or image is painted.

- **Time to Interactive (TTI)** | The amount of time it takes for the page to become fully interactive.

- **Speed Index (SI)** | How quickly the contents of a page are visibly populated.

- **Total Blocking Time (TBT)** | Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.

- **Largest Contentful Paint (LCP)** | The time at which the largest text or image is painted.

- **Cumulative Layout Shift (CLS)** | The movement of visible elements within the viewport.

## Technology Stack
- TypeScript, Next.js, React.js, Node.js, SASS/CSS, Jest, PostgreSQL, OAuth (Next.js-Auth0), Recharts.js, Google Lighthouse API

## Contributors
**Hua Liu** :star2: [Github](https://github.com/HuaJLiu17) | [LinkedIn](https://www.linkedin.com/in/huajliu17/)

**Lara Beesley** :star2: [Github](https://github.com/labeesley) | [LinkedIn](https://www.linkedin.com/in/beesleylara/)

**Vivian Odekhiran** :star2: [Github](https://github.com/vodekhir) | [LinkedIn](https://www.linkedin.com/in/vivian-odekhiran/)

**Phoebe Ermert** :star2: [Github](https://github.com/ermertP) | [LinkedIn](https://www.linkedin.com/in/phoebe-ermert/)

## How to Contribute
1. Clone the repo and make a new branch
2. Add a feature, fix a bug, or refactor some code :)
3. Make sure to lint your code!
4. Write/update tests for the changes you made, if necessary.
5. Run unit & integration tests and make sure all tests pass: npm test.
6. Open a Pull Request with a comprehensive description of changes to the dev branch.
7. Open a Pull Request to the docs and Contributors if necessary.

