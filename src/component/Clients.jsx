

export default function Clients() {
    const clients = [
  {
    id: 1,
    image: "/Ellipse 29.svg",
    name: "Rauman Smith",
    designation: "CEO, New York",
    description:
      "I have worked with several consultants and the quality service is amazing. Best team ever. Highly recommended.",
  },
  {
    id: 2,
    image: "/Ellipse 28.svg",
    name: "Shayne Kayak",
    designation: "Product Designer",
    description:
      "Amazing experience! They provided outstanding design, marketing strategies and consultation support.",
  },
  {
    id: 3,
    image: "/Ellipse 31.svg",
    name: "John Lopres",
    designation: "CEO, California",
    description:
      "Great service! Fast communication and reliable team. Helped us achieve our business goals very smoothly.",
  },
  {
    id: 4,
    image: "/Ellipse 33.svg",
    name: "Manny Freeman",
    designation: "Marketing Manager",
    description:
      "They gave us amazing consulting ideas and marketing strategies. Very helpful team.",
  },
  {
    id: 5,
    image: "/Ellipse 35.svg",
    name: "Lucy",
    designation: "Developer, Australia",
    description:
      "Great experience overall! Excellent service and communication. Would definitely recommend.",
  },
];
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Happy Clients
      </h2>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white p-5 shadow-lg rounded-xl hover:shadow-2xl transition text-left"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />

            <p className="text-gray-600 text-sm mb-3">{client.description}</p>

            <h3 className="font-bold text-lg text-blue-500">{client.name}</h3>
            <span className="text-gray-500 text-sm">{client.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
}