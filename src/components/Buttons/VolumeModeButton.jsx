import { IconButton } from '@mui/material';
import React from 'react';
import { VolumeOff, VolumeUp } from '@mui/icons-material';
import { useVolumeContext } from 'contexts/VolumeContext';
export default function VolumeModeButton() {
   const { toggleVolumeMode, mode } = useVolumeContext();

   return (
      <IconButton onClick={toggleVolumeMode}>
         {mode === 'on' ? <VolumeUp /> : <VolumeOff />}
      </IconButton>
   );
}
