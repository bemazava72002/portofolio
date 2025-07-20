"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Download,
  Send,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const skills = [
    { name: "Node.js", category: "Backend", level: 70, icon: <Server className="w-5 h-5" /> },
    { name: "React.js", category: "Frontend", level: 65, icon: <Code className="w-5 h-5" /> },
    { name: "Next.js", category: "Fullstack", level: 60, icon: <Globe className="w-5 h-5" /> },
    { name: "Django", category: "Backend", level: 80, icon: <Database className="w-5 h-5" /> },
    { name: "Spring Boot", category: "Backend", level: 62, icon: <Server className="w-5 h-5" /> },
    { name: "Spring MVC", category: "Backend", level: 55, icon: <Server className="w-5 h-5" /> },
    { name: "JavaScript", category: "Language", level: 75, icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", category: "Language", level: 61, icon: <Code className="w-5 h-5" /> },
    { name: "Python", category: "Language", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Java", category: "Language", level: 73, icon: <Code className="w-5 h-5" /> },
    { name: "PostgreSQL", category: "Database", level: 67, icon: <Database className="w-5 h-5" /> },
    { name: "MySQL", category: "Database", level: 87, icon: <Database className="w-5 h-5" /> },
    { name: "MongoDB", category: "Database", level: 64, icon: <Database className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme e-commerce complète avec gestion des paiements, authentification utilisateur et tableau de bord admin.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "JWT", "Stripe"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava",
      demo: "https://demo.com",
      category: "Fullstack",
    },
    {
      title: "Task Management",
      description:
        "API REST robuste pour la gestion de projets avec authentification JWT et documentation Swagger.",
      technologies: ["Django", "Next.js", "PostgreSQL", "JWT", "Swagger"],
      image:
        "https://images.pexels.com/photos/5439379/pexels-photo-5439379.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava72002/task-management/",
      demo: "https://demo.com",
      category: "Backend",
    },
    {
      title: "Real-time Chat App",
      description:
        "Application de chat en temps réel avec notifications push et partage de fichiers.",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava72002",
      demo: "https://demo.com",
      category: "Frontend",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Tableau de bord d'analyse avec visualisations interactives et rapports automatisés.",
      technologies: ["Django", "React.js", "Chart.js", "Redis"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava72002",
      demo: "https://demo.com",
      category: "Fullstack",
    },
  ];

  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "TechCorp Solutions",
      period: "2022 - Présent",
      description:
        "Développement d'applications web complexes avec Next.js et Node.js, encadrement d'équipe junior.",
      achievements: [
        "Amélioration des performances de 40% sur les applications principales",
        "Mise en place de l'architecture microservices",
        "Formation de 5 développeurs juniors",
      ],
    },
    {
      title: "Développeur Full Stack",
      company: "Digital Innovation Lab",
      period: "2020 - 2022",
      description:
        "Conception et développement d'applications web avec React.js, Django et Spring Boot.",
      achievements: [
        "Développement de 12 applications web complètes",
        "Réduction du temps de développement de 30%",
        "Intégration d'APIs tierces complexes",
      ],
    },
    {
      title: "Développeur FullStack",
      company: "Pôle d'Anti-Corruption de Madagascar",
      period: "2024-2025",
      description: "Conception et réalisation d'une application de gestion des rapports juridiques",
      achievements: [
        "Création d'un APIs REST robuste",
        "Optimisation des requêtes base de données",
        "Faire le teste de l'application",
      ],
    },
  ];

  const education = [
    {
      degree: "Master en Informatique",
      school: "École Nationale d'Informatique",
      period: "2024 - 2025",
      description: "Spécialisation en développement web et génie logiciel",
    },
    {
      degree: "Licence en Informatique",
      school: "Ecole National d'Informatique",
      period: "2023 - 2024",
      description: "Ecole Nationale d'Informatique",
    },
  ];

  const certifications = ["Cybersecurité", "Data Analyst"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["accueil", "a-propos", "competences", "projets", "experience", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-slate-900">
              BEMAZAVA<span className="text-blue-600">.</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {["accueil", "a-propos", "competences", "projets", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition-colors capitalize ${
                      activeSection === item
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {item.replace("-", " ")}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>CV</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {["accueil", "a-propos", "competences", "projets", "experience", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="w-full text-left py-3 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors capitalize"
                    >
                      {item.replace("-", " ")}
                    </button>
                  )
                )}
                <a href="#">
                  <Button variant="outline" size="sm" className="w-fit">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge variant="outline" className="uppercase tracking-widest text-blue-600 px-3 py-1">
                Développeur FullStack
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Je suis Julio, développeur fullstack passionné
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8">
              Je crée des applications web modernes et performantes pour aider les entreprises à
              réussir en ligne.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Contactez-moi
              </Button>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                <Download className="w-5 h-5 mr-1" /> Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">À propos de moi</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Je suis un développeur fullstack expérimenté avec un fort intérêt pour les nouvelles
            technologies et les bonnes pratiques. Passionné par la création d'applications web
            performantes, maintenables et évolutives, je mets l’accent sur la qualité du code et
            l’expérience utilisateur.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Compétences</h2>

          <Tabs defaultValue="backend" className="max-w-4xl mx-auto">
            <TabsList className="justify-center mb-8">
              <TabsTrigger value="backend" className="capitalize">
                Backend
              </TabsTrigger>
              <TabsTrigger value="frontend" className="capitalize">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="language" className="capitalize">
                Langages
              </TabsTrigger>
              <TabsTrigger value="database" className="capitalize">
                Bases de données
              </TabsTrigger>
            </TabsList>

            <TabsContent value="backend">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === "Backend")
                  .map(({ name, level, icon }) => (
                    <Card key={name} className="p-4 flex items-center space-x-4">
                      <div className="text-blue-600">{icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between font-semibold text-slate-900 mb-1">
                          <span>{name}</span>
                          <span>{level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-2 bg-blue-600"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="frontend">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === "Frontend")
                  .map(({ name, level, icon }) => (
                    <Card key={name} className="p-4 flex items-center space-x-4">
                      <div className="text-blue-600">{icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between font-semibold text-slate-900 mb-1">
                          <span>{name}</span>
                          <span>{level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-2 bg-blue-600"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="language">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === "Language")
                  .map(({ name, level, icon }) => (
                    <Card key={name} className="p-4 flex items-center space-x-4">
                      <div className="text-blue-600">{icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between font-semibold text-slate-900 mb-1">
                          <span>{name}</span>
                          <span>{level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-2 bg-blue-600"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="database">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === "Database")
                  .map(({ name, level, icon }) => (
                    <Card key={name} className="p-4 flex items-center space-x-4">
                      <div className="text-blue-600">{icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between font-semibold text-slate-900 mb-1">
                          <span>{name}</span>
                          <span>{level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-2 bg-blue-600"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Projets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="capitalize">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center space-x-1"
                      aria-label={`Voir le code source de ${project.title}`}
                    >
                      <Github className="w-5 h-5" /> <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center space-x-1"
                      aria-label={`Voir la démo de ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" /> <span>Démo</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Expériences</h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Card key={i} className="p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="italic text-sm text-slate-600 mb-2">
                  {exp.company} - {exp.period}
                </p>
                <p className="text-slate-700 mb-3">{exp.description}</p>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Formation</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {education.map((edu, i) => (
              <Card key={i} className="p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="italic text-sm text-slate-600 mb-2">{edu.school} - {edu.period}</p>
                <p className="text-slate-700">{edu.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {certifications.map((cert, i) => (
                <Badge key={i} variant="outline" className="text-blue-600 px-4 py-2 rounded-full">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">Contactez-moi</h2>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Formulaire soumis !");
            }}
          >
            <div className="flex flex-col">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" type="text" required placeholder="Votre nom" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="Votre email" />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} required placeholder="Votre message" />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Send className="w-5 h-5 mr-2" /> Envoyer
              </Button>
            </div>
          </form>
          <div className="mt-12 text-center space-y-4 text-slate-700">
            <p className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" /> <span>julio@example.com</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" /> <span>+261 34 12 345 67</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" /> <span>Antananarivo, Madagascar</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Julio Bemazava. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" aria-label="Github" className="hover:text-blue-500">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:julio@example.com" aria-label="Email" className="hover:text-blue-500">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
