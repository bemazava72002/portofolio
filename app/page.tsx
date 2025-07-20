"use client";

import { useState, useEffect } from 'react';
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
  X
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
      description: "Plateforme e-commerce complète avec gestion des paiements, authentification utilisateur et tableau de bord admin.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "JWT", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava",
      demo: "https://demo.com",
      category: "Fullstack"
    },
    {
      title: "Task Management",
      description: "API REST robuste pour la gestion de projets avec authentification JWT et documentation Swagger.",
      technologies: ["Django","Next.js", "PostgreSQL", "JWT", "Swagger"],
      image: "https://images.pexels.com/photos/5439379/pexels-photo-5439379.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava72002/task-management/",
      demo: "https://demo.com",
      category: "Backend"
    },
    {
      title: "Real-time Chat App",
      description: "Application de chat en temps réel avec notifications push et partage de fichiers.",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava72002",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
      title: "Analytics Dashboard",
      description: "Tableau de bord d'analyse avec visualisations interactives et rapports automatisés.",
      technologies: ["Django", "React.js", "Chart.js", "Redis"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/bemazava72002",
      demo: "https://demo.com",
      category: "Fullstack"
    }
  ];

  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "TechCorp Solutions",
      period: "2022 - Présent",
      description: "Développement d'applications web complexes avec Next.js et Node.js, encadrement d'équipe junior.",
      achievements: [
        "Amélioration des performances de 40% sur les applications principales",
        "Mise en place de l'architecture microservices",
        "Formation de 5 développeurs juniors"
      ]
    },
    {
      title: "Développeur Full Stack",
      company: "Digital Innovation Lab",
      period: "2020 - 2022",
      description: "Conception et développement d'applications web avec React.js, Django et Spring Boot.",
      achievements: [
        "Développement de 12 applications web complètes",
        "Réduction du temps de développement de 30%",
        "Intégration d'APIs tierces complexes"
      ]
    },
    {
      title: "Développeur FullStack",
      company: "Pôle d'Anti-Corruption de Madagascar",
      period: "2024-2025",
      description: "Conception et réalisation d'une application de gestion des rapports juridiques",
      achievements: [
        "Création d'un APIs REST robuste",
        "Optimisation des requêtes base de données",
        "Faire le teste de l'application"
      ]
    }
  ];

  const education = [
    {
      degree: "Master en Informatique",
      school: "École Nationale d'Informatique",
      period: "2024 - 2025",
      description: "Spécialisation en développement web et génie logiciel"
    },
    {
      degree: "Licence en Informatique",
      school: "Ecole National d'Informatique",
      period: "2023 - 2024",
      description: "Ecole Nationale d'Informatique"
    }
  ];

  const certifications = [
    "Cybersecurité",
    "Data Analyst",
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'a-propos', 'competences', 'projets', 'experience', 'contact'];
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-slate-900">
              BEMAZAVA<span className="text-blue-600">.</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['accueil', 'a-propos', 'competences', 'projets', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                {['accueil', 'a-propos', 'competences', 'projets', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors capitalize"
                  >
                    {item.replace('-', ' ')}
                  </button>
                ))}
                <a href="#"><Button variant="outline" size="sm" className="w-fit">
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
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                BEMAZAVA <span className="text-blue-600">Julio</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-2">
                Développeur Web Full Stack
              </p>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Passionné par la création d'applications web modernes et performantes avec 
                Node.js, React.js,Next.js, Django, Spring Boot
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projets')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Voir mes projets
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/bemazava72002" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/juliobemazava" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:bemazavajulio72002@email.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">À propos de moi</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Développeur full stack avec plus de 3 ans d'expérience dans la création d'applications web innovantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Passionné par le développement web depuis mes débuts, j'ai acquis une expertise solide 
                  dans les technologies modernes tant côté frontend que backend. Mon approche consiste à 
                  créer des solutions élégantes et performantes qui répondent aux besoins spécifiques de chaque projet.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Je maîtrise parfaitement l'écosystème JavaScript/TypeScript avec Node.js, React.js et Next.js, 
                  ainsi que les frameworks Java Spring Boot et Spring MVC, et Python Django. Cette polyvalence 
                  me permet d'adapter mes solutions aux contraintes techniques et aux préférences de chaque équipe.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-slate-600">Années d'expérience</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">10+</div>
                    <div className="text-sm text-slate-600">Projets réalisés</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Frontend</h3>
                        <p className="text-slate-600 text-sm">Interfaces utilisateur modernes</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      React.js, Next.js, TypeScript, Tailwind CSS
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Server className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Backend</h3>
                        <p className="text-slate-600 text-sm">APIs robustes et sécurisées</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Node.js, Django, Spring Boot, Spring MVC
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Database className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Database</h3>
                        <p className="text-slate-600 text-sm">Gestion de données efficace</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      PostgreSQL, MongoDB, Redis, MySQL
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compétences techniques</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Maîtrise des technologies modernes pour créer des solutions web performantes
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12">
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="Frontend">Frontend</TabsTrigger>
                <TabsTrigger value="Backend">Backend</TabsTrigger>
                <TabsTrigger value="Database">Database</TabsTrigger>
                <TabsTrigger value="Language">Languages</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                            <Badge variant="secondary" className="text-xs">{skill.category}</Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Maîtrise</span>
                            <span className="text-slate-900 font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {['Frontend', 'Backend', 'Database', 'Language'].map(category => (
                <TabsContent key={category} value={category} className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.filter(skill => skill.category === category).map((skill, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              {skill.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                              <Badge variant="secondary" className="text-xs">{skill.category}</Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-600">Maîtrise</span>
                              <span className="text-slate-900 font-medium">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mes projets</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Découvrez quelques-uns de mes projets récents qui démontrent mes compétences techniques
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                      <Button size="sm" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expérience & Formation</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Mon parcours professionnel et académique dans le développement web
              </p>
            </div>

            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="experience">Expérience</TabsTrigger>
                <TabsTrigger value="formation">Formation</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>

              <TabsContent value="experience">
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                              <Badge variant="outline">{exp.period}</Badge>
                            </div>
                            <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                            <p className="text-slate-600 mb-4">{exp.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-slate-900 text-sm">Réalisations clés :</h4>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="formation">
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                              <Badge variant="outline">{edu.period}</Badge>
                            </div>
                            <p className="text-green-600 font-medium mb-3">{edu.school}</p>
                            <p className="text-slate-600">{edu.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certifications">
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-yellow-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{cert}</h3>
                            <p className="text-slate-600 text-sm">Certification professionnelle</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contactez-moi</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Informations de contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-slate-600 font-auto">bemazavajulio72002@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Téléphone</p>
                      <p className="text-slate-600">+261 32 51 517 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Localisation</p>
                      <p className="text-slate-600">Fianarantsoa, Madagascar</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Suivez-moi</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/bemazava72002" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors">
                      <Github className="w-5 h-5 text-slate-600" />
                    </a>
                    <a href="https://linkedin.com/in/juliobemazava" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors">
                      <Linkedin className="w-5 h-5 text-slate-600" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Envoyez-moi un message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-2">
                    <div>
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" placeholder="Votre nom" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Sujet du message" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Votre message..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-bold text-xl mb-4">
              BEMAZAVA<span className="text-blue-400">.</span>
            </div>
            <p className="text-slate-400 mb-6">
              Développeur Web Full Stack passionné par l'innovation technologique
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/bemazava72002" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/juliobemazava" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:bemazavajulio72002@email.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-400 text-sm">
                © 2025 BEMAZAVA Julio. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}