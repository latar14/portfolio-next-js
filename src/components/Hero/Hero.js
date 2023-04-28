import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Добро пожаловать <br/>
        на сайт моего портфолио
      </SectionTitle>
      <SectionText>
        Надо придумать текст...
      </SectionText>
      <Button onClick = {() => window.location = "https://google.com"} >Узнать больше</Button>
    </LeftSection>
  </Section>
);

export default Hero;