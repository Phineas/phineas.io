export interface Presence {
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
  listening_to_spotify: boolean;
  spotify: Spotify;
  discord_user: DiscordUser;
  discord_status: string;
  activities: Activity[];
  kv: { [key: string]: string };
}

export interface Activity {
  type: number;
  timestamps: Timestamps;
  sync_id?: string;
  state: string;
  session_id?: string;
  party?: Party;
  name: string;
  id: string;
  flags?: number;
  details: string;
  created_at: number;
  assets: Assets;
  application_id?: number;
}

export interface Assets {
  large_text: string;
  large_image: string;
  small_text?: string;
  small_image?: string;
}

export interface Party {
  id: string;
}

export interface Timestamps {
  start: number;
  end?: number;
}

export interface DiscordUser {
  username: string;
  public_flags: number;
  id: string;
  discriminator: string;
  avatar: string;
}

export interface Spotify {
  track_id: string;
  timestamps: Timestamps;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}
