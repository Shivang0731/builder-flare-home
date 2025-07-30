import { useState, useEffect } from "react";
import { Search, Settings, BookOpen, Volume2, FileSearch, Download, Upload, ArrowLeft, Play, Pause, SkipBack, SkipForward, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(300); // 5 minutes demo
  const [volume, setVolume] = useState(75);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Simulate audio progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

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
              <Link to="/summary" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <BookOpen className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Summary & Cards</span>
              </Link>
              <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50 cursor-pointer">
                <Volume2 className="w-4 h-4 text-gray-900" />
                <span className="text-sm text-gray-900 font-medium">Audio Player</span>
              </div>
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
              <h2 className="text-lg font-semibold text-gray-900">Audio Narration</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Listen to AI-generated audio summary of your document</p>
        </div>

        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Player Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Document Audio Summary</CardTitle>
                <p className="text-center text-sm text-gray-600">Photosynthesis - Biology Chapter 5</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Waveform Visualization */}
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 h-32 flex items-center justify-center">
                  <div className="flex items-end space-x-1 h-16">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 rounded-t transition-all ${
                          isPlaying ? 'bg-blue-500 animate-pulse' : 'bg-blue-300'
                        } ${i < (currentTime / duration) * 40 ? 'bg-blue-600' : ''}`}
                        style={{
                          height: `${20 + Math.random() * 40}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Time and Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <Slider
                    value={[currentTime]}
                    max={duration}
                    step={1}
                    onValueChange={(value) => setCurrentTime(value[0])}
                    className="w-full"
                  />
                </div>

                {/* Main Controls */}
                <div className="flex items-center justify-center space-x-6">
                  <Button variant="outline" size="icon">
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Button 
                    onClick={togglePlay}
                    size="lg" 
                    className="w-16 h-16 rounded-full bg-black hover:bg-gray-800"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </Button>
                  <Button variant="outline" size="icon">
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>

                {/* Secondary Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-4 h-4 text-gray-600" />
                      <Slider
                        value={[volume]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setVolume(value[0])}
                        className="w-24"
                      />
                      <span className="text-xs text-gray-500 w-8">{volume}%</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Speed:</span>
                    <select
                      value={playbackSpeed}
                      onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                      className="px-2 py-1 border border-gray-200 rounded text-sm"
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={0.75}>0.75x</option>
                      <option value={1}>1x</option>
                      <option value={1.25}>1.25x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2x</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transcript</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Photosynthesis is a vital biological process that occurs in plants, algae, and some bacteria. 
                      During this process, organisms convert light energy, usually from the sun, into chemical energy 
                      stored in glucose molecules. The process involves two main stages: the light-dependent reactions 
                      and the light-independent reactions, also known as the Calvin cycle.
                      <br /><br />
                      The light-dependent reactions occur in the thylakoid membranes of chloroplasts, where chlorophyll 
                      and other pigments capture light energy. This energy is used to split water molecules, releasing 
                      oxygen as a byproduct and generating ATP and NADPH.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Study Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Listening Progress</span>
                      <span className="text-sm font-semibold">{Math.round((currentTime / duration) * 100)}%</span>
                    </div>
                    <Progress value={(currentTime / duration) * 100} className="h-2" />
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{formatTime(currentTime)}</div>
                        <div className="text-xs text-gray-600">Time Listened</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{playbackSpeed}x</div>
                        <div className="text-xs text-gray-600">Current Speed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
