import Image from "next/image";
import React from "react";

function AboutView() {
  return (
    <div className="h-screen w-full padding-x bg-background">
      <h1
        className={`relative lg:top-40 top-20 mx-auto text-center w-fit text-size-1 font-bold text-text block after:absolute after:block after:content-[""] after:h-[3px] after:bg-primary after:w-full`}
      >
        Tentang Perusahaan
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-center h-full gap-4">
        {/* Konten Teks */}
        <div className="lg:h-full lg:w-2/3 w-full flex items-center text-center text-size-2">
         CV Tata Surya Abadi adalah perusahaan yang bergerak di bidang jual beli batu split untuk kebutuhan konstruksi. Kami menyediakan batu split berkualitas dengan harga kompetitif dan pelayanan profesional. Didukung oleh tenaga ahli dan armada pengangkut yang memadai, kami siap menjadi mitra terpercaya dalam penyediaan material proyek secara tepat waktu dan sesuai standar.
        </div>

        {/* Gambar (Akan berada di atas pada layar kecil) */}
        <div className="flex w-full lg:w-2/6 lg:h-full items-center">
          <Image
            src={"/about.jpg"}
            width={500}
            height={500}
            alt="about"
            className="lg:w-full rounded-md shadow-lg w-1/2 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutView;
