import banner from './img/banner1.jpg'

function Banner() {

  return (
    <section class="relative bg-[url()] bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Titulo
            <strong class="block font-extrabold text-slate-700">
              Llamativo
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              class="block w-full rounded bg-slate-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-slate-900 focus:outline-none focus:ring active:bg-slate-500 sm:w-auto"
            >
              Comienza
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-slate-700 focus:outline-none focus:ring active:text-slate-200 sm:w-auto"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
