import { useEffect, useState } from "react";

const Order = () => {
  const [meatPrice, setMeatPrice] = useState(2000);
  const [potatoPrice, setPotatoPrice] = useState(2000);
  const [sumPrice, setSumPrice] = useState(2000);

  const [potatoQuantity, setPotatoQuantity] = useState(1);
  const [meatQuantity, setMeatQuantity] = useState(1);

  function updateMeatQuantity(e) {
    if (e === "") {
      console.log(e, "ebnnn");
      setQuantity("");
    } else {
      setMeatQuantity(Math.floor(e));
      const a = Math.floor(e) * 2000;
      setMeatPrice(a);
      updateSumPrice(a, potatoPrice);
    }
  }

  function updatePotatoQuantity(e) {
    if (e === "") {
      console.log(e, "ebnnn");
      setQuantity("");
    } else {
      const a = Math.floor(e) * 2000;
      setPotatoQuantity(Math.floor(e));
      setPotatoPrice(a);
      updateSumPrice(a, meatPrice);
    }
  }

  function updateSumPrice(meatPrice, potatoPrice) {
    const newTotalPrice = meatPrice + potatoPrice;
    setSumPrice(newTotalPrice);
  }

  useEffect(() => {
    const a = potatoPrice + meatPrice;
    setSumPrice(a);
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0 ">
              {/* <button className="h-10 bg-white border border-gray-100 shadow-sm hover:bg-gray-200 py-2 px-3 rounded-md">
                {"<"}
              </button> */}
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Захиалгын хэсэг
              </h1>
              <div class="h-1 w-20 bg-blue-400 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Та захиалга хийхийн өмнө сайтар нягталж, тоогоо зөв гаргасны
              дараагаар захиалах товчин дээр дарж үйлчлүүлнэ. Хэрэв нэгэн товчин
              дээр дарагдсан бол захиалгыг буцаах боломжгүйг анхаарна уу.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="md:w-1/3 p-4 h-auto w-auto">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Төрөл
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Махтай
                </h2>
                <div className="flex flex-col space-y-1 flex-grow-0">
                  <label className="text-blue-500 text-xs font-medium title-font tracking-normal">
                    Үнэ болон тоо
                  </label>

                  <div className="flex justify-between item-center">
                    <p className="text-xl font-medium text-gray-800">
                      {meatPrice}₮
                    </p>
                    <input
                      type="number"
                      inputMode="numeric"
                      id="quantity"
                      name="quantity"
                      min="0"
                      step="1"
                      value={meatQuantity}
                      onChange={(e) => updateMeatQuantity(e.target.value)}
                      className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 p-4 w-auto h-auto">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Төрөл
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Төмстэй
                </h2>
                <div className="flex flex-col space-y-1 flex-grow-0">
                  <label className="text-blue-500 text-xs font-medium title-font tracking-normal">
                    Үнэ болон тоо
                  </label>

                  <div className="flex justify-between item-center">
                    <p className="text-xl font-medium text-gray-800">
                      {potatoPrice}₮
                    </p>
                    <input
                      type="number"
                      inputMode="numeric"
                      id="quantity"
                      name="quantity"
                      min="0"
                      step="1"
                      value={potatoQuantity}
                      onChange={(e) => updatePotatoQuantity(e.target.value)}
                      className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center -m-4 items-center w-auto my-10 justify-center space-y-2">
            <div className="flex justify-center text-lg">
              <p className="flex flex-wrap">Нийт дүн : </p>
              <p className="text-black font-semibold text-lg">{sumPrice}₮</p>
            </div>
            <button className=" py-3 px-5 bg-blue-500 text-white rounded-md w-96">
              Захиалах
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
