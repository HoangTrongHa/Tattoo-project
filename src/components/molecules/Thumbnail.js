import React from 'react';
import Image from '@/components/atoms/Image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles'


const DialogCustom = styled(Dialog)({
  dialogPaper: {
    backgroundColor: '#455927',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none'
  },
})

const Thumbnail = ({ open = true, onClose, src, alt }) => {

  return (
    <DialogCustom
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogContent>
        <Image src={src} alt={alt} layout="intrinsic" objectFit="contain" />
      </DialogContent>
    </DialogCustom>
  );
};

export default Thumbnail;