'use client';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoadingWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.50)',
  zIndex: 9999
});

const Loading = () => {
  return (
    <LoadingWrapper>
      <CircularProgress color="success" size={60} thickness={4} />
    </LoadingWrapper>
  );
};

export default Loading;