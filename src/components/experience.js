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
          {experience.data.map(item => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: `${item.iconBackground}`, color: `${item.iconColor}` }}
              // eslint-disable-next-line no-nested-ternary
              icon={item.icon === 'work' ? <WorkIcon />
                : item.icon === 'school' ? <SchoolIcon />
                  : <StarIcon />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
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
        <div className="skillCards">
          {skills.data.map(item => (
            <Card>
              <CardContent>{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer data-aos="fade-in" />
    </div>
  );
};

export default Experience;
