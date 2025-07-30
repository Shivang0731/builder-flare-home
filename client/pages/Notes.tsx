import { ArrowLeft, BookOpen, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-orange-600" />
              <span className="text-xl font-bold text-gray-900">
                Study Notes
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Notes</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This feature is coming soon! Organize, structure, and manage all
            your study materials in one place.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Notes
                </CardTitle>
                <CardDescription>
                  Write and organize your study notes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search Notes
                </CardTitle>
                <CardDescription>Find information quickly</CardDescription>
              </CardHeader>
              <CardContent>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <p className="text-gray-500 mb-4">
              Want to continue studying? Try our other features:
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/flashcards">
                <Button variant="outline">Flashcards</Button>
              </Link>
              <Link to="/audio">
                <Button variant="outline">Audio Study</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
