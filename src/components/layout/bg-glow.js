export default function Glow({
  position = "top-0 right-20",
  height = "h-[11%]",
  rotate = "rotate-[-25deg]",
  shadow = "shadow-[0_0_300px_302px_rgba(255,160,58,0.3)]",
  animation = "[animation:fadeInCustom_1s_ease_0s_1,bgGradientMove_7s_linear_1s_infinite]",
  className = "",
}) {
  return (
    <div
      className={`
        absolute
        ${position}
        ${height}
        border-0
        rounded-full
        origin-center
        ${rotate}
        bg-none
        ${shadow}
        opacity-0
        z-[1]
        ${animation}
        ${className}
      `}
    />
  );
}
