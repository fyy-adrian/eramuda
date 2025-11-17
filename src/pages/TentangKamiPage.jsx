import { useEffect, useRef, useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Navbar from "./../components/Navbar";
import { ArrowRight, CircleArrowLeft, CircleArrowRight, LucidePhoneCall } from "lucide-react";

function App() {
  const texts = [
    "Belajar, berkarya, dan berdaya di era disrupsi.",
    "Bangkitkan kreativitasmu untuk masa depan digital.",
    "Kuasai skill baru, ciptakan peluang tanpa batas.",
  ];

  const [index, setIndex] = useState(0); // teks keberapa
  const [subIndex, setSubIndex] = useState(0); // panjang substring saat ini
  const [deleting, setDeleting] = useState(false); // sedang hapus atau tulis
  const [blink, setBlink] = useState(true); // kedipan cursor
  const containerRef = useRef(null);


  const cards = [
    {
      title: "Coding Bootcamp",
      desc: "Bangun kemampuan coding dari nol, kuasai logika pemrograman, dan wujudkan ide kreatifmu menjadi proyek digital nyata.",
      img: "./template-photo.png",
    },
    {
      title: "Creative Design Studio",
      desc: "Pelajari prinsip desain, visual storytelling, dan tools kreatif untuk menciptakan karya digital yang menarik dan berdampak. Dari poster hingga UI/UX, kembangkan kreativitasmu menjadi proyek nyata.",
      img: "./template-photo.png",
    },
    {
      title: "Public Speaking",
      desc: "Asah kemampuan berbicara di depan umum, menyampaikan ide dengan percaya diri, dan memengaruhi audiens. Jadikan setiap presentasi atau pidatomu lebih powerful dan berkesan.",
      img: "./template-photo.png",
    },
  ];


  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.firstChild.offsetWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;


    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };


  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.firstChild.offsetWidth;


    if (container.scrollLeft <= 0) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const containerRef2 = useRef(null);


  const cards2 = [
    {
      title: "Coding Bootcamp",
      desc: "Bangun kemampuan coding dari nol, kuasai logika pemrograman, dan wujudkan ide kreatifmu menjadi proyek digital nyata.",
      img: "./template-photo.png",
    },
    {
      title: "Creative Design Studio",
      desc: "Pelajari prinsip desain, visual storytelling, dan tools kreatif untuk menciptakan karya digital yang menarik dan berdampak. Dari poster hingga UI/UX, kembangkan kreativitasmu menjadi proyek nyata.",
      img: "./template-photo.png",
    },
    {
      title: "Public Speaking",
      desc: "Asah kemampuan berbicara di depan umum, menyampaikan ide dengan percaya diri, dan memengaruhi audiens. Jadikan setiap presentasi atau pidatomu lebih powerful dan berkesan.",
      img: "./template-photo.png",
    },
  ];


  const scrollNext2 = () => {
    const container = containerRef2.current;
    if (!container) return;
    const cardWidth = container.firstChild.offsetWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;


    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };


  const scrollPrev2 = () => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.firstChild.offsetWidth;


    if (container.scrollLeft <= 0) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index === texts.length) return; // selesai semua

    const currentText = texts[index];

    if (!deleting && subIndex === currentText.length) {
      // selesai mengetik → tunggu sebentar lalu mulai hapus
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      // selesai hapus → lanjut ke teks berikutnya
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 30 : 60); // kecepatan hapus & ketik

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  const fadeUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(200px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const FadeRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  const FadeLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  // const FadeBottom = keyframes`
  //   from {
  //     opacity: 0;
  //     transform: translateY(200px);
  //   }
  //   to {
  //     opacity: 1;
  //     transform: translateY(0);
  //   }
  // `;

  return (
    <div className="w-full overflow-hidden max-w-[1520px] max-auto">
      <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_100%),url('/pattern.png')]
          ,url('/pattern.png')]
          bg-cover bg-center">
                <section className="lg:min-h-screen flex flex-col gap-24 my-1 relative mb-[110px] mt-[80px] lg:mt-[150px] " id="tentang-kami">
                    <div className="relative px-7 md:px-28">
                    <img src="./blur3.png" className="absolute right-0 -top-32 z-[1]" alt="" />
                    <Reveal keyframes={FadeRight} duration={1000} triggerOnce>
                        <RowSection
                        title={"Tentang Kami"}
                        image={<img
                            src="./tentang-kami.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />}
                        >
                        <p className="text-justify text-base">
                            <span className="font-semibold text-[#221D80]">EraMuda</span> hadir di tengah derasnya arus digitalisasi dan perubahan dunia, banyak anak muda terutama mahasiswa kesulitan mengembangkan potensi diri, menghadapi tantangan karier, dan memanfaatkan peluang masa depan secara maksimal. Kami hadir menjadi wadah yang membantu generasi muda untuk mengatasi tantangan tersebut, beradaptasi dengan perubahan, dan memaksimalkan potensi mereka.
                        </p>
                        </RowSection>
                    </Reveal>
                    </div>
                    <div className="relative px-7 md:px-28">
                    <img src="./blur4.png" className="absolute left-0 -top-32 z-[1]" alt="" />
                    <img
                        src="./blur5.png"
                        className="absolute right-1/2 translate-x-1/4 -top-32 z-[1]"
                        alt=""
                    />

                    <Reveal keyframes={FadeLeft} duration={1000} triggerOnce>

                        <RowSection
                        title={"Visi"}
                        image={<img
                            src="./visi.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />}
                        reverse
                        >
                        <p className="text-justify text-base">
                            <span className="font-semibold text-[#221D80]">EraMuda</span> Mewujudkan generasi muda yang  tangguh, adaptif, dan berdaya saing tinggi di era disrupsi.
                        </p>
                        </RowSection>
                    </Reveal>
                    </div>
                    <div className="relative px-7 md:px-28">
                    <img src="./blur3.png" className="absolute right-0 -top-44 z-[1]" alt="" />
                    <Reveal keyframes={FadeRight} duration={1000} triggerOnce>

                        <RowSection
                        title={"Misi"}
                        image={<img
                            src="./misi.png"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />}
                        >
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row items-center gap-3">
                            <div className="w-12 text-center">
                                <p className="text-[28px] font-semibold text-[#221D80]">01</p>
                            </div>
                            <div className="flex-1">
                                <p className="">Membekali anak muda dengan skill relevan untuk menghadapi perubahan teknologi dan dunia kerja.</p>
                            </div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                            <div className="w-12 text-center">
                                <p className="text-[28px] font-semibold text-[#221D80]">02</p>
                            </div>
                            <div className="flex-1">
                                <p className="">Membangun mindset berkembang (growth mindset) agar mampu beradaptasi dan memanfaatkan peluang baru.</p>
                            </div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                            <div className="w-12 text-center">
                                <p className="text-[28px] font-semibold text-[#221D80]">03</p>
                            </div>
                            <div className="flex-1">
                                <p className="">Mendorong kreativitas, inovasi, dan kepemimpinan sebagai fondasi untuk sukses di masa depan.</p>
                            </div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                            <div className="w-12 text-center">
                                <p className="text-[28px] font-semibold text-[#221D80]">04</p>
                            </div>
                            <div className="flex-1">
                                <p className="">Membangun ekosistem yang mendukung pengembangan potensi anak muda secara berkelanjutan.</p>
                            </div>
                            </div>
                        </div>
                        </RowSection>
                    </Reveal>
                    </div>
                </section>
          </div>
      <footer className="px-7 md:px-28 w-full flex flex-col gap-5 relative bg-[#6A67C9] text-sm text-white py-4">
        {/* icon copyright */}

        &copy; 2025 - Kelompok BDMS - EraMuda. All rights reserved.
      </footer>
    </div>
  )
}

