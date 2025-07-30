import { useState, useRef } from "react";
import { Upload, Search, Settings, BookOpen, Brain, Volume2, FileSearch, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
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

        {/* Search */}
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

        {/* Navigation */}
        <div className="flex-1 p-4">
          {/* Get Started */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">GET STARTED</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Upload className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Upload Document</span>
              </div>
            </div>
          </div>

          {/* AI Tools */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">AI TOOLS</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <BookOpen className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Summary & Cards</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Volume2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Audio Player</span>
              </div>
            </div>
          </div>

          {/* Export */}
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
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Pro Tip: Upload PDFs, Word docs, or text files to get started
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Welcome to Study-Aid Generator</h2>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <span className="text-xs">Fronts with Figma Maker</span>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-1">Upload your documents and let AI transform them into interactive study materials</p>
        </div>

        {/* Upload Area */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            <div
              className={`border-2 border-dashed ${
                dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
              } rounded-lg p-12 text-center transition-colors`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Drag & Drop your document here</h3>
              <p className="text-gray-600 mb-4">or click to browse from your computer</p>
              
              <Button onClick={openFileDialog} className="bg-black text-white hover:bg-gray-800">
                Select File
              </Button>
              
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.txt,.md"
                className="hidden"
              />
            </div>

            {uploadedFile && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">{uploadedFile.name}</span>
                  <span className="text-xs text-green-600">({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Summaries</h3>
                  <p className="text-xs text-gray-600">Get instant summaries that capture key concepts and main ideas from your documents</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer group" onClick={() => window.location.href = '/summary'}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Flashcards</h3>
                  <p className="text-xs text-gray-600">Auto-generated questions, practice cards for effective spaced repetition study</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer group" onClick={() => window.location.href = '/audio'}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audio Narration</h3>
                  <p className="text-xs text-gray-600">Convert your text to summarize with high-quality text-to-speech conversion</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <FileSearch className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Search</h3>
                  <p className="text-xs text-gray-600">Quickly search through your processed content with context-aware results</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">© 2024 Edu Helper AI. Built with passion for education and technology.</p>
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
