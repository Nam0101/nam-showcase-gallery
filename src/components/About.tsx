import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-slate">
              <p>
                Hello! I'm Nam, a passionate software developer with a focus on creating
                beautiful, functional, and user-friendly applications. My journey in coding
                began during my university studies where I discovered my love for problem-solving
                through programming.
              </p>
              <p>
                I enjoy building applications that solve real-world problems and provide
                exceptional user experiences. My approach combines technical excellence with
                creative thinking to deliver solutions that stand out.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or expanding my knowledge through online courses and
                technical books.
              </p>
              <p>
                Currently, I'm looking for opportunities to work with innovative teams on
                challenging projects. I'm particularly interested in roles that allow me to
                grow as a developer while making meaningful contributions.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Parallax speed={-20}>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </Parallax>
              <div className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-accent rounded-md top-4 left-4 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
