import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Confidence',
    description: "Confidence is key to unlocking your math potential. You'll learn to approach math problems with a positive mindset and the ability to recover from inevitable failures and roadblocks, because it's not about falling but about getting up. With increased confidence, you'll be able to tackle any math challenge that comes your way.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Mental Math',
    description:
      "Develop the abillity to solve complex math problems in your head. We use a pencil and paper approach to increase your skill level and speed, while also incorporating proven mental techniques that have been developed through research in math education and years of experience. We believe that the traditional pencil and paper approach to mathematics is irreplaceable and cannot be replaced by technology", 
    icon: ScaleIcon,
  },
  {
    name: 'Intuition',
    description:
      "Unlock your potential to understand the underlying concepts and connections in mathematical statements. We will help you develop the intuition to see beyond the dense notation of equations and understand their underlying meaning. Equations are the foundation of STEM and contain information about the behavior of the world around us. They tell us what is possible and what is not, and allow us to make predictions from what we know. With our help, you will be able to unlock the hidden insights and understand the true power of math.",
    icon: BoltIcon,
  },
  {
    name: 'Art',
    description:
      "Mathematics is not just a collection of random symbols, but a perspective on the universe and our existence. It is a way of understanding the world around us and the patterns that govern it. See math as the beautiful and elegant tool that it is, invented to deal with the realities of the universe. The discoveries of the universe lead to math and math leads to more discoveries, creating a feedback loop of understanding and exploration. Unlock the artistic side of math and see the beauty in its complexity.",
    icon: EnvelopeIcon,
  },
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
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl textShadow">Unlock you math potential.</h2>
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
