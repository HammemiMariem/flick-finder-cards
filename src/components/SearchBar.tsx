import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="Search for movies, genres, or actors..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-16 h-12 bg-card/50 backdrop-blur-sm border-border/50 focus:border-cinema-gold/50 focus:ring-cinema-gold/30 text-foreground placeholder:text-muted-foreground rounded-xl"
        />
        <Button 
          size="sm" 
          variant="ghost" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-cinema-gold hover:bg-cinema-gold/10"
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};