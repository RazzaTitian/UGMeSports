import { poppins } from './font'

const SectionHeading = ({title, sub}) => {
  return (
    <div about="section-heading" className="mb-4 lg:mb-12">
      <h2 className={poppins + "text-2xl font-semibold capitalize text-teal-secondary"}>{sub}</h2>
      <h1 className={poppins + "text-4xl lg:text-5xl font-semibold text-primary-dark leading-tight"}>{title}</h1>
    </div>
  )
}

export default SectionHeading