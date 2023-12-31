import { BiScan, BiHistory } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";

export function FiturComponent() {
  return (
    <div className="flex justify-center w-full bg-white" id="fitur">
      <div className="w-10/12 pt-32 pb-16">
        <div className="header-title text-center">
          <h2 className="text-4xl font-medium">Fitur Aplikasi</h2>
          <p className="text-sm mt-5 text-gray-600">
            Anda dapat menggunakannya secara mudah dan nyaman
          </p>
        </div>
        <div className="fitur-content mt-16 grid lg:grid-cols-4 grid-cols-1 gap-8">
          <CardFitur
            icon={<BiScan size={28} color="white" />}
            title="Klasfikasi Otomatis"
            description="Sistem dapat melakukan klasifikasi otomatis dengan AI untuk memprediksikan stroke"
          />
          <CardFitur
            icon={<BiHistory size={28} color="white" />}
            title="Riwayat CT Scan"
            description="Dokter dan Anda dapat melihat riwayat CT Scan Anda dengan mudah dan cepat"
          />
          <CardFitur
            icon={<RiArticleLine size={28} color="white" />}
            title="Rekomendasi RS"
            description="Sistem akan memberikan rekomendasi rumah sakit terdekat untuk Anda"
          />
          <CardFitur
            icon={<HiDocumentText size={28} color="white" />}
            title="Rincian Klasifikasi"
            description="Melihat rincian klasifikasi stroke Anda dengan mudah dan cepat"
          />
        </div>
      </div>
    </div>
  );
}

export function CardFitur({ icon, title, description }) {
  return (
    <div className="bg-white pt-8 pb-12 px-8 drop-shadow-2xl rounded-xl h-fit">
      <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-xl font-medium mt-6 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{description}</p>
    </div>
  );
}
