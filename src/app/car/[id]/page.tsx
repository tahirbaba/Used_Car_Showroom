import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 🔽 Dummy car data
const Cars = [
  {
    id: "1",
    image: "/fortuner.webp",
    model: "Toyota Fortuner",
    year: 2020,
    mileage: "52,000 KM",
    color: "Gray",
    price: "9,800,000",
    location: "Clifton, Karachi",
    description: "A well-maintained Toyota Fortuner with excellent performance, spacious interior, and reliable safety features.",
  },
  {
    id: "2",
    image: "/toyota-hilux-vigo.jpg",
    model: "Toyota Vigo",
    year: 2018,
    mileage: "65,000 KM",
    color: "White",
    price: "8,200,000",
    location: "Gulistan-e-Johar",
    description: "Perfect for off-road and city driving. Smooth suspension and rugged body. Very fuel efficient for its class.",
  },
  {
    id: "3",
    image: "/honda-civic.jpg",
    model: "Honda Civic",
    year: 2024,
    mileage: "10,000 KM",
    color: "Gary",
    price: "5,100,000",
    location: "DHA Phase 5, Karachi",
    description: "Sporty and stylish sedan with advanced features and great road grip. Ideal for everyday use.",
  },
  {
    id: "4",
    image: "/Suzuki Cultus.jpg",
    model: "Suzuki Cultus",
    year: 2021,
    mileage: "25,000 KM",
    color: "Silver",
    price: "2,500,000",
    location: "North Nazimabad, Karachi",
    description: "Compact and fuel-efficient hatchback, perfect for city driving with comfortable seating for 5.",
  },
  {
    id: "5",
    image: "/KIA Sportage.jpg",
    model: "KIA Sportage",
    year: 2022,
    mileage: "18,000 KM",
    color: "Black",
    price: "7,200,000",
    location: "PECHS, Karachi",
    description: "Premium SUV with modern features, panoramic sunroof, and powerful engine. Almost like new.",
  },
  {
    id: "6",
    image: "/Hyundai Tucson.jpg",
    model: "Hyundai Tucson",
    year: 2021,
    mileage: "30,000 KM",
    color: "Red",
    price: "6,800,000",
    location: "Nazimabad, Karachi",
    description: "Spacious SUV with smooth ride and latest infotainment system. Great for long trips.",
  },
  {
    id: "7",
    image: "/Suzuki Alto.jpg",
    model: "Suzuki Alto",
    year: 2017,
    mileage: "42,000 KM",
    color: "White",
    price: "1,900,000",
    location: "Federal B Area, Karachi",
    description: "Budget-friendly small car with excellent fuel economy. Maintained with care.",
  },
  {
    id: "8",
    image: "/Honda City.jpg",
    model: "Honda City",
    year: 2006,
    mileage: "55,000 KM",
    color: "Black",
    price: "3,300,000",
    location: "Korangi, Karachi",
    description: "Reliable sedan with solid performance, spacious trunk, and comfortable drive.",
  },
  {
    id: "9",
    image: "/Toyota Corolla.jpg",
    model: "Toyota Corolla",
    year: 2017,
    mileage: "75,000 KM",
    color: "Dark Blue",
    price: "3,600,000",
    location: "Gulshan-e-Iqbal, Karachi",
    description: "Pakistanis favorite family car with high resale value and trusted reliability.",
  },
  {
    id: "10",
    image: "/Daihatsu Mira.jpg",
    model: "Daihatsu Mira",
    year: 2020,
    mileage: "38,000 KM",
    color: "White",
    price: "2,150,000",
    location: "Malir, Karachi",
    description: "Imported Japanese model with hybrid tech, excellent mileage, and compact design.",
  },
  {
    id: "11",
    image: "/Suzuki Wagon R.webp",
    model: "Suzuki Wagon R",
    year: 2021,
    mileage: "29,000 KM",
    color: "White",
    price: "2,400,000",
    location: "Shah Faisal Colony, Karachi",
    description: "Spacious hatchback with high roof and economical engine. Great value for money.",
  },
  {
    id: "12",
    image: "/Nissan Dayz.jpg",
    model: "Nissan Dayz",
    year: 2018,
    mileage: "40,000 KM",
    color: "Gray",
    price: "2,300,000",
    location: "Johar Mor, Karachi",
    description: "Japanese kei car with modern interior and great city driving experience.",
  },
  {
    id: "13",
    image: "/Toyota Aqua.webp",
    model: "Toyota Aqua",
    year: 2015,
    mileage: "60,000 KM",
    color: "Red",
    price: "3,900,000",
    location: "Karimabad, Karachi",
    description: "Hybrid hatchback with incredible fuel economy, ideal for daily commutes.",
  },
  {
    id: "14",
    image: "/Honda BR-V.webp",
    model: "Honda BR-V",
    year: 2022,
    mileage: "28,000 KM",
    color: "White",
    price: "4,850,000",
    location: "University Road, Karachi",
    description: "7-seater SUV with sporty look and smooth handling. Best for large families.",
  },
  {
    id: "15",
    image: "/Toyota Prius.webp",
    model: "Toyota Prius",
    year: 2014,
    mileage: "82,000 KM",
    color: "White",
    price: "4,700,000",
    location: "Bahadurabad, Karachi",
    description: "Eco-friendly hybrid sedan with advanced features and comfortable interior.",
  },
  {
    id: "16",
    image: "/MG HS.webp",
    model: "MG HS",
    year: 2020,
    mileage: "22,000 KM",
    color: "White",
    price: "8,000,000",
    location: "Gulberg, Karachi",
    description: "Luxurious MG SUV with turbocharged engine, leather seats, and panoramic sunroof.",
  },
  {
    id: "17",
    image: "/Changan Alsvin.webp",
    model: "Changan Alsvin",
    year: 2021,
    mileage: "35,000 KM",
    color: "White",
    price: "3,200,000",
    location: "Model Colony, Karachi",
    description: "Smart sedan with European design, digital meter, and DCT transmission.",
  },
  {
    id: "18",
    image: "/KIA Picanto.jpg",
    model: "KIA Picanto",
    year: 2020,
    mileage: "33,000 KM",
    color: "Sky Blue",
    price: "2,400,000",
    location: "Garden West, Karachi",
    description: "Compact and safe city car with premium build and affordable maintenance.",
  },
  {
    id: "19",
    image: "/Suzuki Swift.jpg",
    model: "Suzuki Swift",
    year: 2019,
    mileage: "47,000 KM",
    color: "Red",
    price: "2,900,000",
    location: "Ancholi, Karachi",
    description: "Quick and stylish hatchback with sporty suspension and responsive steering.",
  },
  {
    id: "20",
    image: "/Honda Vezel.webp",
    model: "Honda Vezel",
    year: 2022,
    mileage: "77,000 KM",
    color: "Blue",
    price: "4,950,000",
    location: "Airport, Karachi",
    description: "Elegant hybrid crossover with stylish design and excellent fuel efficiency.",
  },
  // ⚠️ Add other car objects similarly...
];

// 🔽 Car detail page component
export default function CarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const car = Cars.find((car) => car.id === params.id);

  if (!car) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 🔹 Car Image */}
        <div className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={car.image}
            alt={car.model}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* 🔹 Car Info */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">{car.model}</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {car.description}
          </p>

          <ul className="space-y-2 text-gray-800 text-base">
            <li>
              <strong>Year:</strong> {car.year}
            </li>
            <li>
              <strong>Mileage:</strong> {car.mileage}
            </li>
            <li>
              <strong>Color:</strong> {car.color}
            </li>
            <li>
              <strong>Price:</strong> PKR {car.price}
            </li>
            <li>
              <strong>Location:</strong> {car.location}
            </li>
          </ul>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Contact Seller
          </Link>
        </section>
      </div>
    </main>
  );
}
