export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8 my-4">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row mt-4">
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-gray-700 hover:text-deep-purple-accent-400 font-semibold hover:cursor-pointer"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/aricaanraaa_"
                className="text-gray-900"
                rel="noopener noreferrer"
                target="_blank"
              >
                @aricaanraa_
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <p
              href="/"
              className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight my-4"
            >
              © 2023 BIRJGI Inc.
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
