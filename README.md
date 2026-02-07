# Audio Recording & Transcription Test

A Next.js application designed to explore and test real-time audio recording and streaming transcription using the OpenAI Whisper API.

## 🚀 Features

- **Live Audio Capture**: Stream audio directly from the browser.
- **Real-time Transcription**: Leverage OpenAI's Whisper API for accurate, near-instant voice-to-text.
- **Streaming UI**: Display transcribed text as it's processed.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [OpenAI Whisper](https://platform.openai.com/docs/guides/speech-to-text)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- OpenAI API Key

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Create a `.env.local` file and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Roadmap

- [ ] Implement browser-based audio recording.
- [ ] Set up API route for Whisper integration.
- [ ] Add support for multiple languages.
- [ ] Implement chunked streaming for long recordings.
