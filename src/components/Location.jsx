import GoogleMeet from '../assets/public/google-meet-seeklogo.com.svg'
import ZoomMeet from '../assets/public/zoomus-ar21.svg'


export default function Location() {

  const scrollToServices = () => {
    document.getElementById('Contact').scrollIntoView({behavior: "smooth"})
  }

    return (
      <section  id="Location">
      <div className="bg-gray-900 mt-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white">Online Tutoring, Teaching, and Consultations</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                With online tutoring and consultations, you can access quality educational resources from the comfort of your own home. Using online platforms such as Google Meet and Zoom and the built-in whiteboard features, enjoy engaging and interactive sessions tailored to your individual learning style and goals. Choose from a variety of platforms such as Khan Academy. 
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <button
                  onClick={scrollToServices}
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Contact me
                </button>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-10 w-full object-contain object-left"
                src={GoogleMeet}
                alt="Tuple"
                // width={105}
                // height={48}
              />
              <img
                className="max-h-16 w-full object-contain object-left"
                src={ZoomMeet}
                alt="Reform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  