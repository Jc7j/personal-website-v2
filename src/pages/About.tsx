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
        <EmphasizedText underline strong fontSize="1.2em">
          *ABOUT ME
        </EmphasizedText>

        <p className="aboutMeText">
          Hey there! My name is Jason and I am a self-taught software engineer
          based in Las Vegas, NV. In late 2018, I{' '}
          <EmphasizedText strong underline color="#438c68">
            pursued my curiosity
          </EmphasizedText>{' '}
          for building things on the web. Currently, I am studying Data
          Structure & Algorithm topics while building side projects in{' '}
          <EmphasizedText strong underline color="#438c68">
            React, Typescript, & Node
          </EmphasizedText>
          . A few my interests include: sports, fitness, piano, video games and
          traveling.
        </p>

        <div className="aboutListContainer">
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
