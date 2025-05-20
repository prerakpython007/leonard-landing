"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import L from "leaflet"

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

const MapComponent = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [asiaBounds, setAsiaBounds] = useState<L.LatLngBounds | null>(null)

  // Ensure Leaflet code runs only client-side
  useEffect(() => {
    setIsMounted(true)
    // Define bounds to focus on Asia, centered on India
    setAsiaBounds(
      L.latLngBounds([
        [5, 60], // Southwest corner (near southern India/Sri Lanka)
        [40, 120], // Northeast corner (near China/Japan)
      ])
    )
  }, [])

  // Store locations
  const stores = [
    // Indian States/Territories
    { region: "Jammu and Kashmir", name: "Srinagar", lat: 34.0837, lng: 74.7973 },
    { region: "Himachal Pradesh", name: "Shimla", lat: 31.1048, lng: 77.1734 },
    { region: "Punjab", name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
    { region: "Rajasthan", name: "Jaipur", lat: 26.9124, lng: 75.7873 },
    { region: "Gujarat", name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
    { region: "Madhya Pradesh", name: "Bhopal", lat: 23.2599, lng: 77.4126 },
    { region: "West Bengal", name: "Kolkata", lat: 22.5726, lng: 88.3639 },
    { region: "Odisha", name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
    { region: "Andhra Pradesh", name: "Visakhapatnam", lat: 17.6868, lng: 83.2185 },
    { region: "Karnataka", name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
    { region: "Kerala", name: "Thiruvananthapuram", lat: 8.5241, lng: 76.9366 },
    { region: "Tamil Nadu", name: "Chennai", lat: 13.0827, lng: 80.2707 },
    // Global Countries
    { region: "Canada", name: "Toronto", lat: 43.6532, lng: -79.3832 },
    { region: "United Kingdom", name: "London", lat: 51.5074, lng: -0.1278 },
    { region: "USA", name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { region: "USA", name: "Chicago", lat: 41.8781, lng: -87.6298 },
    { region: "USA", name: "New York", lat: 40.7128, lng: -74.0060 },
    { region: "UAE", name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { region: "South Africa", name: "Cape Town", lat: -33.9249, lng: 18.4241 },
    { region: "Russia", name: "Moscow", lat: 55.7558, lng: 37.6173 },
    { region: "Ukraine", name: "Kyiv", lat: 50.4501, lng: 30.5234 },
    { region: "Nepal", name: "Kathmandu", lat: 27.7172, lng: 85.3240 },
    { region: "Bangladesh", name: "Dhaka", lat: 23.8103, lng: 90.4125 },
    { region: "China", name: "Beijing", lat: 39.9042, lng: 116.4074 },
    { region: "Hong Kong", name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { region: "Sri Lanka", name: "Colombo", lat: 6.9271, lng: 79.8612 },
    { region: "Vietnam", name: "Hanoi", lat: 21.0285, lng: 105.8542 },
    { region: "Singapore", name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { region: "Thailand", name: "Bangkok", lat: 13.7563, lng: 100.5018 },
    { region: "France", name: "Paris", lat: 48.8566, lng: 2.3522 },
    { region: "Japan", name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { region: "Nigeria", name: "Lagos", lat: 6.5244, lng: 3.3792 },
    { region: "Brazil", name: "São Paulo", lat: -23.5505, lng: -46.6333 },
    { region: "Australia", name: "Sydney", lat: -33.8688, lng: 151.2093 },
  ]

  // Render nothing until mounted client-side
  if (!isMounted || !asiaBounds) {
    return <div className="w-full h-[600px] bg-gray-200 rounded-lg animate-pulse" />
  }

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <MapContainer
        center={[20.5937, 78.9629]} // Center on India
        zoom={4} // Zoom level to show India and parts of Asia clearly
        style={{ height: "100%", width: "100%" }}
        bounds={asiaBounds} // Focus on Asia region
        boundsOptions={{ padding: [50, 50] }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stores.map((store, index) => (
          <Marker key={index} position={[store.lat, store.lng]}>
            <Popup>
              <b>{`${store.region} - ${store.name}`}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapComponent