export interface FindAlbumsDTO {
  name: string;
  id: string;
  releasedDate: string;
  image: string;
  band: Band;
  tracks: Track[];
}

export interface Band {
  name: string;
  image: string;
  genre: string;
  biography: string;
  numPlays: number;
  id: string;
  albums: string[];
}

export interface Track {
  name: string;
  duration: string;
  id: string;
}
