interface HeadingProps {
  title: string
  subtitle: string
  center?: boolean
}

export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div className="py-4">
      <h2
        className={
          center ? "text-lg text-center font-semibold" : "text-lg font-semibold"
        }
      >
        {title}
      </h2>
      <p className="text-neutral-500">{subtitle}</p>
    </div>
  )
}
