import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.77, 0, 0.175, 1] }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.98 }}
              style={{ height: '100%' }}
            >
              <Card className="bg-navy-light border border-slate-dark p-6" style={{ height: '100%' }}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
