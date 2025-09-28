import React from "react";
import { Box, keyframes } from "@mui/system";
import { Typography } from "@mui/material";

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
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(20px) rotate(-360deg);
  }
`;
const planet2OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(30px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(30px) rotate(-360deg);
  }
`;
const planet3OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(40px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(40px) rotate(-360deg);
  }
`;
const planet4OrbitKeyframes = keyframes`
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
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

interface SolarSystemProps {
  isAnimating: boolean;
  text: string;
  durationMs: number;
}

const SolarSystem: React.FC<SolarSystemProps> = React.memo(
  ({ isAnimating, text, durationMs }) => {
    return (
      <Box
        sx={{
          margin: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          zIndex: 10,
          backgroundColor: "transparent",
          animation: isAnimating
            ? `${flyAwayKeyframes} ${durationMs}ms ease-out forwards`
            : "none",
        }}
      >
        {/* Behållare för solsystemet */}
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Solen */}
          <Box
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#ffff00",
              boxShadow: "0 0 5px #ffff00, 0 0 10px #ffff00",
              position: "absolute",
            }}
          />
          {/* Roterande planeter */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              animation: `${planetRotationKeyframes} 30s linear infinite`,
            }}
          >
            {/* Planet 1 */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "#ff7f50",
                marginTop: "-2.5px",
                marginLeft: "-2.5px",
                animation: `${planet1OrbitKeyframes} 5s linear infinite`,
              }}
            />
            {/* Planet 2 */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "7.5px",
                height: "7.5px",
                borderRadius: "50%",
                backgroundColor: "#20b2aa",
                marginTop: "-3.75px",
                marginLeft: "-3.75px",
                animation: `${planet2OrbitKeyframes} 8s linear infinite`,
              }}
            />
            {/* Planet 3 */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#8a2be2",
                marginTop: "-3px",
                marginLeft: "-3px",
                animation: `${planet3OrbitKeyframes} 12s linear infinite`,
              }}
            />
            {/* Planet 4 */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: "#d2691e",
                marginTop: "-4.5px",
                marginLeft: "-4.5px",
                animation: `${planet4OrbitKeyframes} 16s linear infinite`,
              }}
            />
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: "orbitron",
            textAlign: "center",
            mt: 4,
            position: "absolute",
            zIndex: 1,
            color: "white",
            fontSize: "1.2rem",
            transform: "translateY(120px)",
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
);

export default SolarSystem;
