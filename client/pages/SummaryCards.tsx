import { useState } from "react";
import { Search, Settings, BookOpen, Volume2, FileSearch, Download, FileText, Upload, ArrowLeft, RotateCcw, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

interface FlashCard {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function SummaryCards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const flashcards: FlashCard[] = [
    {
      id: 1,
      question: "What is photosynthesis?",
      answer: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen.",
      category: "Biology"
    },
    {
      id: 2,
      question: "What is the mitochondria?",
      answer: "The mitochondria is the powerhouse of the cell, responsible for producing ATP through cellular respiration.",
      category: "Biology"
    },
    {
      id: 3,
      question: "What is Newton's First Law?",
      answer: "Newton's First Law states that an object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force.",
      category: "Physics"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Same as Index */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">EH</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-900">Edu Helper AI</h1>
              <p className="text-xs text-gray-500">Smart Study Generator</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search documents..." 
              className="pl-10 text-sm border-gray-200"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1 rounded">⌘ K</span>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">GET STARTED</h3>
            <div className="space-y-2">
              <Link to="/" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Upload className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Upload Document</span>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">AI TOOLS</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 cursor-pointer">
                <BookOpen className="w-4 h-4 text-gray-900" />
                <span className="text-sm text-gray-900 font-medium">Summary & Cards</span>
              </div>
              <Link to="/audio" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Volume2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Audio Player</span>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">EXPORT</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Download className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export Options</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Settings className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Settings</span>
              </div>
              <Link to="/about" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <BookOpen className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">About Me</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Pro Tip: Upload PDFs, Word docs, or text files to get started
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h2 className="text-lg font-semibold text-gray-900">Summary & Flashcards</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">AI-generated summary and interactive flashcards from your document</p>
        </div>

        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Summary Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Document Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Key Points:</h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Photosynthesis is essential for plant survival and oxygen production</li>
                      <li>• The process involves chlorophyll, sunlight, water, and carbon dioxide</li>
                      <li>• Glucose is produced as the main energy source for plants</li>
                      <li>• This process also releases oxygen as a byproduct</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Main Concepts:</h3>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-green-700 border-green-300">Chloroplasts</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-300">Light Reactions</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-300">Dark Reactions</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-300">Carbon Fixation</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Flashcard Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span>Interactive Flashcards</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentCard + 1} of {flashcards.length}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 min-h-[200px] flex items-center justify-center border-2 border-dashed border-purple-200">
                    <div className="text-center w-full">
                      <Badge className="mb-4">{flashcards[currentCard]?.category}</Badge>
                      <h3 className="text-lg font-semibold mb-4 text-purple-700">
                        {showAnswer ? "Answer:" : "Question:"}
                      </h3>
                      <p className="text-gray-800 text-lg leading-relaxed">
                        {showAnswer ? flashcards[currentCard]?.answer : flashcards[currentCard]?.question}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    {!showAnswer ? (
                      <Button onClick={() => setShowAnswer(true)} className="bg-purple-600 hover:bg-purple-700">
                        <Eye className="w-4 h-4 mr-2" />
                        Show Answer
                      </Button>
                    ) : (
                      <Button onClick={() => setShowAnswer(false)} variant="outline">
                        <EyeOff className="w-4 h-4 mr-2" />
                        Hide Answer
                      </Button>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button variant="outline" onClick={prevCard}>
                      Previous
                    </Button>
                    <Button variant="outline" onClick={() => { setCurrentCard(0); setShowAnswer(false); }}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                    <Button onClick={nextCard}>
                      Next
                    </Button>
                  </div>

                  <Progress value={((currentCard + 1) / flashcards.length) * 100} className="h-2" />
                </CardContent>
              </Card>
            </div>

            {/* Study Statistics */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Study Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-gray-600">Total Cards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2</div>
                    <div className="text-sm text-gray-600">Cards Reviewed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">67%</div>
                    <div className="text-sm text-gray-600">Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">5m</div>
                    <div className="text-sm text-gray-600">Time Spent</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
