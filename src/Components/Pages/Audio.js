import React, {useState, useRef, useEffect} from 'react';
import {Tooltip, IconButton, Box} from "@mui/material";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const Audio = ({words}) => {
    const [isPlaying, setIsPlaying] = useState(null);
    const audioSrc = useRef(null);

    const handlePlayPauseAudio = () => {
    setIsPlaying(!isPlaying)
  };

  useEffect(() => {
    if (isPlaying === null) return 
    isPlaying ? audioSrc.current.play() : audioSrc.current.pause()
  }, [isPlaying])

  const sound = words[0].phonetics[0].audio

  return (
    <Box>
      <Tooltip>
        <IconButton>
          <AudiotrackIcon 
            alt="Audio-icon"
            className={`audio-control ${isPlaying ? "playing" : ""}`}
            onClick={handlePlayPauseAudio} 
            style={{ fill: '#875f59'}}
            sx={{ width: 100,  fontSize: "70px"}}/>
            <audio
              ref={audioSrc}
              src={sound}
              />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default Audio