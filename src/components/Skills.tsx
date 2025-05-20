
import { Card } from "@/components/ui/card";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Vue.js",
      "Tailwind CSS",
      "Styled Components"
    ]
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "REST API",
      "GraphQL"
    ]
  },
  {
    name: "Database",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase"
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Jest",
      "AWS",
      "Figma",
      "Responsive Design",
      "Agile Methodology"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="mb-10 text-slate max-w-2xl">
          I've worked with a variety of technologies in the web development world.
          From frontend to backend, here's a comprehensive list of my technical skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-navy-light border border-slate-dark p-6">
              <h3 className="text-xl text-accent mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-navy border border-slate-dark rounded-full text-slate-light text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
