// ?fall once or repeat falling prop? well what should be its name? should it be repeat? yes
export default interface RainSettings {
  emojis: string[];
  timingType?: 'none' | 'linear'; // not implemented yet
  size?: number; // in pixels
  speed?: number; // in seconds
  density?: number;
  repeat?: number;
  disable?: boolean;
  shake?: boolean;
  reverse?: boolean; // emojis would come from bottom to top
  opacity?: number; // its value can only be between 1 and 0
}
