# BusMap - Green Journey Mobile App

A complete frontend-only mobile app showcasing a public transport tracking system with green journey features and AI assistant.

## Features

- **Home Screen**: Green impact tracking, journey progress, badges, QR payment card, and shortcuts
- **Green Journey Screen**: Detailed journey statistics, weekly progress, badge collection, and history
- **AI Bus Buddy**: Chat interface with route suggestions and travel recommendations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at http://localhost:5173/

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── StatusBar.tsx
│   ├── BottomNav.tsx
│   ├── GreenBadge.tsx
│   ├── ProgressBar.tsx
│   ├── RobotBuddy.tsx
│   ├── RouteCard.tsx
│   ├── FakeQRCode.tsx
│   └── PhoneFrame.tsx
├── screens/            # Main app screens
│   ├── HomeScreen.tsx
│   ├── GreenJourneyScreen.tsx
│   └── AIBuddyScreen.tsx
├── data/
│   └── mockData.ts     # Mock data for the app
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Design

The app uses a green-white color palette inspired by public transport and eco-friendly themes:
- Primary green: #00896B
- Light green: #EAF8F3
- Navy text: #10284A
- Muted text: #6B7890

Mobile-first design optimized for 390-430px width, centered on desktop with a phone frame.

## Notes

- All data is mocked - no backend or API calls
- No authentication or real payment processing
- Designed for demonstration purposes only

