'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'

type ContactMapProps = {
  latitude: number
  longitude: number
  address: string
  locationLabel: string
  directionsUrl: string
}

export default function ContactMap({
  latitude,
  longitude,
  address,
  locationLabel,
  directionsUrl,
}: ContactMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mounted = true
    let mapInstance: import('leaflet').Map | null = null

    void (async () => {
      const L = await import('leaflet')

      if (!mounted || !mapRef.current) return

      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

      mapInstance = L.map(mapRef.current, {
        attributionControl: false,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: !isTouchDevice,
        doubleClickZoom: !isTouchDevice,
        boxZoom: false,
        keyboard: false,
      }).setView([latitude, longitude], 16)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(mapInstance)

      const marker = L.divIcon({
        className: 'kot-contact__marker',
        html: [
          '<span class="kot-contact__marker-shadow"></span>',
          '<span class="kot-contact__marker-pin"></span>',
          '<span class="kot-contact__marker-center"></span>',
        ].join(''),
        iconSize: [44, 60],
        iconAnchor: [22, 54],
      })

      L.marker([latitude, longitude], {
        icon: marker,
        keyboard: false,
      }).addTo(mapInstance)

      requestAnimationFrame(() => mapInstance?.invalidateSize())
    })()

    return () => {
      mounted = false
      mapInstance?.remove()
    }
  }, [latitude, longitude])

  return (
    <div className="kot-contact__map">
      <div
        ref={mapRef}
        className="kot-contact__map-canvas"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      <a
        className="kot-contact__map-attribution"
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
        style={{ zIndex: 2 }}
      >
        Map data OpenStreetMap · Tiles CARTO
      </a>

      <div className="kot-contact__map-overlay" style={{ zIndex: 2 }}>
        <div className="kot-contact__map-card">
          <div className="kot-contact__map-kicker">
            <MapPin size={14} />
            <span>{locationLabel}</span>
          </div>
          <div className="kot-contact__map-label">{address}</div>
        </div>

        <a
          className="kot-contact__map-link"
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Navighează</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}