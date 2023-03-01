import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

interface IProps {
  mode: 'light' | 'dark' | 'system'
}

export default function Info({ mode }: IProps) {
  return (
    <div>
      <About />
      <Projects mode={mode} />
      <Experience />
    </div>
  );
}
