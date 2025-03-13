"use client";

import React, { useEffect, useRef } from "react";
import WordCloud from "wordcloud";

// Fungsi untuk memastikan warna tetap sama
const predefinedColors = [
  "#ff5733",
  "#33ff57",
  "#3357ff",
  "#ff33f6",
  "#f6ff33",
];
const getColor = (index: number) =>
  predefinedColors[index % predefinedColors.length];

const words: [string, number][] = [
  ["Next.js", 50],
  ["React", 40],
  ["JavaScript", 30],
  ["Web Dev", 25],
  ["Frontend", 20],
  ["CSS", 15],
];

const WordCloudComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      WordCloud(canvasRef.current, {
        list: words,
        gridSize: 12,
        weightFactor: 3,
        fontFamily: "Arial",
        color: (word, weight, index) => getColor(index), // Warna tidak berubah
        rotateRatio: 0, // Hindari rotasi acak
        rotationSteps: 0, // Buat semua kata tetap horizontal
      });
    }
  }, []);

  return (
    <div className="w-full h-80 bg-gray-900 rounded-lg flex justify-center items-center">
      <canvas ref={canvasRef} width={1200} height={300}></canvas>
    </div>
  );
};

export default WordCloudComponent;
