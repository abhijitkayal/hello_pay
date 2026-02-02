// import logo from './Screenshot_2026-02-02_085244-removebg-preview.png';
// import Image from 'next/image';
// export default function Home() {
//   return (
//     <section>
//       <nav className="flex justify-between items-center bg-blue-500 ml-10 rounded-xl w-300 h-10">
//         <div>
//           <h1>paylance</h1>
//         </div>
//         <div >
//           <ol className="flex justify-between gap-5  ">
//             <li className="">HOME</li>
//             <li className="">FEATURE</li>
//             <li className="">How It Works</li>
//             <li className="">Pricing</li>
//             </ol>
//         </div>
//         <div>
//           <button>Get Started</button>
//         </div>
//       </nav>
//       <div className="text-center">
//         <h1 className="text-2xl font-semibold leading-tight text-slate-900 md:text-5xl">Send & Receive Money Instantly<br/> Secure Simple Global</h1>
//         <p className="text-gray-600">Manage spending, track income, and stay on top of your <br/>finances with ease - all from one simple dashboard</p>
//       </div>
//       <div className="flex items-center justify-center rounded-xl">
//         <input type="email" placeholder="Enter Your Email" className="border"/>
//         <button>Get Started</button>
//       </div>
//       <div className="relative flex justify-center h-[600px] max-w-6xl">
//         <Image
//             src={logo}
//             alt="Paylance Logo"
//             // width={36}
//             // height={36}
//             className="object-contain -mt-60"
//             priority
//           />
//       </div>
//     </section>
//   );
// }
import Features from './component/Features';
import Hero from './component/Hero';
import logo from './Screenshot_2026-02-02_085244-removebg-preview.png';
import Image from 'next/image';
import Howitworks from './component/Howitworks';
import Pricing from './component/Pricing';
import Testimonial from './component/Testimonials';
import CTASection from './component/CTAsection';
import Footer from './component/Footer';

export default function Home() {
  return(
    <>
    <Hero/>
    <Features/>
    <Howitworks/>
    <Pricing/>
    <Testimonial/>
    <CTASection/>
    <Footer/>
    </>
  );
}
