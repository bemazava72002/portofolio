"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Send } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  const projects = [
    {
      title: "App de gestion de rapports mensuels",
      description:
        "Application web pour la gestion des rapports mensuels des pôles anti-corruption, développée avec SvelteKit, Node.js, PostgreSQL.",
      technologies: ["SvelteKit", "Node.js", "PostgreSQL"],
      image: "/rapport_app.png",
    },
    {
      title: "Portfolio développeur",
      description:
        "Portfolio personnel responsive pour présenter les projets et les compétences. Construit avec Next.js et Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "/portfolio.png",
    },
    {
      title: "Clone de LinkedIn",
      description:
        "Clone de LinkedIn avec système d’authentification, publications, commentaires et réseau de connexions.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "/linkedin_clone.png",
    },
  ];

  const handleTabChange = (tab: string) => setActiveTab(tab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Julio Bemazava</h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Développeur Full Stack | Node.js · SvelteKit · PostgreSQL
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/bemazava" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-700 hover:text-black transition-colors" />
            </a>
            <a href="https://linkedin.com/in/bemazava" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="flex justify-center space-x-4 mb-8">
            <TabsTrigger value="tab1">Projets</TabsTrigger>
            <TabsTrigger value="tab2">À propos</TabsTrigger>
            <TabsTrigger value="tab3">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="group transition-transform hover:scale-[1.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-full h-48 sm:h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="space-y-4 p-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i}>{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tab2">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold">À propos de moi</h2>
              <p className="text-gray-700 text-justify">
                Je suis un développeur passionné par la création de solutions web robustes et évolutives.
                J’ai de l’expérience dans le développement full stack avec des technologies comme Node.js,
                SvelteKit, PostgreSQL, Next.js et React. Mon objectif est de concevoir des applications qui
                apportent une vraie valeur ajoutée à leurs utilisateurs.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="tab3">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold">Contactez-moi</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" placeholder="Votre nom" className="w-full" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Votre email" className="w-full" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Votre message" className="w-full" />
                </div>
                <Button type="submit" className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Envoyer
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
