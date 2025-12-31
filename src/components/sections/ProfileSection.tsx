import { Camera, Instagram, Youtube, Music, Sparkles, Ghost } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ProfileSection = () => {
  const [thought, setThought] = useState("");
  const [savedThoughts, setSavedThoughts] = useState<string[]>([]);

  const handleSaveThought = () => {
    if (thought.trim()) {
      setSavedThoughts([thought, ...savedThoughts]);
      setThought("");
    }
  };

  return (
    <section id="profile" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-accent to-primary/60 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Camera className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground">Your Photo</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold text-foreground mb-2">
            Srishti
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            ✨ Your Personal Space ✨
          </p>
        </div>

        {/* Thoughts Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50 mb-8">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-2xl">💭</span> Express Your Thoughts
          </h3>
          
          <div className="space-y-4">
            <Textarea
              placeholder="What's on your mind today, Srishti? ✨"
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary rounded-2xl resize-none text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              onClick={handleSaveThought}
              className="w-full rounded-full"
              variant="default"
            >
              Save Thought 💕
            </Button>
          </div>

          {savedThoughts.length > 0 && (
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-medium text-foreground">Your Recent Thoughts:</h4>
              {savedThoughts.map((t, index) => (
                <div 
                  key={index}
                  className="p-4 bg-secondary/50 rounded-2xl border border-primary/10"
                >
                  <p className="text-foreground">{t}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social Media Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/50">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-2xl">🔗</span> Connect With Me
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a 
               href="https://www.instagram.com/sryix.ix/"
                target="_blank" 
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            >
              <Instagram className="w-8 h-8 text-pink-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">Instagram</span>
              <span className="text-xs text-muted-foreground">@srishti</span>
            </a>
            
            <a 
              href="https://www.snapchat.com/@sistysingh22?share_id=B4ziE3ZbTww&locale=en-GB" 
              target="_blank"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            >
              <Ghost className="w-8 h-8 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">Snapchat</span>
              <span className="text-xs text-muted-foreground">@srishti</span>
            </a>
            
            <a 
              href="#" 
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            >
              <Youtube className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">YouTube</span>
              <span className="text-xs text-muted-foreground">Srishti</span>
            </a>
            
            <a 
              href="https://open.spotify.com/user/31eqapk4ti56ma4laekpwkmgmdty?si=IQMzbIAFRzaAGEV-FcIipw&nd=1&dlsi=ddb9dc75b7d64c59"
              target="_blank"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
            >
              <Music className="w-8 h-8 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">Spotify</span>
              <span className="text-xs text-muted-foreground">Srishti</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
