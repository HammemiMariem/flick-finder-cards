import { useState } from "react";
import { Star, Play, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: number;
  genre: string;
  description: string;
  duration: string;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br from-card to-cinema-dark border-border/50 hover:border-cinema-gold/50 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_hsl(var(--cinema-gold)/0.3)] hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster Image */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-darker via-cinema-darker/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Hover Actions */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button size="sm" className="bg-cinema-gold hover:bg-cinema-gold-glow text-cinema-darker font-semibold">
            <Play className="w-4 h-4 mr-1" />
            Play
          </Button>
          <Button size="sm" variant="secondary" className="bg-card/80 hover:bg-card border-cinema-gold/30">
            <Info className="w-4 h-4" />
          </Button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-cinema-darker/90 text-cinema-gold border-cinema-gold/30 font-semibold">
            <Star className="w-3 h-3 mr-1 fill-current" />
            {movie.rating}
          </Badge>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-foreground group-hover:text-cinema-gold transition-colors duration-300 line-clamp-1">
            {movie.title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">{movie.year}</span>
            <span>{movie.duration}</span>
          </div>
          
          <Badge variant="secondary" className="text-xs bg-cinema-blue/20 text-cinema-blue border-cinema-blue/30">
            {movie.genre}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {movie.description}
        </p>
      </div>
    </Card>
  );
};