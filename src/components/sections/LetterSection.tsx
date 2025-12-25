import { Heart, PenLine } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const LetterSection = () => {
  return (
    <section id="letter" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            From My Heart
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            A Love Letter
          </h2>
        </div>

        <Card className="max-w-3xl mx-auto bg-card border-border shadow-romantic overflow-hidden">
          <div className="h-2 bg-gradient-romantic" />
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-rose-light flex items-center justify-center">
                <PenLine className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Written with love</p>
                <p className="font-display text-lg font-semibold text-foreground">For You, Always</p>
              </div>
            </div>

            <div className="space-y-6 text-foreground leading-relaxed font-body">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                My dearest, words cannot fully express the depth of what I feel for you, 
                but I'll try my best to put it into words.
              </p>

              <p>
                From the moment you came into my life, everything changed. The colors 
                became brighter, the music became sweeter, and every day became an 
                adventure worth waking up for.
              </p>

              <p>
                You are my sunshine on cloudy days, my calm in the storm, and my 
                reason to smile. Your presence in my life is the greatest gift I've 
                ever received, and I treasure every single moment we share together.
              </p>

              <p>
                Thank you for being you. Thank you for loving me. Thank you for 
                making my life infinitely more beautiful just by existing.
              </p>

              <p className="font-display text-xl text-primary italic">
                Forever and always yours,
              </p>

              <div className="flex items-center gap-2 pt-4">
                <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
                <span className="font-display text-2xl text-gradient font-semibold">
                  With All My Love
                </span>
                <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LetterSection;
