import React from 'react';

interface LineGraphProps {
  data?: Array<{ x: number; y: number }>;
  width?: number;
  height?: number;
  className?: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ 
  data = [], 
  width = 400, 
  height = 200, 
  className = "" 
}) => {
  if (data.length === 0) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  // Create SVG path from data points
  const createPath = (points: Array<{ x: number; y: number }>) => {
    const maxX = Math.max(...points.map(p => p.x));
    const maxY = Math.max(...points.map(p => p.y));
    const minX = Math.min(...points.map(p => p.x));
    const minY = Math.min(...points.map(p => p.y));

    const scaleX = (width - 40) / (maxX - minX || 1);
    const scaleY = (height - 40) / (maxY - minY || 1);

    return points
      .map((point, index) => {
        const x = 20 + (point.x - minX) * scaleX;
        const y = height - 20 - (point.y - minY) * scaleY;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  };

  const pathData = createPath(data);

  return (
    <div className={className}>
      <svg width={width} height={height} className="border border-gray-200 rounded">
        <path
          d={pathData}
          fill="none"
          stroke="#00ADB5"
          strokeWidth="2"
          className="drop-shadow-sm"
        />
        {data.map((point, index) => {
          const maxX = Math.max(...data.map(p => p.x));
          const maxY = Math.max(...data.map(p => p.y));
          const minX = Math.min(...data.map(p => p.x));
          const minY = Math.min(...data.map(p => p.y));
          
          const scaleX = (width - 40) / (maxX - minX || 1);
          const scaleY = (height - 40) / (maxY - minY || 1);
          
          const x = 20 + (point.x - minX) * scaleX;
          const y = height - 20 - (point.y - minY) * scaleY;
          
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill="#00ADB5"
              className="drop-shadow-sm"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default LineGraph;
