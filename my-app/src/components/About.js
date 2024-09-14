import React from 'react';
import Card from './Card';
import { useEffect } from 'react';
import Team from './Team';
import TeamClassBassed from './TeamClassBassed';

const About = () => {

  return (
   <>
   <Team Name={"Rahul"} Location={"New Delhi"} Contact={"+91 3837592047"} src={'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'}/>
   <TeamClassBassed/>
   </>
  );
};

export default About;
