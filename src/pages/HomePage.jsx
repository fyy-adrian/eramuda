import { useEffect, useRef, useState } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Navbar from "./../components/Navbar";
import { ArrowRight, CircleArrowLeft, CircleArrowRight, LucidePhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

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
    const url = `https://wa.me/6285664636443`;

    const containerRef2 = useRef(null);


    const cards2 = [
        {
            title: "Web Development",
            desc: "Bangun kemampuan coding dari nol, kuasai logika pemrograman, dan wujudkan ide kreatifmu menjadi proyek digital nyata.",
            img: "./web.jpg",
        },
        {
            title: "Creative Design Studio",
            desc: "Pelajari prinsip desain, visual storytelling, dan tools kreatif untuk menciptakan karya digital yang menarik dan berdampak. Dari poster hingga UI/UX, kembangkan kreativitasmu menjadi proyek nyata.",
            img: "./design.jpg",
        },
        {
            title: "Digital Marketing",
            desc: "Pelajari strategi pemasaran era digital seperti konten, SEO, ads, dan data-driven marketing untuk membangun brand dan menjangkau audiens lebih luas.",
            img: "./marketing.jpg",
        },
        {
            title: "Leadership & Personal Growth",
            desc: "Kembangkan kemampuan komunikasi, kolaborasi, dan kepemimpinan untuk menghadapi tantangan era disrupsi dan menjadi versi terbaik dari dirimu.",
            img: "./personal.jpg",
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
        const container = containerRef2.current;
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

    //     const FadeBottom = keyframes`
    //     from {
    //       opacity: 0;
    //       transform: translateY(200px);
    //     }
    //     to {
    //       opacity: 1;
    //       transform: translateY(0);
    //     }
    //   `;
    const scrollToProgramKami = () => {
        const element = document.getElementById("program-kami");
        if (element) {
            const offset = element.offsetTop + 730; // offset khusus
            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        }
    };


    return (
        <div className="w-full overflow-hidden max-w-[1520px] mx-auto">
            <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_100%),url('/pattern.png')]
          ,url('/pattern.png')]
          bg-cover bg-center" id="beranda">
                <Reveal className="" keyframes={fadeUp} duration={1000} triggerOnce>
                    <div className="
          flex flex-col justify-center items-center
          py-36 md:py-44 gap-5 px-7 lg:px-0 min-h-screen
        ">

                        <div className="flex flex-col items-center lg:mt-[20px]">
                            <div className="flex justify-center w-full">
                                <div className="flex items-center justify-center w-fit bg-[#B5B2F0] px-2 py-0.5 gap-3 rounded-full relative">
                                    <span class="absolute inline-flex w-[10px] h-[10px] left-[11px] animate-ping rounded-full bg-[#221D80] " />
                                    <svg className="mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2257_1524)">
                                            <circle cx="7.89999" cy="7.89999" r="5" fill="#FEFFFF" />
                                        </g>
                                        <g filter="url(#filter1_d_2257_1524)">
                                            <circle cx="7.89999" cy="7.89999" r="2.5" fill="#221D80" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2257_1524" x="-6.19888e-06" y="-6.19888e-06" width="17.8" height="17.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="1" dy="1" />
                                                <feGaussianBlur stdDeviation="1.95" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2257_1524" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2257_1524" result="shape" />
                                            </filter>
                                            <filter id="filter1_d_2257_1524" x="4.59999" y="4.59999" width="7.2" height="7.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="0.3" dy="0.3" />
                                                <feGaussianBlur stdDeviation="0.55" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2257_1524" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2257_1524" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <p className="text-xs font-normal text-[#221D80] min-w-[15.5rem]">
                                        {`${texts[index].substring(0, subIndex)}`}
                                        {/* <span className="animate-pulse">|</span> */}
                                    </p>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-[64px] md:leading-[66px] lg:leading-[88px] lg:tracking-[-0.64px] font-[500] max-w-[650px] text-center mt-4 lg:mt-0">
                                Empowering Youth in the Era of Disruption
                            </h1>
                        </div>
                        <div className="flex relative">
                            <p className="text-sm md:text-base lg:text-sm leading-5 max-w-[550px] text-center">
                                Siap menghadapi era disrupsi? Mari temukan cara untuk berkembang, beradaptasi, dan memimpin di dunia yang terus berubah.
                                {/* <Tooltip text="Apa itu Era Disrupsi?">
                <CircleQuestionMark className="translate-x-4 w-4 h-4 absolute top-0 -right-2 cursor-pointer text-[#221D80]" />
              </Tooltip> */}

                            </p>

                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <button
                                onClick={scrollToProgramKami}
                                className="capitalize rounded-full text-white py-[5px] px-4 bg-[#221D80] flex items-center gap-2 w-fit cursor-pointer"
                            >
                                <p className="whitespace-nowrap text-sm lg:text-base">
                                    Daftar Sekarang
                                </p>
                                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                            </button>

                            {/* <p className="text-sm md:text-base lg:text-sm leading-5 max-w-[550px] text-center hover:text-[#221D80] hover:underline cursor-pointer">
              Apa itu era disrupsi?
            </p> */}
                        </div>
                    </div>
                </Reveal>

            </div>
            <section className="lg:min-h-screen flex flex-col gap-24 mt-1 relative" id="era-disrupsi">
                <div className="relative px-7 md:px-28">
                    <img src="./blur3.png" className="absolute right-0 -top-32 z-[1]" alt="" />
                    <Reveal keyframes={FadeRight} duration={1000} triggerOnce>
                        <RowSection
                            title={"Apa itu Era Disrupsi?"}
                            image={<img
                                src="./disruption.jpg"
                                alt=""
                                className="w-full h-full object-cover rounded-lg"
                            />}
                        >
                            <p className="text-justify text-base">
                                Era disrupsi terjadi ketika suatu inovasi baru masuk ke pasar dan menciptakan efek disrupsi yang cukup kuat sehingga mengubah struktur pasar yang sebelumnya. Era disrupsi adalah era terjadinya perubahan masif yang mengubah sistem dan tatanan bisnis yang lebih baru.
                            </p>
                        </RowSection>
                    </Reveal>
                </div>
                <div className="relative px-7 md:px-28">
                    <Reveal keyframes={FadeLeft} duration={1000} triggerOnce>

                        <RowSection
                            title={"Apa Faktor Pendorongnya?"}
                            image={<img
                                src="./visi.png"
                                alt=""
                                className="w-full h-full object-cover rounded-lg"
                            />}
                            reverse
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">01</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Perkembangan Teknologi</h3>
                                        <p className="text-justify">Kemajuan dalam teknologi seperti kecerdasan buatan, Blockchain, internet of things (IoT), dan kecerdasan buatan telah menciptakan peluang baru dan mengubah cara tradisional yang bisnis lakukan.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">02</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Inovasi</h3>
                                        <p className="text-justify">Perusahaan-perusahaan baru seringkali berinovasi dengan pendekatan yang lebih efisien dan kreatif.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">03</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Perubahan dalam Kebutuhan Konsumen</h3>
                                        <p className="text-justify">Preferensi konsumen berubah dengan cepat, didorong oleh teknologi dan perubahan budaya. Konsumen lebih memilih pengalaman yang disesuaikan, cepat, dan efisien.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">04</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Globalisasi</h3>
                                        <p className="text-justify">Perdagangan bebas, komunikasi global yang lebih mudah, dan mobilitas tenaga kerja telah memungkinkan bisnis untuk menjangkau pasar yang lebih luas, tetapi juga menciptakan persaingan yang lebih intens.</p>
                                    </div>
                                </div>
                            </div>
                        </RowSection>
                    </Reveal>
                </div>
                <div className="relative px-7 md:px-28  bg-[linear-gradient(to_top,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_100%),url('/pattern.png')]
          ,url('/pattern.png')]
          bg-cover bg-center pb-[110px]">
                    <img src="./blur3.png" className="absolute right-0 -top-44 z-[1]" alt="" />
                    <Reveal keyframes={FadeRight} duration={1000} triggerOnce>

                        <RowSection
                            title={"Masalah yang Dihadapi Pemuda"}
                            image={<img
                                src="./bingung.jpg"
                                alt=""
                                className="w-full h-full object-cover rounded-lg"
                            />}
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start ">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">01</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Keterampilan yang tidak terarah</h3>
                                        <p className="text-justify">Banyak kursus online, tutorial, dan workshop gratis, tapi nggak jelas urutannya. banyak yang bingung harus mulai dari mana, dan sering kehilangan arah.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">02</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Rasa ragu & kurang percaya diri</h3>
                                        <p className="text-justify">“Apakah aku cukup siap menghadapi dunia kerja yang berubah cepat? Apalagi tanpa pengalaman atau koneksi.”</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    <div className="w-12 text-start">
                                        <p className="text-[28px] font-semibold text-[#221D80] mt-2">03</p>
                                    </div>
                                    <div className="flex-1 flex-col gap-2">
                                        <h3 className="text-xl font-semibold">Ketimpangan akses</h3>
                                        <p className="text-justify">Banyak program mahal atau terbatas untuk kalangan tertentu. Padahal semua pemuda seharusnya punya kesempatan untuk belajar dan berkembang.</p>
                                    </div>
                                </div>
                            </div>
                        </RowSection>
                    </Reveal>

                </div>
            </section>
            <section className="px-7 md:px-28 flex flex-col gap-10 relative bg-cover bg-[url('/pattern_squares.png')]" id="program-kami">
                <div className="flex flex-col gap-1 pt-10 items-center justify-center">
                    <h1 className="text-[28px] font-semibold md:leading-[67px] md:tracking-[-0.44px] text-white text-center">
                        Kalau kamu ngerasa begini, kamu nggak sendirian.
                    </h1>
                    <p className="text-base text-white/90 max-w-[750px] text-center">
                        Dan kamu ga salah. Era disrupsi memang cepat berubah, jadi wajar kalau kita bingung dan merasa tertinggal, Yang kamu butuhkan bukan hanya informasi, tapi menemukan keterampilan yang cocok, mentor yang mendukung, dan strategi adaptasi.
                    </p>
                </div>
                <div className="flex flex-col gap-7 mt-7">

                    <h1 className="text-[28px] md:text-[34px] font-semibold md:leading-[67px] md:tracking-[-0.44px] text-white">
                        Alasan memilih kami
                    </h1>
                    <Reveal keyframes={fadeUp} duration={1000} triggerOnce>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                            <div className="flex flex-col gap-4 items-center bg-[linear-gradient(160deg,var(--Primary-blue-lighter,#B5B2F0)_-2.39%,#F9F9F9_69.98%)] transition-all duration-300 shadow-md bg-opacity-10 backdrop-blur-2xl hover:bg-opacity-100 px-5 py-5 rounded-lg">
                                <img src="./book.png" alt="" className="w-44" />
                                <h3 className=" font-semibold text-black">
                                    Keterampilan yang Lengkap dan Relevan
                                </h3>
                                <p className="text-sm text-black/70 text-justify">
                                    Kamu belajar berbagai skill penting untuk era disrupsi. Mulai dari coding, desain, digital marketing, hingga leadership.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 items-center bg-[linear-gradient(160deg,var(--Primary-blue-lighter,#B5B2F0)_-2.39%,#F9F9F9_69.98%)] transition-all duration-300 shadow-md bg-opacity-10 backdrop-blur-2xl hover:bg-opacity-100 px-5 py-5 rounded-lg">
                                <img src="./mentor.png" alt="" className="w-44" />
                                <h3 className=" font-semibold text-black">
                                    Pendampingan Mentor Berpengalaman
                                </h3>
                                <p className="text-sm text-black/70 text-justify">
                                    Mentor akan membimbing, memberi feedback, dan membantu kamu memahami materi dengan lebih cepat dan terarah.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 items-center bg-[linear-gradient(160deg,var(--Primary-blue-lighter,#B5B2F0)_-2.39%,#F9F9F9_69.98%)] transition-all duration-300 shadow-md bg-opacity-10 backdrop-blur-2xl hover:bg-opacity-100 px-5 py-5 rounded-lg">
                                <img src="./grafik.png" alt="" className="w-44" />
                                <h3 className=" font-semibold text-black">
                                    Belajar dengan Sistem yang Jelas & Terarah
                                </h3>
                                <p className="text-sm text-black/70 text-justify">
                                    Kurikulum kami disusun bertahap supaya kamu tahu apa yang harus dipelajari, kapan, dan bagaimana cara menerapkannya.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                </div>
                <section className="flex flex-col gap-3 relative">

                    <h1 className="text-[28px] md:text-[34px] font-semibold md:tracking-[-0.44px] text-white text-center mt-20">
                        Ayo Daftar Sekarang!
                    </h1>
                    <div className="w-full flex flex-col md:gap-5">
                        <div className="flex flex-row gap-5 items-center justify-end z-50 relative mb-5 md:mb-0">
                            <button className="cursor-pointer active:scale-90" onClick={scrollPrev2}>
                                <CircleArrowLeft size={30} className="text-white" />
                            </button>
                            <button className="cursor-pointer active:scale-90" onClick={scrollNext2}>
                                <CircleArrowRight size={30} className="text-white" />
                            </button>
                        </div>

                        <Reveal keyframes={fadeUp} duration={1000} triggerOnce>
                            <div
                                ref={containerRef2}
                                className="flex flex-row gap-10 lg:py-14 overflow-x-scroll snap-x snap-mandatory hide-scroll"
                            >
                                {cards2.map((card, index) => (
                                    <ProgramUnggulanCard key={index} {...card} />
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>
            </section>
            <section className="lg:min-h-[110vh] lg:px-28 flex flex-col gap-10 relative justify-center items-center" id="kontak">
                <div className="w-full flex flex-col gap-5 relative bg-[#6A67C9] lg:rounded-xl py-[82px] items-center px-7 md:px-0 bg-[url('/pattern.png')]
          ,url('/pattern.png')]
          bg-cover bg-center">
                    <h1 className="h-auto text-[28px] md:text-[44px] font-semibold md:leading-[67px] md:tracking-[-0.44px] text-white text-center">
                        Ada Pertanyaan? <br /> Jangan Ragu untuk Bertanya!
                    </h1>
                    <p className="text-white text-sm md:text-base lg:text-sm leading-5 max-w-[550px] text-center">
                        Penasaran atau bingung bingung memilih keterampilan apa? Jangan ragu untuk bertanya sami siap Membantu Anda! Tim kami siap menjawab semua pertanyaan Anda dengan cepat
                    </p>
                    <Link to={url}
                        target="_blank"
                        rel="noopener noreferrer" className="capitalize rounded-full text-white py-2 px-2 lg:px-6 bg-[#221D80] flex items-center gap-2 hover:bg-[#1a1560] transition-colors cursor-pointer active:scale-95 ease-in-out duration-200">
                        <LucidePhoneCall className="w-5 h-5" />

                        <p className="">
                            Hubungi Kami
                        </p>
                    </Link>
                </div>
            </section>
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
        <div className="flex flex-row-reverse justify-between items-start lg:items-center gap-10 px-7 py-7 md:py-14 rounded-lg border-[1.5px] border-[rgba(254,255,255,0.20)] relative shadow-md inset-shadow-xs w-full snap-center shrink-0 ">
            <div className="flex-1 flex flex-col gap-5 z-10">
                <h1 className="text-2xl lg:text-4xl font-semibold text-white">{title}</h1>
                <img src={img} className="w-[359px] h-[240px] z-10 lg:hidden" />
                <p className="text-sm text-white text-justify">
                    {desc}
                </p>
                <Link
                    to={"https://chat.whatsapp.com/Hs1HsV4mKabDLhshCkE9xf"}
                    target="_blank"
                    rel="noopener noreferrer" className="capitalize rounded-full text-white py-[5px] px-4 bg-[#221D80] flex items-center gap-2 w-fit hover:bg-[#1a1560] transition-colors cursor-pointer active:scale-95 ease-in-out duration-200">
                    <p className="whitespace-nowrap text-sm lg:text-base">
                        Daftar Sekarang
                    </p>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
            </div>
            <img src={img} className="w-[359px] h-[240px] z-10 hidden lg:flex rounded-md shadow-md" />
        </div>
    );
};

// const KeuntunganCard = ({ title, desc, img }) => {
//   return (
//     <div className="flex flex-row-reverse justify-between items-start lg:items-center gap-10 px-7 py-7 md:py-14 rounded-lg shadow-md inset-shadow-xs border-[1.5px] border-[rgba(254,255,255,0.20)] relative w-full snap-center shrink-0">
//       <div className="flex-1 flex flex-col gap-5 z-10">
//         <h1 className="text-2xl lg:text-4xl font-semibold text-white">{title}</h1>
//         <img src={img} className="w-[359px] h-[240px] z-10 lg:hidden" />
//         <p className="text-sm text-white">
//           {desc}
//         </p>
//         <button className="capitalize rounded-full text-white py-[5px] px-4 bg-[#221D80] flex items-center gap-2 w-fit">
//           <p className="whitespace-nowrap text-sm lg:text-base">
//             Daftar Sekarang
//           </p>
//           <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
//         </button>
//       </div>
//       <img src={img} className="w-[359px] h-[240px] z-10 hidden lg:flex" />
//     </div>
//   );
// };

function RowSection({ title, children, image, reverse = false }) {
    return (
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between`}>
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
                <h1 className="text-[28px] md:text-[34px] font-semibold md:leading-[67px] tracking-[-0.44px] text-black">
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
