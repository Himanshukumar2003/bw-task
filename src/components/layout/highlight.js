import ShinyText from "../ShinyText";

export default function Highliter({ highliter }) {
  return (
    <>
      <ShinyText
        text={highliter}
        speed={2}
        delay={0}
        color="accent"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
    </>
  );
}
