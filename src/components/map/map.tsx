import type { Theme, SxProps } from '@mui/material/styles';
import type { MapRef, MapProps as ReactMapProps } from 'react-map-gl/mapbox';

import ReactMap from 'react-map-gl/mapbox';

import { styled } from '@mui/material/styles';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

// Default location - prevents "Cannot read properties of undefined (reading '0')" error
const DEFAULT_CENTER = {
  latitude: 40.712776,
  longitude: -74.005974,
  zoom: 12,
};

export type MapProps = ReactMapProps & {
  sx?: SxProps<Theme>;
  ref?: React.RefObject<MapRef | null>;
};

export function Map({ ref, sx, initialViewState, ...other }: MapProps) {
  // Ensure we always have a valid initialViewState with fallback to DEFAULT_CENTER
  const safeInitialViewState = initialViewState
    ? {
        ...DEFAULT_CENTER,
        ...initialViewState,
      }
    : DEFAULT_CENTER;

  return (
    <MapRoot sx={sx}>
      <ReactMap
        ref={ref}
        mapboxAccessToken={CONFIG.mapboxApiKey || 'pk.dummy.key.to.prevent.errors'}
        initialViewState={safeInitialViewState}
        onError={(e) => {
          // Suppress errors in console but still allow the map to render
          console.warn('Mapbox GL error suppressed:', e);
        }}
        {...other}
      />
    </MapRoot>
  );
}

// ----------------------------------------------------------------------

const MapRoot = styled('div')({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
});
