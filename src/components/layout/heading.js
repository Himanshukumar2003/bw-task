import ShinyText from "../ShinyText";

export default function Heading({ heading, highliter, pera, className = "" }) {
  return (
    <div className={`text-center mb-10 max-w-4xl mx-auto ${className}`}>
      {/* Left Side - Heading */}
      <div className="">
        <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight">
          {/* Heading with HTML support */}
          <span dangerouslySetInnerHTML={{ __html: heading }} />{" "}
          {/* Highlight with HTML support */}
          <ShinyText
            text={highliter}
            speed={2}
            delay={0}
            color="#ff6f00"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          >
            <span dangerouslySetInnerHTML={{ __html: highliter }} />
          </ShinyText>
        </h1>
      </div>

      {/* Right Side - Paragraph */}
      <div className="mt-5">
        <p
          className="text-gray-400 text-base  text-center  max-w-2xl mx-auto "
          dangerouslySetInnerHTML={{ __html: pera }}
        />
      </div>
    </div>
  );
}
