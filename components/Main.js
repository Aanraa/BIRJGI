import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-36 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            Хамгийн амттай пирошки
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            Гайхалтай 5-дах өдрийг Этүгэний пирошкитой хамт өнгөрөөнө гэдэг
            магадгүй танд сайхан мэдрэмж төрүүлж мэдэх юм.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-blue-400 hover:bg-gray-700"
              href="https://www.instagram.com/aricaanraa_"
            >
              <span className="justify-center ">Захиалах{" ->"}</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 flex ">
          <img
            className="w-96 md:ml-1 ml-24 h-auto"
            alt="iPhone-12"
            src="/delivery.svg"
          ></img>
        </div>
      </div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-5 mx-auto">
            <div class="flex flex-wrap -m-4 text-center justify-center mb-20">
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-black">
                  <CountUp end={10} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Хэрэглэгч</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-black">
                  <CountUp end={345} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Нийт захиалсан пирошки</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 "></div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900 font-mono">
          More for less
        </h1>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 items-center justify-center gap-2">
              <div class="md:w-1/3 p-4 w-full border rounded-3xl transform hover:scale-110 transition duration-500 ease-in-out">
                <a class="block relative h-48 overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-contain object-center w-full h-full block "
                    src="/pota2.svg"
                  />
                </a>
                <div class="mt-4">
                  <h2 class="text-gray-900 title-font text-lg font-medium text-left ml-1">
                    Төмстэй
                  </h2>
                  <p class="mt-1 ml-1 text-left">1999.99</p>
                </div>
              </div>
              <div class="md:w-1/3 p-4 w-full border rounded-3xl transform hover:scale-110 transition duration-500 ease-in-out">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-none object-center w-full h-full block"
                    src="/meattt.svg"
                  />
                </a>
                <div class="mt-4 ">
                  <h2 class="text-gray-900 title-font text-lg font-medium text-left ml-1">
                    Махтай
                  </h2>
                  <p class="mt-1 ml-1 text-left">1999.99</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
