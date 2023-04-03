import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import {data} from '/src/data/data.js'

const features = [
  {
    name: 'Experience',
    description: "Being able to gauge students' understanding and identify potential question comes with experience. Effective ordering and presentation topics is crucial. And often times, a student learning new material is not able to formulate into words the complex processes the brain is undergoing. Just like the pieces of a puzzle, where the next piece depends on the one already in place.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Passion',
    description:
      "Teaching is a vital role in society. It's not a job. It's not business. Teaching math is passing down millenia worth of knowledge to the next generations. Math is a description of the universe and the existence from the perspective of logic. Many out there can juggle symbols but deep understadning is what we strive for. ", 
    icon: ScaleIcon,
  },
  {
    name: "Hassle Free",
    description:
      "Client satisfaction is top priority, and almost every student walks away feeling satisfied. However, it's a fact  that each student is unique and may have different expectations or preferences. What may seem minor to one person may be a major concern for another. To ensure that every client feels comfortable and heard in all aspects, the option to disconnect is respected. Your feedback is always welcome and valued, and we are committed to continuously improving and adapting services.",
    icon: BoltIcon,
  },
  {
    name: 'Education First',
    description:
      "Like any other industry, the field of education has different tiers of service, ranging from run-of-the-mill operations to highly-engaging. Some providers are run by underqualified individuals who see education as a commodity.",
    icon: EnvelopeIcon,
  }
]

export default function Services() {
  return (
    <section className='services-bg w-full my-2' id='services'>
        <div className="overflow-hidden">
          <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-30 lg:px-8 lg:py-auto">
            <svg
              className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16 bg-white p-4 opacity-90">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl textShadow">What's the Difference</h2>
            </div>
            <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                      <feature.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
    
  )
}
