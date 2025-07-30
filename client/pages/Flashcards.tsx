import { useState } from "react";
import {
  Brain,
  Plus,
  Edit3,
  Trash2,
  RotateCcw,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
}

export default function Flashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    {
      id: 1,
      question: "What is photosynthesis?",
      answer:
        "The process by which plants use sunlight to produce glucose from carbon dioxide and water.",
      difficulty: "medium",
      category: "Biology",
    },
    {
      id: 2,
      question: "What is the mitochondria?",
      answer:
        "The powerhouse of the cell, responsible for producing ATP energy.",
      difficulty: "easy",
      category: "Biology",
    },
    {
      id: 3,
      question: "What is Newton's First Law?",
      answer:
        "An object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an external force.",
      difficulty: "hard",
      category: "Physics",
    },
    {
      id: 4,
      question: "What is DNA?",
      answer:
        "Deoxyribonucleic acid, the hereditary material in humans and almost all other organisms.",
      difficulty: "medium",
      category: "Biology",
    },
  ]);

  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyMode, setStudyMode] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
    difficulty: "medium" as const,
    category: "",
  });
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
    setShowAnswer(false);
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(flashcards.length - 1);
    }
    setShowAnswer(false);
  };

  const markCorrect = () => {
    setCorrectAnswers(correctAnswers + 1);
    nextCard();
  };

  const markIncorrect = () => {
    nextCard();
  };

  const resetStudy = () => {
    setCurrentCard(0);
    setShowAnswer(false);
    setCorrectAnswers(0);
  };

  const addFlashcard = () => {
    const id = Math.max(...flashcards.map((card) => card.id)) + 1;
    setFlashcards([...flashcards, { ...newCard, id }]);
    setNewCard({
      question: "",
      answer: "",
      difficulty: "medium",
      category: "",
    });
    setShowCreateDialog(false);
  };

  const deleteFlashcard = (id: number) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
    if (currentCard >= flashcards.length - 1) {
      setCurrentCard(0);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">
                Flashcards
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Flashcard</DialogTitle>
                  <DialogDescription>
                    Add a new flashcard to your study deck
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Question</label>
                    <Textarea
                      placeholder="Enter your question..."
                      value={newCard.question}
                      onChange={(e) =>
                        setNewCard({ ...newCard, question: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Answer</label>
                    <Textarea
                      placeholder="Enter the answer..."
                      value={newCard.answer}
                      onChange={(e) =>
                        setNewCard({ ...newCard, answer: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <Input
                        placeholder="e.g., Biology"
                        value={newCard.category}
                        onChange={(e) =>
                          setNewCard({ ...newCard, category: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Difficulty</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-200 rounded-md"
                        value={newCard.difficulty}
                        onChange={(e) =>
                          setNewCard({
                            ...newCard,
                            difficulty: e.target.value as
                              | "easy"
                              | "medium"
                              | "hard",
                          })
                        }
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setShowCreateDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={addFlashcard}
                      disabled={!newCard.question || !newCard.answer}
                    >
                      Add Card
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              variant={studyMode ? "default" : "outline"}
              onClick={() => setStudyMode(!studyMode)}
            >
              {studyMode ? "Exit Study" : "Study Mode"}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {studyMode ? (
          /* Study Mode */
          <div className="max-w-2xl mx-auto">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Study Session
              </h1>
              <p className="text-gray-600">
                Card {currentCard + 1} of {flashcards.length}
              </p>
              <Progress
                value={((currentCard + 1) / flashcards.length) * 100}
                className="mt-4"
              />
            </div>

            <Card className="shadow-xl border-none mb-6">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge
                    className={getDifficultyColor(
                      flashcards[currentCard]?.difficulty,
                    )}
                  >
                    {flashcards[currentCard]?.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    {flashcards[currentCard]?.category}
                  </Badge>
                </div>

                <div className="min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-purple-600">
                      {showAnswer ? "Answer:" : "Question:"}
                    </h3>
                    <p className="text-xl text-gray-800 leading-relaxed">
                      {showAnswer
                        ? flashcards[currentCard]?.answer
                        : flashcards[currentCard]?.question}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  {!showAnswer ? (
                    <Button size="lg" onClick={() => setShowAnswer(true)}>
                      Show Answer
                    </Button>
                  ) : (
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={markIncorrect}
                      >
                        <XCircle className="w-5 h-5 mr-2 text-red-500" />
                        Incorrect
                      </Button>
                      <Button size="lg" onClick={markCorrect}>
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        Correct
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevCard}>
                Previous
              </Button>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Correct: {correctAnswers} /{" "}
                  {currentCard + (showAnswer ? 1 : 0)}
                </p>
              </div>
              <Button onClick={nextCard}>Next</Button>
            </div>

            <div className="text-center mt-6">
              <Button variant="outline" onClick={resetStudy}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Session
              </Button>
            </div>
          </div>
        ) : (
          /* Browse Mode */
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Flashcards
              </h1>
              <p className="text-gray-600">
                Manage and study your flashcard collection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flashcards.map((card) => (
                <Card
                  key={card.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className={getDifficultyColor(card.difficulty)}>
                        {card.difficulty}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteFlashcard(card.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{card.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Question:
                        </p>
                        <p className="text-gray-800">{card.question}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Answer:
                        </p>
                        <p className="text-gray-800">{card.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {flashcards.length === 0 && (
              <div className="text-center py-12">
                <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No flashcards yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Create your first flashcard to get started!
                </p>
                <Button onClick={() => setShowCreateDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Flashcard
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
