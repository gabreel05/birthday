import { TypeAnimation } from "react-type-animation";

export default function AnimatedText({
  phrases,
}: Readonly<{ phrases: (string | number)[] }>) {
  return (
    <TypeAnimation
      sequence={phrases}
      wrapper="h1"
      speed={50}
      cursor={false}
      repeat={Infinity}
    />
  );
}
