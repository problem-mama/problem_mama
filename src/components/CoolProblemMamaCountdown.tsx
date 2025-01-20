"use client";

import type React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { motion } from "framer-motion";

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return (
      <span className="text-4xl font-bold text-white">
        Problem Mama Solved!
      </span>
    );
  }

  const timeUnits: Array<{ label: string; value: number }> = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {timeUnits.map(({ label, value }) => (
        <motion.div
          key={label}
          className="flex flex-col items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="text-3xl font-bold text-white"
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {value}
          </motion.span>
          <span className="text-sm text-white opacity-80">{label}</span>
        </motion.div>
      ))}
    </div>
  );
};

const CoolProblemMamaCountdown: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-white text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Problem Mama
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-12 text-white text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Countdown until we solve all problems
      </motion.p>
      <Countdown
        date={new Date("2026-01-01T00:00:00")}
        renderer={CountdownRenderer}
      />
      <motion.div
        className="mt-16 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-lg">Get ready for a world without problems!</p>
        <p className="text-sm mt-2 opacity-70">Stay tuned for updates</p>
      </motion.div>
    </div>
  );
};

export default CoolProblemMamaCountdown;
