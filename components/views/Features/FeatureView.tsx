import React from "react";

function FeatureView() {
  return (
    <div className="h-screen w-full padding-x">
      <h1
        className={`relative lg:top-32 top-20 mx-auto text-center w-fit text-size-1 font-bold text-text block after:absolute after:block after:content-[""] after:h-[3px] after:bg-primary after:w-full`}
      >
        Features
      </h1>
      <div className="flex h-full lg:-mt-32 items-center justify-center lg:flex-col flex-row">
        <div className="lg:w-[70%] w-1 lg:h-1 sm:h-[55%]  h-[60%] transform sm:translate-y-0 translate-y-0 bg-primary flex lg:flex-row flex-col justify-between">
          {/* Bulatan di tengah garis sebelah kanan */}
          <div className="lg:top-1/2  w-8 h-8 rounded-full bg-primary transform lg:-translate-y-1/2 lg:translate-x-0 -translate-x-1/2"></div>
          <div className="lg:top-1/2  w-8 h-8 rounded-full bg-primary transform lg:-translate-y-1/2 lg:translate-x-0 -translate-x-1/2"></div>
          <div className="lg:top-1/2  w-8 h-8 rounded-full bg-primary transform lg:-translate-y-1/2 lg:translate-x-0 -translate-x-1/2"></div>
        </div>

        <div className="lg:w-[80%] lg:h-1 w-full h-[70%] flex pl-14 lg:flex-row flex-col justify-between gap-6">
          <div className="bg-background h-fit p-3 w-full transform lg:-translate-x-[40%] lg:translate-y-9 shadow-md ">
            <h1 className="text-center font-bold text-primary text-size-2">
              🚚 Pengiriman Tepat Waktu
            </h1>
            <p className="text-center pt-4 text-size-3">
              Kami memastikan setiap pengiriman batu split dilakukan sesuai jadwal yang telah disepakati, sehingga proyek Anda dapat berjalan tanpa hambatan.
            </p>
          </div>
          <div className="bg-background h-fit p-3 w-full transform lg:-translate-x-8 lg:translate-y-9 shadow-md ">
            <h1 className="text-center font-bold text-primary text-size-2">
            🪨 Kualitas Material Terjamin
            </h1>
            <p className="text-center pt-4 text-size-3">
              Batu split yang kami sediakan telah melalui proses seleksi ketat dan memenuhi standar kualitas untuk berbagai kebutuhan konstruksi.
            </p>
          </div>
          <div className="bg-background h-fit p-3 w-full transform lg:translate-x-1/4 lg:translate-y-9 shadow-md ">
            <h1 className="text-center font-bold text-primary text-size-2">
            🏗️ Dukungan Armada & Tim Profesional
            </h1>
            <p className="text-center pt-4 text-size-3">
             Didukung oleh armada pengangkut yang memadai serta tenaga ahli berpengalaman, kami siap melayani kebutuhan proyek Anda dengan optimal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureView;
