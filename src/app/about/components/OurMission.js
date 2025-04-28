"use client";

import React from 'react';  
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import icon1 from '@/assets/about/icon-1.png';
import icon2 from '@/assets/about/icon-2.png';
import icon3 from '@/assets/about/icon-3.png';
import icon4 from '@/assets/about/icon-4.png';
import Image from '@/components/atoms/Image.js';
const StyledSection = styled('section')(({ theme }) => ({
  backgroundColor: '#E5DFDB',
  padding: theme.spacing(10, 0),
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  padding: '0 48px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '0 24px',
  },
}));

const MissionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Test Söhne", sans-serif',
  fontWeight: 900,
  fontSize: '105px',
  lineHeight: '0.885em',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: '#455927',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    fontSize: '60px',
  },
}));

const MissionCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(4.5),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '163px',
  borderRadius: theme.shape.borderRadius,
  minHeight: '280px',
}));

const TextCard = styled(Box)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '280px',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Test Söhne", sans-serif',
  fontWeight: 900,
  fontSize: '36px',
  lineHeight: '0.885em',
  textTransform: 'uppercase',
  color: '#000000',
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: '"Aeonik TRIAL", sans-serif',
  fontSize: '20px',
  lineHeight: '1.4em',
  color: '#606060',
}));

const IntroText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Aeonik TRIAL", sans-serif',
  fontSize: '20px',
  lineHeight: '1.4em',
  color: '#606060',
}));

const CallToAction = styled(Typography)(({ theme }) => ({
  fontFamily: '"Aeonik TRIAL", sans-serif',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '1.4em',
  color: '#000000',
  textAlign: 'center',
}));

const missionItems = [
  {
    type: 'text',
    content: 'At our tattoo studio, we are committed to artistry and expression. Our mission is to provide a safe, creative space where you can bring your visions to life through exceptional tattoos. We uphold the highest standards of quality and care, ensuring each piece reflects your individuality and our dedication.',
  },
  {
    type: 'card',
    title: 'Empower Expression',
    description: 'We empower individuals to express their unique stories through the art of tattooing.',
    icon: icon1.src
  },
  {
    type: 'card',
    title: 'Craft with Care',
    description: 'To provide a safe, welcoming environment where art meets precision in every tattoo.',
    icon: icon2.src
  },
  {
    type: 'card',
    title: 'Innovate Artistry',
    description: 'We push the boundaries of creativity, transforming your ideas into exceptional tattoo art.',
    icon: icon3.src
  },
  {
    type: 'card',
    title: 'Maintain Integrity',
    description: 'Dedicated to maintaining the highest standards of hygiene and ethical practices at all times.',
    icon: icon4.src
  },
  
];

const OurMission = () => {
  return (
    <StyledSection>
      <ContentWrapper>
        <MissionTitle>Our Mission</MissionTitle>
        
        <Grid container spacing={4}>
          {missionItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              {item.type === 'text' ? (
                <TextCard>
                  {item.isCallToAction ? (
                    <CallToAction>{item.content}</CallToAction>
                  ) : (
                    <IntroText>{item.content}</IntroText>
                  )}
                </TextCard>
              ) : (
                <MissionCard>
                  <Box sx={{ fontSize: '48px', textAlign: 'center' }}>
                    <Image src={item.icon} alt={item.title} width={150} height={48} />
                  </Box>
                  <Box>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </Box>
                </MissionCard>
              )}
            </Grid>
          ))}
        </Grid>
      </ContentWrapper>
    </StyledSection>
  );
};

export default OurMission; 