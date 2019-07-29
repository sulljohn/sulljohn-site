/* eslint max-len:0 */

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Footer from './footer';
import experience from '../data/experience';
import skills from '../data/skills';

// TODO: modify the timeline; add the skills at the bottom; decide whether to replace the other link to LinkedIn

const Experience = () => {
  return (
    <div className="experienceContainer">
      <div className="timeLineContainer">
        <h1>Work Experience & Education</h1>
        <VerticalTimeline>
          {experience.data.reverse().map(item => (
            <VerticalTimelineElement
              key={item.title}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: `${item.iconBackground}`, color: `${item.iconColor}` }}
              // eslint-disable-next-line no-nested-ternary
              icon={item.icon === 'work' ? <WorkIcon />
                : item.icon === 'school' ? <SchoolIcon />
                  : <StarIcon />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
      <div data-aos="fade-in" className="skillContainer">
        <h1>Skills</h1>
        {skills.data.map(item => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <div className="skillCards">
              {item.list.map(item2 => (
                <Card key={item2.text}>
                  <CardContent>{item2.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div data-aos="fade-in">
        <div className="infoFooter">For more information about my experiences, please see my <a href="https://www.linkedin.com/in/john-sullivan-039349123" className="inquiry">LinkedIn</a> or <a href="mailto:js@sulljohn.com?Subject=Project%20Inquiry" target="_top" className="inquiry">Contact Me</a>.</div>
        <Footer />
      </div>
    </div>
  );
};

export default Experience;
