import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const StyledChildContent = styled(Typography)({
  backgroundColor: 'transparent',
  color: '#000',
})

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'active'
})(({ active }) => ({
  backgroundColor: active ? '#fff' : 'transparent',
  boxShadow: 'none',
  maxWidth: '160px',
  margin: '0 16px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#fff',
  },
  '&:active': {
    backgroundColor: '#fff',
  },
}))

export default function MoleculesCard({ image, title, childrenContent, onActionClick, active }) {
  return (
    <StyledCard active={active} onClick={onActionClick}>
      <CardMedia
        component="img"
        height="200"
        alt={title}
        image={typeof image === 'string' ? image : image.src}
      />
      <CardContent>
        <StyledChildContent variant="h6">
          {childrenContent}
        </StyledChildContent>
      </CardContent>
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