import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  FastForward,
  Rewind,
  Upload,
  ArrowLeft,
  Mic,
  FileAudio,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface AudioTrack {
  id: number;
  title: string;
  subject: string;
  duration: string;
  description: string;
  audioUrl?: string;
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [textToConvert, setTextToConvert] = useState("");
  const [newTrackTitle, setNewTrackTitle] = useState("");
  const [newTrackSubject, setNewTrackSubject] = useState("");

  const audioRef = useRef<HTMLAudioElement>(null);

  const [tracks] = useState<AudioTrack[]>([
    {
      id: 1,
      title: "Photosynthesis Overview",
      subject: "Biology",
      duration: "12:30",
      description:
        "Comprehensive overview of the photosynthesis process, including light and dark reactions.",
    },
    {
      id: 2,
      title: "Newton's Laws of Motion",
      subject: "Physics",
      duration: "15:45",
      description:
        "Detailed explanation of Newton's three laws with practical examples and applications.",
    },
    {
      id: 3,
      title: "World War II Summary",
      subject: "History",
      duration: "25:20",
      description:
        "Key events, dates, and impacts of World War II from 1939 to 1945.",
    },
    {
      id: 4,
      title: "Chemical Bonding",
      subject: "Chemistry",
      duration: "18:15",
      description:
        "Ionic, covalent, and metallic bonding explained with molecular examples.",
    },
  ]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const skipForward = () => {
    setCurrentTime(Math.min(currentTime + 30, duration));
  };

  const skipBackward = () => {
    setCurrentTime(Math.max(currentTime - 30, 0));
  };

  const convertTextToAudio = () => {
    // Demo functionality - in real app, this would use text-to-speech API
    if (textToConvert && newTrackTitle) {
      alert(
        "In a real app, this would convert your text to audio using TTS technology!",
      );
      setTextToConvert("");
      setNewTrackTitle("");
      setNewTrackSubject("");
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    // Demo functionality - in real app, this would start audio recording
    setTimeout(() => {
      setIsRecording(false);
      alert(
        "Recording saved! In a real app, this would save your audio recording.",
      );
    }, 3000);
  };

  // Simulate audio progress for demo
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          if (newTime >= 300) {
            // Demo duration of 5 minutes
            setIsPlaying(false);
            return 0;
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Set demo duration
  useEffect(() => {
    setDuration(300); // 5 minutes for demo
  }, []);

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      Biology: "bg-green-100 text-green-800",
      Physics: "bg-blue-100 text-blue-800",
      Chemistry: "bg-purple-100 text-purple-800",
      History: "bg-orange-100 text-orange-800",
      Math: "bg-red-100 text-red-800",
    };
    return colors[subject] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Volume2 className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Audio Study
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-none mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {tracks[currentTrack]?.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      <Badge
                        className={getSubjectColor(
                          tracks[currentTrack]?.subject,
                        )}
                      >
                        {tracks[currentTrack]?.subject}
                      </Badge>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-mono">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                    <div className="text-sm text-gray-500">
                      Speed: {playbackRate}x
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Waveform Visualization */}
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 h-32 flex items-center justify-center">
                  <div className="flex items-end space-x-1 h-16">
                    {Array.from({ length: 50 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-blue-500 rounded-t ${
                          isPlaying ? "animate-pulse" : ""
                        } ${i < (currentTime / duration) * 50 ? "bg-blue-600" : "bg-blue-300"}`}
                        style={{
                          height: `${20 + Math.random() * 40}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <Slider
                    value={[currentTime]}
                    max={duration}
                    step={1}
                    onValueChange={(value) => setCurrentTime(value[0])}
                    className="w-full"
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="icon" onClick={skipBackward}>
                    <Rewind className="w-4 h-4" />
                  </Button>
                  <Button size="lg" className="w-16 h-16" onClick={togglePlay}>
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                  <Button variant="outline" size="icon" onClick={skipForward}>
                    <FastForward className="w-4 h-4" />
                  </Button>
                </div>

                {/* Additional Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleMute}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </Button>
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        max={100}
                        step={1}
                        onValueChange={(value) => setVolume(value[0])}
                        className="w-24"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Speed:</span>
                    <select
                      value={playbackRate}
                      onChange={(e) => setPlaybackRate(Number(e.target.value))}
                      className="px-2 py-1 border rounded"
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

                {/* Track Description */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">About this track:</h3>
                  <p className="text-gray-700">
                    {tracks[currentTrack]?.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Create Audio Content */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileAudio className="w-5 h-5 mr-2" />
                    Text to Speech
                  </CardTitle>
                  <CardDescription>
                    Convert your study notes to audio
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Track title"
                    value={newTrackTitle}
                    onChange={(e) => setNewTrackTitle(e.target.value)}
                  />
                  <Input
                    placeholder="Subject"
                    value={newTrackSubject}
                    onChange={(e) => setNewTrackSubject(e.target.value)}
                  />
                  <Textarea
                    placeholder="Paste your study notes here..."
                    value={textToConvert}
                    onChange={(e) => setTextToConvert(e.target.value)}
                    rows={6}
                  />
                  <Button
                    onClick={convertTextToAudio}
                    disabled={!textToConvert || !newTrackTitle}
                    className="w-full"
                  >
                    Convert to Audio
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mic className="w-5 h-5 mr-2" />
                    Voice Recording
                  </CardTitle>
                  <CardDescription>
                    Record your own study sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    {isRecording ? (
                      <div className="space-y-4">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-red-600 font-semibold">
                          Recording...
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setIsRecording(false)}
                        >
                          Stop Recording
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                          <Mic className="w-8 h-8 text-blue-600" />
                        </div>
                        <Button onClick={startRecording}>
                          Start Recording
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Playlist */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Study Playlist</CardTitle>
                <CardDescription>Your audio study collection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      index === currentTrack
                        ? "bg-blue-100 border-2 border-blue-300"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setCurrentTrack(index)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm">{track.title}</h3>
                      <span className="text-xs text-gray-500">
                        {track.duration}
                      </span>
                    </div>
                    <Badge
                      className={getSubjectColor(track.subject)}
                      variant="secondary"
                    >
                      {track.subject}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Stats */}
            <Card className="shadow-lg mt-6">
              <CardHeader>
                <CardTitle>Study Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Today's Study Time</span>
                    <span className="text-sm font-semibold">2h 15m</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Weekly Goal</span>
                    <span className="text-sm font-semibold">12h / 20h</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24</div>
                    <div className="text-xs text-gray-600">
                      Tracks Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      156
                    </div>
                    <div className="text-xs text-gray-600">Hours Studied</div>
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
