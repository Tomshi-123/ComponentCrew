import React from "react";
import { Box, keyframes } from "@mui/system";
import { Typography } from "@mui/material";

// =========================================================
// KEYFRAMES FÖR ANIMATIONER 
// =========================================================

const planetRotationKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const planet1OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(65px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(65px) rotate(-360deg);
  }
`;
const planet2OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
`;
const planet3OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(135px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(135px) rotate(-360deg);
  }
`;
const planet4OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(170px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(170px) rotate(-360deg);
  }
`;

const flyAwayKeyframes = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(0.1) rotate(720deg);
    opacity: 0;
  }
`;


const starTwinkleKeyframes = keyframes`
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.4; }
`;

interface SolarSystemProps {
  isAnimating: boolean;
  text: string;
  durationMs: number;
}


const SYSTEM_CORE_SIZE = "500px"; 

const SolarSystem: React.FC<SolarSystemProps> = React.memo(
  ({ isAnimating, text, durationMs }) => {
    
   
    const generateStars = (count: number) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            const size = Math.random() * 1.5 + 0.5; 
            const twinkleDuration = Math.random() * 2 + 1; 
            const delay = Math.random() * 3; 
            
            stars.push(
                <Box
                    key={i}
                    sx={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        boxShadow: `0 0 ${size}px white`,
                        animation: `${starTwinkleKeyframes} ${twinkleDuration}s infinite ease-in-out alternate ${delay}s`,
                    }}
                />
            );
        }
        return stars;
    };

    return (
      // YTTRE BEHÅLLARE FÖR SOLARSYSTEM 
      <Box
        sx={{
          
          width: "100%",
          height: "100%", 
          borderRadius: "20px", 
          padding: "1rem",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0)", 
          minHeight: 'auto', 
          position: 'relative', 
          zIndex: 10,
          
          animation: isAnimating
            ? `${flyAwayKeyframes} ${durationMs}ms ease-out forwards`
            : "none",
        }}
      >
        {/* Stjärnhimmel Bakgrund */}
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1, 
            }}
        >
            {generateStars(100)} 
        </Box>

        {/* Behållare för solsystemets KÄRNA */}
        <Box
          sx={{
            position: "relative",
            width: SYSTEM_CORE_SIZE, 
            height: SYSTEM_CORE_SIZE, 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 5, 
            transform: 'translateY(-20px)' 
          }}
        >
          {/* Solen */}
          <Box
            sx={{
              width: "50px", 
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#ffeb3b", 
              boxShadow: "0 0 15px #ffeb3b, 0 0 30px #ffeb3b, 0 0 45px #ffeb3b", 
              position: "absolute",
            }}
          />
          {/* Roterande planeter */}
          <Box
            sx={{
              position: "absolute", width: "100%", height: "100%",
              animation: `${planetRotationKeyframes} 30s linear infinite`,
            }}
          >
            {/* Planet 1 - */}
            <Box sx={{ 
                position: "absolute", top: "50%", left: "50%", 
                width: "10px", height: "10px", // Större planet
                borderRadius: "50%", 
                backgroundColor: "#00ff00", // Neon Grön
                boxShadow: "0 0 5px #00ff00, 0 0 10px #00ff00", // Glöd
                marginTop: "-5px", marginLeft: "-5px", 
                animation: `${planet1OrbitKeyframes} 5s linear infinite` 
            }} />
            
            {/* Planet 2  */}
            <Box sx={{ 
                position: "absolute", top: "50%", left: "50%", 
                width: "15px", height: "15px", 
                borderRadius: "50%", 
                backgroundColor: "#00ffff", 
                boxShadow: "0 0 8px #00ffff, 0 0 16px #00ffff", 
                marginTop: "-7.5px", marginLeft: "-7.5px", 
                animation: `${planet2OrbitKeyframes} 8s linear infinite` 
            }} />
            
            {/* Planet 3 */}
            <Box sx={{ 
                position: "absolute", top: "50%", left: "50%", 
                width: "12px", height: "12px",
                borderRadius: "50%", 
                backgroundColor: "#ff00ff", 
                boxShadow: "0 0 6px #ff00ff, 0 0 12px #ff00ff", 
                marginTop: "-6px", marginLeft: "-6px", 
                animation: `${planet3OrbitKeyframes} 12s linear infinite` 
            }} />
            
            {/* Planet 4 */}
            <Box sx={{ 
                position: "absolute", top: "50%", left: "50%", 
                width: "18px", height: "18px", 
                borderRadius: "50%", 
                backgroundColor: "#ffa500", 
                boxShadow: "0 0 9px #ffa500, 0 0 18px #ffa500", 
                marginTop: "-9px", marginLeft: "-9px", 
                animation: `${planet4OrbitKeyframes} 16s linear infinite` 
            }} />
          </Box>
        </Box>
        
        {/* Texten */}
        <Typography 
          sx={{ 
            fontFamily: "orbitron", 
            textAlign: "center", 
            position: "absolute", 
            zIndex: 10, 
            color: "#00ffff", 
            fontWeight: 700, 
            fontSize: "1.4rem", 
            textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff", 
            bottom: '1rem', 
            left: 0,
            right: 0,
            transform: "none", 
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
);

export default SolarSystem;