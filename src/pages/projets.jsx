import Twitter from "../assets/Twitter.png";


const projets = [
{
      title: "WACtify",
      description: "Une app qui utilise l’API Spotify",
      stack: ["React JS", "TailwindCSS", "Spotify API", "Docker", "Node JS", ],
      github: "https://github.com/Alfraise/Spotify",
    },
    {
      title: "Epitweet",
      description: "Un réseaux type Twitter",
      stack: ["PHP", "TailwindCSS", "MYSQL", "Javascript"],
      github: "https://github.com/Alfraise/Twitter",
      image:  Twitter,
    },
  ];
  
  const Projets = () => {
    return (
      <section id="projets" className="py-16 bg-violet-500 text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Mes projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">

            {projets.map((projet, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {projet.image && (
                  <img
                    src={projet.image}
                    alt={projet.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
                  <p className="mb-4">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.stack.map((tech, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {projet.github && (
                      <a
                        href={projet.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline"
                      >
                        Code
                      </a>
                    )}
                    {projet.demo && (
                      <a
                        href={projet.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Projets;