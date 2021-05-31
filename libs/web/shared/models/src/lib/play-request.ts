export interface SpotifyPlayRequestApi {
  context_uri?: string;
  uris?: string[];
  offset?: { position: number };
  position_ms?: number;
}
