import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import RamBarkhaneProfilePhoto from "../assets/RamBarkhaneProfilePhoto.jpg";
import EchoesofAwakening from "../assets/EchoesofAwakening.jpg";
import BannerOfWebsiteRam from "../assets/BannerOfWebsiteRam.jpg";
import EtherealEleganceShadowsinCelestialMist from "../assets/EtherealEleganceShadowsinCelestialMist.jpg";
import Resurgence from "../assets/Resurgence.jpg";
import Magnanimous from "../assets/Magnanimous.jpg";
import Tranquil  from "../assets/Tranquil.jpg"
import Relentless from "../assets/Relentless.jpg"
import Aspire from "../assets/Aspire.jpg"
import Untittled1 from "../assets/Untittled1.jpg"
import Untittled2 from "../assets/Untittled2.jpg"
import Untittled3 from "../assets/Untittled3.jpg"
import Untittled4 from "../assets/Untittled4.jpg"
import Untittled5 from "../assets/Untittled5.jpg"

export default function RamBarkhaneLuxury() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("masterpiece");
  const artworks = [
        {
      title: "Aspire",
      medium: "Oil and acrylic Mixed on canvas",
      dimensions: "24x60 Inches",
      price: "$5 M",
      img: Aspire,
      collection : "masterpiece",
    },
    {
      title: "Resurgence",
      medium: "Oil on Canvas",
      dimensions: "30x40 Inches",
      price: "$5 M",
      img: Resurgence,
      collection : "masterpiece",
    },
    {
      title: "Magnanimous",
      medium: "Oil on Canvas",
      dimensions: "15x23 Inches",
      price: "$1 M",
      img: Magnanimous,
      collection : "masterpiece",
    },
        {
      title: "Relentless",
      medium: "Oil on Canvas",
      dimensions: "18x24 Inches",
      price: "$6700000",
      img: Relentless,
      collection : "masterpiece",
    },
    {
      title: "Tranquil",
      medium: "Oil on Canvas",
      dimensions: "15x23 Inches",
      price: "$500000",
      img: Tranquil,
      collection : "limited",
    },
    {
      title: "Echoes of Awakening",
      medium: "Oil on Canvas",
      dimensions: "24x24 Inches",
      price: "$ 80000",
      img: EchoesofAwakening,
      collection : "limited",
    },
    {
      title: "Ethereal Elegance: Shadows in Celestial Mist",
      medium: "Oil on Canvas",
      dimensions: "26x28 Inches",
      price: "$75000",
      img: EtherealEleganceShadowsinCelestialMist,
      collection : "limited",
    },
        {
      title: "Untittled",
      medium: "Oil on canvas",
      dimensions: "4x4",
      price: "$100000",
      img: Untittled3,
      collection : "limited",
    },
        {
      title: "Untittled",
      medium: "Oil on canvas",
      dimensions: "4x4",
      price: "$100000",
      img: Untittled4,
      collection : "modern",
    },
        {
      title: "Untittled",
      medium: "Oil on canvas",
      dimensions: "12x12 Inches",
      price: "$100000",
      img: Untittled5,
      collection : "modern",
    },
    {
      title: "Untittled",
      medium: "Acrylic on canvas",
      dimensions: "12x12 Inches",
      price: "$1000",
      img: Untittled1,
      collection : "modern",
    },
        {
      title: "Untittled",
      medium: "Acrylic on canvas",
      dimensions: "12x12 Inches",
      price: "$1000",
      img: Untittled2,
      collection : "modern",
    },
    // {
    //   title: "Resurgence – A Strong Comeback",
    //   medium: "Acrylic on Canvas",
    //   dimensions: "36 x 48 in",
    //   price: "$12000",
    //   img: "/art1.jpg",
    // },
    // {
    //   title: "Whispers of Infinity",
    //   medium: "Mixed Media on Canvas",
    //   dimensions: "40 x 40 in",
    //   price: "$9500",
    //   img: "/art2.jpg",
    // },
    // {
    //   title: "Golden Horizon",
    //   medium: "Acrylic & Gold Leaf",
    //   dimensions: "30 x 40 in",
    //   price: "$15000",
    //   img: "/art3.jpg",
    // },
  ];

   const filteredArtworks = artworks.filter(
    (art) => art.collection === selectedCollection
  );

  return (
    <div className="bg-black text-white font-serif">
      {/* Banner Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Slideshow placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-pulse opacity-70"
          style={{ backgroundImage: `url(${BannerOfWebsiteRam})` }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            Where Art Meets Luxury
          </h1>
          <p className="text-xl md:text-2xl italic">
            Original Abstract Masterpieces of Ram Barkhane
          </p>
        </div>
      </section>

      {/* Artist Portrait & Statement */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6">
        <img
          src={RamBarkhaneProfilePhoto}
          alt="Ram Barkhane"
          className="mx-auto mb-6 rounded-full w-48 h-48 object-cover border-4 border-gray-600 shadow-lg"
        />
        <p className="text-lg md:text-xl leading-relaxed">
          Transforming emotions into timeless abstract masterpieces — bespoke
          art for the world's most refined homes, offices, and private estates.
        </p>
      </section>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setCollectionOpen(!collectionOpen)}
          className="bg-white text-black px-4 py-2 rounded-2xl shadow-lg font-medium"
        >
          View the Collection
        </button>
        {collectionOpen && (
          <div className="mt-2 bg-gray-900 border border-gray-700 rounded-lg p-4 text-left space-y-2">
            <button onClick={() => setSelectedCollection("masterpiece")} className="block hover:text-gray-300">
              The Masterpiece Collection
            </button>
            <button onClick={() => setSelectedCollection("limited")} className="block hover:text-gray-300">
              Limited Edition Luxe Collection
            </button>
            <button onClick={() => setSelectedCollection("modern")} className="block hover:text-gray-300">
              Modern Elegance Collection
            </button>
          </div>
        )}
      </div>

      <div className="fixed top-6 right-6 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Hamburger Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-y-0 right-0 w-80 bg-gray-950 p-8 z-40 space-y-8 overflow-y-auto"
        >
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-sm leading-relaxed text-gray-300 text-left">
            Modern Visionary | Creator of Cracturism & Floating Dotism | Master
            of Abstract Elegance
            <br />
            <br />
            Hi, I am Ram Barkhane – Contemporary Abstract Artist I am
            contemporary abstract artist whose work explores depth, texture, and
            movement through innovative techniques. My unique styles, Cracturism
            and Floating Dotism, combine intricate linework and layered textures
            to create paintings that feel both timeless and modern. <br />{" "}
            <br /> Fusing minimalism with expressive abstraction, My canvases
            often feature powerful contrasts—such as black and gold compositions
            that radiate luxury and elegance. My works are designed to
            complement refined interiors, making them sought after by art
            collectors and luxury homeowners worldwide. <br /> <br /> Each
            painting is not only a visual experience but also a meditation on
            balance, energy, and emotion. With bold gestures and delicate
            details, Ram’s art bridges contemporary aesthetics with soulful
            expression, inviting viewers to find their own meanings within the
            abstract forms.
          </p>

          <p className="text-sm leading-relaxed text-gray-300">
            You will find on this website:
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed text-gray-300 text-left mb-4">
            <li>Contemporary Abstract Painting</li>
            <li>Modern Abstract Art</li>
            <li>Textured Abstract Painting</li>
            <li>Luxury Wall Art</li>
            <li>Minimalist Abstract Art</li>
            <li>Abstract Expressionism</li>
            <li>Large Canvas Abstract Painting</li>
            <li>Abstract Art for Luxury Interiors</li>
            <li>Black and Gold Abstract Art (specific & trending)</li>
            <li>Abstract Art for Modern Homes</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">Studio</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            [High-quality studio photography + 1000 words of content on creative
            process, methodology, philosophy, journey, evolution, and
            behind-the-scenes insights.]
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Contact</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Ram Barkhane <br />
            E6/95 Shalimar Homes Flat No. 6 <br />
            Arera Colony, Bhopal <br />
            Madhya Pradesh, India <br />
            PIN- 462016 <br />
            Email: rambarkhane9371@gmail.com
          </p>
        </motion.div>
      )}


      <div className="text-center hidden  xl:block  2xl:block text-lg md:text-xl leading-relaxed  ">
         <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-md leading-relaxed text-gray-300 text-center">
            Modern Visionary | Creator of Cracturism & Floating Dotism | Master
            of Abstract Elegance
            <br />
            <br />
            <p className="text-sm leading-relaxed text-gray-300 text-center p-2">Hi, I am Ram Barkhane – Contemporary Abstract Artist I am
            contemporary abstract artist whose work explores depth, texture, and
            movement through innovative techniques. My unique styles, Cracturism
            and Floating Dotism, combine intricate linework and layered textures
            to create paintings that feel both timeless and modern. <br />{" "}
            <br /> Fusing minimalism with expressive abstraction, My canvases
            often feature powerful contrasts—such as black and gold compositions
            that radiate luxury and elegance. My works are designed to
            complement refined interiors, making them sought after by art
            collectors and luxury homeowners worldwide. <br /> <br /> Each
            painting is not only a visual experience but also a meditation on
            balance, energy, and emotion. With bold gestures and delicate
            details, Ram’s art bridges contemporary aesthetics with soulful
            expression, inviting viewers to find their own meanings within the
            abstract forms.</p>
          </p>

          <p className="text-sm leading-relaxed text-gray-300 mt-3">
            You will find on this website:
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed text-gray-300 mt-2 text-center">
            <li>Contemporary Abstract Painting</li>
            <li>Modern Abstract Art</li>
            <li>Textured Abstract Painting</li>
            <li>Luxury Wall Art</li>
            <li>Minimalist Abstract Art</li>
            <li>Abstract Expressionism</li>
            <li>Large Canvas Abstract Painting</li>
            <li>Abstract Art for Luxury Interiors</li>
            <li>Black and Gold Abstract Art (specific & trending)</li>
            <li>Abstract Art for Modern Homes</li>
          </ul>
      </div>

      {/* Featured Collection Gallery */}
      <section id="masterpiece" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Collection 
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {artworks.map((art, idx) => (
            <div
              key={idx}
              className="space-y-4 border-2 border-gray-400 rounded-2xl pb-2"
            >
              <img
                src={art.img}
                alt={art.title}
                className="rounded-xl shadow-lg w-full h-96  object-cover"
              />
              <h3 className="text-2xl font-semibold">{art.title}</h3>
              <p className="text-gray-400 text-sm">{art.medium}</p>
              <p className="text-gray-400 text-sm">{art.dimensions}</p>
              <p className="text-lg">{art.price}</p>
              <a
  href={`https://wa.me/919200636667?text=${encodeURIComponent(
    `Hello Ram,\n\nI am interested in purchasing:\n` +
    `*Title:* ${art.title}\n` +
    `*Medium:* ${art.medium}\n` +
    `*Dimensions:* ${art.dimensions}\n` +
    `*Price:* ${art.price}\n\n` +
    `Please provide more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-black px-6 py-2 rounded-2xl font-medium shadow hover:bg-gray-200"
>
  Purchase
</a>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
