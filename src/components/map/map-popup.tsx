import { Popup } from 'react-map-gl/mapbox';

import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type MapPopupProps = React.ComponentProps<typeof MapPopupRoot>;

export function MapPopup({ sx, children, latitude, longitude, ...other }: MapPopupProps) {
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
    <MapPopupRoot anchor="bottom" latitude={latitude} longitude={longitude} sx={sx} {...other}>
      {children}
    </MapPopupRoot>
  );
}

// ----------------------------------------------------------------------

const MapPopupRoot = styled(Popup)``;
