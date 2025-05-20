
import { Card } from "@/components/ui/card";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Android Development",
    skills: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Android SDK",
      "MVVM Architecture",
      "Material Design",
      "Kotlin Coroutines",
      "Room Database",
      "Navigation Component",
      "WorkManager",
      "Dagger/Hilt",
      "LiveData/Flow"
    ]
  },
  {
    name: "Mobile Technologies",
    skills: [
      "RESTful APIs",
      "Firebase",
      "Google Play Services",
      "SQLite",
      "Retrofit",
      "Glide/Coil",
      "Push Notifications",
      "Google Maps API",
      "Location Services",
      "Bluetooth/NFC"
    ]
  },
  {
    name: "Development Tools",
    skills: [
      "Android Studio",
      "Git",
      "GitHub",
      "Gradle",
      "Figma",
      "Jira/Trello",
      "JUnit/Espresso",
      "Crashlytics",
      "Google Play Console",
      "CI/CD"
    ]
  },
  {
    name: "Web & Other Skills",
    skills: [
      "HTML5/CSS3",
      "JavaScript/TypeScript",
      "React",
      "Node.js",
      "REST API Design",
      "JSON/XML",
      "Agile Methodology",
      "UI/UX Principles",
      "App Performance Optimization"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="mb-10 text-slate max-w-2xl">
          I specialize in Android development with extensive experience across the Android ecosystem.
          My technical skills range from core Android development to supporting technologies.
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
