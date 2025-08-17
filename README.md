# CineExplorer - Movie Discovery App

A beautiful, responsive movie explorer application built with React, TypeScript, and Tailwind CSS. Features a cinematic dark theme with smooth animations and an intuitive card-based interface for browsing movies.

## 🎬 Features

- **Responsive Movie Cards**: Beautiful card-based layout with movie posters, ratings, and details
- **Search & Filter**: Real-time search across movie titles, genres, and descriptions
- **Cinematic Design**: Dark theme with golden accents and smooth hover animations
- **Interactive UI**: Hover effects, animated transitions, and polished user experience
- **Mobile Responsive**: Optimized for all screen sizes

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint + TypeScript strict mode

## 🎨 Design System

The app uses a custom cinematic design system with:
- **Primary Colors**: Deep cinematic blues and dark grays
- **Accent Colors**: Golden yellow for highlights and interactions
- **Typography**: Clean, readable fonts optimized for movie titles and descriptions
- **Animations**: Smooth transitions using CSS custom properties
- **Gradients**: Cinematic gradients for depth and visual interest

## 📱 Components

### Core Components
- `MovieCard`: Interactive movie display card with poster, rating, and details
- `SearchBar`: Real-time search input with filter options
- `Index`: Main page layout with header, search, and movie grid

### Features
- Hover animations on movie cards
- Real-time search filtering
- Responsive grid layout
- Rating badges with star icons
- Genre categorization
- Play and info action buttons

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cine-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── MovieCard.tsx   # Movie display card
│   └── SearchBar.tsx   # Search input component
├── data/               # Static data and types
│   └── movies.ts       # Movie database
├── assets/             # Generated movie posters
├── pages/              # Page components
│   └── Index.tsx       # Main explorer page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css          # Global styles & design system
```

## 🎯 Usage

1. **Browse Movies**: Scroll through the featured movie collection
2. **Search**: Use the search bar to filter movies by title, genre, or description
3. **Interact**: Hover over cards to see action buttons and animations
4. **Responsive**: Access on any device with optimized layouts

## 🔧 Customization

### Adding New Movies
Edit `src/data/movies.ts` to add new movie entries:

```typescript
{
  id: "new-movie",
  title: "Movie Title",
  poster: "path/to/poster.jpg",
  rating: 8.5,
  year: 2024,
  genre: "Action",
  description: "Movie description...",
  duration: "2h 15min"
}
```

### Styling
Customize the design system in:
- `src/index.css` - Color tokens and CSS variables
- `tailwind.config.ts` - Tailwind theme extensions

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using modern web technologies