import {
  Search,
  Settings,
  BookOpen,
  Volume2,
  Download,
  Upload,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">EH</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-900">
                Edu Helper AI
              </h1>
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
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1 rounded">
              ⌘ K
            </span>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              GET STARTED
            </h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <Upload className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Upload Document</span>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              AI TOOLS
            </h3>
            <div className="space-y-2">
              <Link
                to="/summary"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Summary & Cards</span>
              </Link>
              <Link
                to="/audio"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Audio Player</span>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              EXPORT
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Download className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Export Options</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Settings className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Settings</span>
              </div>
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
              <h2 className="text-lg font-semibold text-gray-900">About</h2>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Supported File Formats */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Supported File Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge variant="outline" className="text-sm font-mono">
                    .pdf
                  </Badge>
                  <Badge variant="outline" className="text-sm font-mono">
                    .txt
                  </Badge>
                  <Badge variant="outline" className="text-sm font-mono">
                    .docx
                  </Badge>
                  <Badge variant="outline" className="text-sm font-mono">
                    .md
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Maximum file size: 200MB. For best results, use well-formatted
                  documents with clear structure.
                </p>
              </CardContent>
            </Card>

            {/* About Me Section */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Hi, I'm <strong>Shivang Kumar Dubey</strong>, first year
                    student at Scaler School of Technology and a developer
                    building AI-powered study tools to help students learn
                    smarter. Passionate about NLP, education technology, and
                    clean user experiences.
                  </p>
                  <p>
                    This project represents my commitment to leveraging
                    artificial intelligence to democratize education and make
                    learning more efficient and engaging for students worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © 2025 Edu Helper AI. Built with passion for education and
              technology.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <span className="w-4 h-4 bg-gray-300 rounded"></span>
              <span className="w-4 h-4 bg-gray-300 rounded"></span>
              <span className="w-4 h-4 bg-gray-300 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
