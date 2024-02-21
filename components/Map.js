

const Map = () => {
	return (
		<div>
<section className="bg-gray-800 sm:border-y-[0.5px] border-gray-200">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 py-20 lg:px-8">
    <div className="max-w-xl lg:max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-100">
        Visit Our Location
      </h2>
      <p className="mt-4 text-lg text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div className="mt-16 lg:mt-20">
      <div className="sm:flex flex-col  gap-8">
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={380}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div>
          <div className="sm:max-w-[2200px] max-sm:py-8 max-sm:border-b-2 mx-auto rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              {/* <h3 className="text-lg font-medium text-gray-100">Our Address</h3> */}
              <p className="mt-1 text-xl font-bold text-gray-200">
                United Kingdom
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-100">Hours</h3>
              <p className="mt-1 text-gray-200">Monday - Friday: 9am - 5pm</p>
              <p className="mt-1 text-gray-200">Saturday: 10am - 4pm</p>
              <p className="mt-1 text-gray-200">Sunday: Closed</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-100">Contact</h3>
              <p className="mt-1 text-gray-200">Email: info@example.com</p>
              <p className="mt-1 text-gray-200">Phone: +1 23494 34993</p>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[2200px] max-sm:py-8 max-sm:border-b-2 mx-auto rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              {/* <h3 className="text-lg font-medium text-gray-100">Our Address</h3> */}
              <p className="mt-1 text-xl font-bold text-gray-200">
                India
              </p>
            </div>
            <div className="border-t  border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-100">Hours</h3>
              <p className="mt-1 text-gray-200">Monday - Friday: 9am - 5pm</p>
              <p className="mt-1 text-gray-200">Saturday: 10am - 4pm</p>
              <p className="mt-1 text-gray-200">Sunday: Closed</p>
            </div>
            <div className="border-t  border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-100">Contact</h3>
              <p className="mt-1 text-gray-200">Email: info@example.com</p>
              <p className="mt-1 text-gray-200">Phone: +1 23494 34993</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

		</div>
	)
}

export default Map