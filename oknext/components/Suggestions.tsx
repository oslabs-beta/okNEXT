// import styles from '../styles/Suggestions.module.scss';
// import React, { useState, useEffect } from 'react';

// export default function Suggestions(props: any) {
//   // const fetchReport = async (e: any) => {
//   //   e.preventDefault();
//   //   const response = await fetch('../lhreport.json');
//   //   const lhr = await response.json();
//   //   console.log(lhr);
//   // };

//   const nonJSONReport = () => {
//     console.log(lhr);
//   };

//   /*
//   Performance breakdown
//       Audit	Weight
//       First Contentful Paint	10%
//       Speed Index	10%
//       Largest Contentful Paint	25%
//       Time to Interactive	10%
//       Total Blocking Time	30%
//       Cumulative Layout Shift	15%
//   */
//   //   const diagnostics = {};
//   //   for (const category of Object.keys(
//   //     lhr[props.currentEndpoint][lhr[props.currentEndpoint].length - 1][
//   //       'categories'
//   //     ]
//   //   )) {
//   //     const refs =
//   //       lhr[props.currentEndpoint][lhr[props.currentEndpoint].length - 1][
//   //         'categories'
//   //       ][category]['auditRefs'];
//   //     diagnostics[category] = refs
//   //       .map((ref) => {
//   //         const fullAudit = Object.assign(
//   //           {},
//   //           lhr[props.currentEndpoint][lhr[props.currentEndpoint].length - 1][
//   //             'audits'
//   //           ][ref.id]
//   //         );
//   //         if (fullAudit.score == null) return null;
//   //         // console.log(fullAudit.description)
//   //         fullAudit.link = fullAudit.description.match(/https:\/\/web.dev.*\//);
//   //         fullAudit.description = fullAudit.description.replace(/\[Learn.*/, '');
//   //         return fullAudit;
//   //       })
//   //       .filter((ref) => ref)
//   //       .sort((a, z) => a.score - z.score);
//   //   }

//   return (
//     <div>
//       <button onClick={nonJSONReport}>Display Suggestions</button>
//       {/* {diagnostics[props.currentMetric].map((data) => (
//         <DiagnosticsItem data={data} key={data.id} />
//       ))} */}
//     </div>
//   );
// }
