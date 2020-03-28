import React from 'react';

import EmphasizedText from '../components/EmphasizedText';

import '../styles/About.css';

const About = () => {
  const renderListText = (role: string, company: string, dates?: string) => {
    return (
      <p className="list">
        <EmphasizedText strong underline color="#438c68">
          {role}
        </EmphasizedText>{' '}
        @ {company}{' '}
        {dates && <EmphasizedText boxedStyle>{dates}</EmphasizedText>}
      </p>
    );
  };
  return (
    <div id="aboutContainer" className="aboutContainer">
      <div className="aboutTextContainer">
        <p style={{ letterSpacing: '2px', marginBottom: '2em' }}>ABOUT ME</p>
        <p className="aboutMeText">
          Hey there! I'm a self-taught software developer, also an Army National
          Guardsmen, where I started to learn how to code in late 2018. From
          then, my curiousity took over and I continued to dive deeper in
          wanting to develop stunning projects and solving complex problems.
          Currently, I'm studying Data Structure & Algorithm topics while
          building side projects in React, Typescript & node.
        </p>
        <div className="listContainer">
          <span>
            <p>Software Development</p>
            {renderListText(
              'Software Developer',
              'Station Casinos Inc.',
              'Aug 2019 - Mar 2020'
            )}
            {renderListText(
              'Back-end Software Developer',
              'Chingu',
              'Mar 2019 - May 2019'
            )}
            {renderListText(
              'Front-end Software Developer',
              'Aided Trade',
              'Jan 2019 - Mar 2019'
            )}
            {renderListText(
              'Continous Self-Learning',
              'MOOC / Books / Mentors'
            )}
          </span>
          <span>
            <p>Community</p>
            {renderListText(
              'Open Source',
              'DigitalOcean HacktoberFest / GitHub',
              'Oct 2019 - Present'
            )}
            {renderListText(
              'Combat Medic',
              'Army National Guard',
              'Jun 2015 - Present'
            )}
            {renderListText(
              'Volunteer',
              'Get Outdoors Nevada',
              'May 2019 - Dec 2019'
            )}
            {renderListText(
              'Volunteer',
              'Couples for Christ - Foundation for Family and Life',
              '2015-2017'
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
