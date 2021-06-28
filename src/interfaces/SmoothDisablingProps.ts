export default interface SmoothDisablingProps {
  // timeline what's gonna be disabled or enabled
  timelines: Array<gsap.core.Timeline>;
  // the id or class of element what's gonna be disabled
  element: string;
  // if disable is getting true then the useEffect getting triggered
  disable: boolean;
  opacity: number;
}
