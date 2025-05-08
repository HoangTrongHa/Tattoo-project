import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import { useTheme, useMediaQuery } from '@mui/material'
import Typography from '@mui/material/Typography'

const StyledChildContent = styled(Typography)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#000',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  },
}))

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'active'
})(({ active, theme }) => ({
  backgroundColor: active ? '#fff' : 'transparent',
  boxShadow: 'none',
  maxWidth: '160px',
  margin: '0 16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '140px',
    margin: '0 8px',
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: '120px',
    margin: '0 4px',
  },
  '&:hover': {
    backgroundColor: '#fff',
    transform: 'translateY(-5px)',
  },
  '&:active': {
    backgroundColor: '#fff',
    transform: 'translateY(0)',
  },
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '200px',
  [theme.breakpoints.down('sm')]: {
    height: '160px',
  },
  [theme.breakpoints.down('xs')]: {
    height: '140px',
  },
  objectFit: 'cover',
  borderRadius: '8px 8px 0 0',
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '8px',
  },
}))

export default function MoleculesCard({ image, title, childrenContent, onActionClick, active }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <StyledCard active={active} onClick={onActionClick}>
      <StyledCardMedia
        component="img"
        alt={title}
        image={typeof image === 'string' ? image : image.src}
      />
      <StyledCardContent>
        <StyledChildContent variant="h6">
          {childrenContent}
        </StyledChildContent>
      </StyledCardContent>
    </StyledCard>
  )
}

MoleculesCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string.isRequired,
  childrenContent: PropTypes.node,
  onActionClick: PropTypes.func,
  active: PropTypes.bool,
}

MoleculesCard.defaultProps = {
  image: '',
  childrenContent: '',
  onActionClick: () => {},
  active: false,
}