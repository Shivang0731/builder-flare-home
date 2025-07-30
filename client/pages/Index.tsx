import { useState } from "react";
import { Play, Pause, Volume2, RotateCcw, Brain, BookOpen, PenTool, Clock, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Demo flashcards
  const flashcards = [
    { question: "What is photosynthesis?", answer: "The process by which plants use sunlight to produce glucose from carbon dioxide and water." },
    { question: "What is the mitochondria?", answer: "The powerhouse of the cell, responsible for producing ATP energy." },
    { question: "What is Newton's First Law?", answer: "An object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an external force." }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Flashcards",
      description: "Generate smart flashcards from any text content using AI",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Volume2,
      title: "Audio Study",
      description: "Convert notes to audio for hands-free learning",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: PenTool,
      title: "Quiz Generator",
      description: "Create custom quizzes to test your knowledge",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BookOpen,
      title: "Study Notes",
      description: "Organize and structure your study materials",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">StudyAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-purple-600 transition-colors">Demo</a>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Study Tools
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Learning </span>
            Experience
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Generate flashcards, create audio notes, build quizzes, and organize your study materials with our AI-powered study aid generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Learning Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Study Smarter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of study tools helps you learn more effectively and retain information better.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} mx-auto mb-4 flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demos */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try Our Features Live
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of AI-driven studying with these interactive demos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Flashcard Demo */}
            <Card className="shadow-xl border-none">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-purple-600" />
                  Interactive Flashcards
                </CardTitle>
                <CardDescription>Click to reveal answers and test your knowledge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">
                      {showAnswer ? "Answer:" : "Question:"}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {showAnswer ? flashcards[currentCard].answer : flashcards[currentCard].question}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Card {currentCard + 1} of {flashcards.length}
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowAnswer(!showAnswer)}
                    >
                      {showAnswer ? "Show Question" : "Show Answer"}
                    </Button>
                    <Button onClick={nextCard}>
                      Next Card
                    </Button>
                  </div>
                </div>
                <Progress value={((currentCard + 1) / flashcards.length) * 100} className="h-2" />
              </CardContent>
            </Card>

            {/* Audio Player Demo */}
            <Card className="shadow-xl border-none">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Volume2 className="w-6 h-6 mr-2 text-blue-600" />
                  Audio Study Player
                </CardTitle>
                <CardDescription>Listen to your notes while commuting or exercising</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-blue-600" />
                      ) : (
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-center font-semibold mb-2">Biology Chapter 5: Photosynthesis</h3>
                  <p className="text-center text-gray-600 text-sm">3:45 / 12:30</p>
                </div>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button size="lg" onClick={togglePlay}>
                    {isPlaying ? (
                      <Pause className="w-5 h-5 mr-2" />
                    ) : (
                      <Play className="w-5 h-5 mr-2" />
                    )}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                </div>
                <Progress value={30} className="h-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Flashcards Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Improved Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Study Habits?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already improved their learning with StudyAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-purple-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">StudyAI</span>
              </div>
              <p className="text-gray-400">
                Empowering students with AI-driven study tools for better learning outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Flashcards</li>
                <li>Audio Notes</li>
                <li>Quiz Generator</li>
                <li>Study Planner</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StudyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
