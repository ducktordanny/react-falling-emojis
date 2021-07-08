export default interface RainSettings {
  /**
   * Required! Here you can specify your falling elements what
   * should be emojis (win: ctrl + ; mac: control + command + space),
   * but it also could be any other texts. You have to include this
   * prop otherwise you're gonna get errors.
   */
  emojis: string[];
  /**
   * If it's included (or true) then the falling animation stops
   * with a fade out animation (within 2 seconds).
   */
  disable?: boolean;
  /**
   * It gives a shake to every element with random angles.
   */
  shake?: boolean;
  /**
   * If you include this prop (or its value is true) the
   * emjis/elements are gonna fly from the bottom to top
   * instead of falling.
   */
  reverse?: boolean;
  /**
   * It describes how many time should be repeated a falling session.
   * If it is smaller than 0 then it runs until disabling.
   */
  repeat?: number;
  /**
   * An emoji how many times could be represented. It gives a
   * better look to the rain with cloning emojis. It could be useful
   * when you don't have a lot of element. Important: It cannot
   * be null or negative.
   */
  density?: number;
  /**
   * How its name also says you can set how fast it should reach
   * the bottom of the screen.
   */
  speed?: number;
  /**
   * You can set the size of elements (in pixels). A too big difference restarts the animation.
   */
  size?: number;
  /**
   * You are able to change the opacity of elements. Important:
   * It must be between 0 and 1, otherwise you will get an error.
   */
  opacity?: number;
}
