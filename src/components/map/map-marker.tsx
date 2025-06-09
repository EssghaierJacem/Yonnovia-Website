import type { MarkerProps } from 'react-map-gl/mapbox';

import { Marker } from 'react-map-gl/mapbox';

import { Iconify } from '../iconify';

// ----------------------------------------------------------------------

export function MapMarker({ latitude, longitude, ...other }: MarkerProps) {
  // Skip rendering if coordinates are invalid
  if (
    latitude === undefined ||
    longitude === undefined ||
    latitude === null ||
    longitude === null ||
    isNaN(Number(latitude)) ||
    isNaN(Number(longitude))
  ) {
    return null;
  }

  return (
    <Marker latitude={latitude} longitude={longitude} {...other}>
      <Iconify icon="custom:location-fill" sx={[{ color: 'error.main' }]} />
    </Marker>
  );
}
