
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
              <h2 className="text-3xl font-bold tracking-tight text-white">Online Tutoring and Consultations</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                With online tutoring and consultations, you can access quality educational resources from the comfort of your own home. Using Google Meet or Zoom and the built-in whiteboard features, I provide engaging and interactive sessions tailored to your individual learning style and goals.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <button
                  onClick={scrollToServices}
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Getting Started
                </button>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-10 w-full object-contain object-left"
                src="src/assets/public/google-meet-seeklogo.com.svg"
                alt="Tuple"
                // width={105}
                // height={48}
              />
              <img
                className="max-h-16 w-full object-contain object-left"
                src="src/assets/public/zoomus-ar21.svg"
                alt="Reform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  