export default App

const ProgramUnggulanCard = ({ title, desc, img }) => {
  return (
    <div className="flex flex-row justify-between items-start lg:items-center gap-10 px-7 py-7 md:py-14 rounded-lg border-[1.5px] border-[rgba(254,255,255,0.20)] relative shadow-md inset-shadow-xs w-full snap-center shrink-0">
      <div className="flex-1 flex flex-col gap-5 z-10">
        <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>
        <img src={img} className="w-[359px] h-[240px] z-10 lg:hidden" />
        <p className="text-sm">
          {desc}
        </p>
        <button className="capitalize rounded-full text-white py-[5px] px-4 bg-[#221D80] flex items-center gap-2 w-fit">
          <p className="whitespace-nowrap text-sm lg:text-base">
            Daftar Sekarang
          </p>
          <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
      <img src={img} className="w-[359px] h-[240px] z-10 hidden lg:flex" />
    </div>
  );
};

const KeuntunganCard = ({ title, desc, img }) => {
  return (
    <div className="flex flex-row-reverse justify-between items-start lg:items-center gap-10 px-7 py-7 md:py-14 rounded-lg shadow-md inset-shadow-xs border-[1.5px] border-[rgba(254,255,255,0.20)] relative w-full snap-center shrink-0">
      <div className="flex-1 flex flex-col gap-5 z-10">
        <h1 className="text-2xl lg:text-4xl font-semibold text-white">{title}</h1>
        <img src={img} className="w-[359px] h-[240px] z-10 lg:hidden" />
        <p className="text-sm text-white">
          {desc}
        </p>
        <button className="capitalize rounded-full text-white py-[5px] px-4 bg-[#221D80] flex items-center gap-2 w-fit">
          <p className="whitespace-nowrap text-sm lg:text-base">
            Daftar Sekarang
          </p>
          <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
      <img src={img} className="w-[359px] h-[240px] z-10 hidden lg:flex" />
    </div>
  );
};

function RowSection({ title, children, image, reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between`}>
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        <h1 className="text-[28px] md:text-[44px] font-semibold leading-[67px] tracking-[-0.44px] text-black">
          {title}
        </h1>
        <div className={`w-full lg:w-1/2 flex ${reverse ? "justify-start" : "lg:justify-end"} lg:hidden mb-4`}>
          <div className="w-[449px] h-[260px] overflow-hidden p-5 bg-[rgba(215,228,255,0.1)] shadow-[2px_2px_4px_rgba(0,0,0,0.08)] rounded-xl flex justify-center items-center">
            {image}
          </div>
        </div>
        {children}
      </div>
      <div className={`w-full md:w-1/2 ${reverse ? "justify-start" : "justify-end"} hidden lg:flex`}>
        <div className="w-[449px] h-[260px] overflow-hidden p-5 bg-[rgba(215,228,255,0.1)] shadow-[2px_2px_4px_rgba(0,0,0,0.08)] rounded-xl flex justify-center items-center">
          {image}
        </div>
      </div>
    </div>
  )
}
