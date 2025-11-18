
export default function Projects() {
    const projects = [
  {
    id: 1,
    image: "/pexels-brett-sayles-2881232.svg",
    name: "Consultation",
    description: "Provide expert guidance for home buying and selling.",
  },
  {
    id: 2,
    image: "/pexels-brett-sayles-2881232-1.svg",
    name: "Design",
    description: "Bring your vision to life with creative home designs.",
  },
  {
    id: 3,
    image: "/pexels-brett-sayles-2881232-2.svg",
    name: "Marketing & Design",
    description: "Boost your property visibility with smart marketing.",
  },
  {
    id: 4,
    image: "/pexels-brett-sayles-2881232-3.svg",
    name: "Consultation Marketing",
    description: "Strategic planning to improve your sales outcomes.",
  },
  {
    id: 5,
    image: "/pexels-fauxels-3182834.svg",
    name: "Consultation",
    description: "Help clients understand market trends effectively.",
  },
];
  return (
    <section className="w-full bg-[#f4f9ff] py-20 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-3">
        Our Projects
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-3"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md"
            />

            <h3 className="font-bold text-lg text-blue-600 mt-3">
              {project.name}
            </h3>

            <p className="text-sm text-gray-500 mb-4">{project.description}</p>

            <button className="w-[140px] bg-orange-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
