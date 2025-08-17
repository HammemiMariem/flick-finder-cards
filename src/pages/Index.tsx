import { useState, useMemo } from "react";
import { Film, Star, TrendingUp } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { movies } from "@/data/movies";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = useMemo(() => {
    if (!searchTerm.trim()) return movies;
    
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cinema-dark to-cinema-darker">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-gold/10 via-transparent to-cinema-blue/10" />
        <div className="container mx-auto px-6 py-12 relative">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cinema-gold to-cinema-gold-glow rounded-2xl shadow-lg">
                <Film className="w-8 h-8 text-cinema-darker" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cinema-gold via-cinema-gold-glow to-cinema-blue bg-clip-text text-transparent">
                CineExplorer
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover your next favorite film from our curated collection of cinematic masterpieces
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cinema-gold" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cinema-blue" />
                <span>Trending Now</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-cinema-gold" />
                <span>{movies.length} Movies</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-6 py-8">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </section>

      {/* Movies Grid */}
      <section className="container mx-auto px-6 pb-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {searchTerm ? `Search Results (${filteredMovies.length})` : 'Featured Movies'}
          </h2>
          <p className="text-muted-foreground">
            {searchTerm 
              ? `Showing results for "${searchTerm}"` 
              : 'Handpicked selections from our movie collection'
            }
          </p>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cinema-gold/20 to-cinema-blue/20 rounded-full flex items-center justify-center">
              <Film className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No movies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse our featured collection
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
