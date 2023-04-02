import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Algebra 2',
    description: "Techniques for solving compound linear inequalities as well as absolute value equations and inequalities, solving systems of linear equations in two and three variables, simplifying non-linear expressions, and solving non-linear equations such as polynomial, rational, radical, exponential, and logarithmic"
  },
  { name: 'Trigonometry', 
  description: "Study of the sine, cosine, and tangent functions, including a study of their graphs, inverses of the functions, basic properties of the cotangent, secant, and cosecant functions, measurement of angles in degrees and in radians evaluating triangles, solving trigonometric equations, models for periodic phenomena, trigonometric identities vectors, complex number, and polar coordinates."
  },
  {
    name: 'Pre-Calculus',
    description: "Preparation course for calculus, which includes polynomial, absolute value, radical, rational, exponential, logarithmic, and trigonometric functions and their graphs, analytic geometry, and polar coordinates.",
  },
  {
    name: 'Calculus I - AP Calculus AB',
    description: "Limits and continuity, rates of change, derivatives, applications of differentiation, integrals, the Fundamental Theorem of Calculus, and applications of integration.",
  },
  { name: 'Calculus II - AP Calculus BC', description: "Differentiation and integration of logarithmic, exponential, circular and hyperbolic functions and their inverses, indeterminate forms, improper integrals, standard techniques of integration, parametric equations and polar coordinates, infinite sequences and series, and representation of functions as power series."},
  {
    name: 'Physics 101 - AP Physics C Mechanics',
    description: "Newton’s laws in classical mechanics, including motion in oneand two dimensions, gravitation, rotation, energy, momentum, periodic motion, and fl uid mechanics at the beginning calculus level of mathematics",
  },
  {
    name: 'Physics 102 - AP Physics C Electricity and Magnetism',
    description: "Electricity and magnetism (electricforces, electric fields, potential, magnetism, magnetic forces and fields, capacitance, resistance, inductance, DC and AC circuits, and other topics) at the beginning calculus level of mathematics",
  },
  {
    name: 'Multivariable Calculus, Linear Algebra, Thermal Physics, and other topics',
    description: "Topics in these areas are approached collaboratively. We work through problems together."
  }
]

export default function Subjects() {

  const scrollToServices = () => {
    document.getElementById('Location').scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="bg-white py-24 sm:py-32" id="Subjects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Subjects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one Mathematics Instruction</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Learning is a continuous process that requires practice and iteration. Enhance your learning journey through tutoring. Accelerate your progress with personalized guidance and support. Time saved is just as invaluable as the knowledge you gain. Let us help you achieve your learning goals efficiently and effectively.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute top-1 left-0 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button 
                onClick={scrollToServices}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Learn More
        </button>
      </div>
    </div>
  )
}
