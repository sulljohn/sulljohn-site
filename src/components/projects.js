/* eslint-disable max-len */
import React from 'react';
import Footer from './footer';

// TODO: cite others for group projects; add bridge text

const projects = [
  {
    title: 'Effects of Vulnerability Publications on Stock Returns\n',
    image: 'src/res/projects/1_NVD_Stocks.png',
    text: 'Recently, there have been many news stories detailing how computer vulnerabilities impact companies and their stock returns. Previous researchers analyzed these media reports and used event studies to test how these news releases about vulnerabilities affected stock returns. Their results were varied and may have been distorted by how they selected articles for their samples. Unlike this previous research, this study utilizes the National Vulnerability Database (NVD). The NVD has records of computer vulnerabilities since 1988, has more vulnerability samples than previous studies, and can be connected to public stocks. This study also uses an event study method to test if abnormal stock returns occur, but in this case focuses on the publication of vulnerabilities in the NVD. The results show that returns are a statistically significant -0.63% on average at 40 days after the announcement. A portfolio strategy is also applied that goes long in the stocks of companies with less vulnerabilities than the past average and goes short in those with more vulnerabilities. This study shows that this strategy could have earned a significant annual alpha (excess returns) of 13.45% per annum since 2002. These results suggest that vulnerability announcements have a gradual negative impact on stock returns.',
  },
  {
    title: 'National Vulnerability Database Trend Analysis',
    image: 'src/res/projects/2_NVD_Trends.png',
    text: 'Computer security is a growing international concern. The National Vulnerability Database (NVD) alone contains 100,000 descriptions of these computer vulnerabilities, of which 6,000 have been added in just the last three months (as of April 2018). Clearly, these vulnerabilities are a growing issue. The vulnerability reports in this valuable database consist of many data features, including scores and textual descriptions. This thesis contributes to the understanding and value of the NVD, with the goal of improving computer security. First, the presence of trends in this data was researched. Topic modeling revealed trends in the vulnerability description data. Second, the predictive power of the vulnerability features to determine whether a vulnerability had been exploited was tested. It was found that these features have significant predictive power. Combining these results, a model is presented that uses topics in the NVD to classify if a vulnerability has been exploited. At its peak performance, this model predicts whether a vulnerability has been exploited 85-90% of the time and can be adjusted to predict only true positives with 50-60% recall. It is possible that the methods of analysis set forth in this thesis can be used to prioritize the remediation of vulnerabilities before they are exploited and improve cybersecurity in general.\n',
  },
  {
    title: 'PassOn',
    image: 'src/res/projects/3_PassOn.jpg',
    text: 'text2',
  },
  {
    title: 'Machine Tool Simulator',
    image: 'src/res/projects/4_MTool_Sim.png',
    text: 'This team has developed a digital learning solution to supplement the machine shop’s training curriculum that students will be able to access remotely anytime and anywhere. This solution will improve how efficiently the machine tools are taught, reduce the time needed to educate each student, and possibly give more students time to learn in the machine shop. In addition, the team has delivered a code repository and documentation to the machine shop. In the future, this solution can be extended to other machines and courses at Thayer. Students will be able to apply their knowledge to their future engineering projects.',
  },
  {
    title: 'OneLace',
    image: 'src/res/projects/5_OneLace.png',
    text: 'We improved the traditional ice skate lacing system. The problem that we addressed was that children are unable to efficiently and securely tie their own ice skates due to lack of strength and dexterity. We focused on children between the ages of five and ten learning to skate and play hockey as the users, and their parents as purchasers of our product. We investigated the state of the art and did not find a universally acceptable solution. We wanted children to be able to put on their own skates properly with a product that maintains the aesthetic of the traditional skate that people like and also decreases the time it takes to secure the skate.',
  },
  {
    title: 'Bridge Project',
    image: 'src/res/projects/6_Bridge.jpg',
    text: 'text2',
  },
];

const Projects = () => {
  return (
    <div className="contentContainer">
      <div className="projects">
        <h1>Projects</h1>
        <div className="projectList">
          {projects.map(item => (
            <div className="project">
              <div className="projectImgContainer zoom2">
                <img src={item.image} alt={item.image} className="projectImg" />
              </div>
              <div className="projectTextContainer">
                <div className="projectTitle">{item.title}</div>
                <div className="projectBody">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="projectFooter">For more information on any of these projects, please <a href="mailto:js@sulljohn.com?Subject=Project%20Inquiry" target="_top" className="projectInquiry">Contact Me</a>.</div>
      <Footer />
    </div>
  );
};

export default Projects;
