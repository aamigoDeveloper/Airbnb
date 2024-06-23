interface HeadingProps {
    title: string
    subtitle: string
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="py-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-neutral-500">{subtitle}</p>
          </div>
  )
}