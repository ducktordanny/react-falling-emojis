export default interface ContainerProps {
  id: string;
  emoji: string;
  fallingProps: {
    speed: number;
    size: number;
    reverse: boolean;
    repeat: number;
  };
  disableProps: {
    disable: boolean;
    opacity: number;
  };
  shake: boolean;
}
