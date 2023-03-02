import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

interface IProps {
  mode: 'light' | 'dark' | 'system'
}

export default function Info({ mode }: IProps) {
  return (
    <div>
      <About />
      <Projects mode={mode} />
      <Skills />
    </div>
  );
}
