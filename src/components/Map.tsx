"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const CITIES = [
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "Delhi", coordinates: [77.2090, 28.6139] },
  { name: "Bangalore", coordinates: [77.5946, 12.9716] },
  { name: "Chennai", coordinates: [80.2707, 13.0827] },
  { name: "Kolkata", coordinates: [88.3639, 22.5726] }
]

const Map = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1200,
          center: [82, 23]
        }}
        width={800}
        height={800}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Geographies
          geography="/india.json"
          stroke="#00ADB5"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FFFFFF"
                style={{
                  default: {
                    outline: "none",
                    filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))",
                  },
                  hover: {
                    fill: "#00ADB5",
                    outline: "none",
                    transition: "all 0.3s ease",
                  },
                  pressed: {
                    fill: "#007B82",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {CITIES.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#00ADB5" />
            <text
              textAnchor="middle"
              y={-10}
              style={{ 
                fontFamily: "system-ui",
                fill: "#222831",
                fontSize: "12px"
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

export default Map
