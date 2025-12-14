export interface TradeSignal {
  id: string;
  symbol: string;
  timeframe: string;
  side: 'Long' | 'Short';
  entry: number;
  tp: number;
  sl: number;
  timestamp: string;
  status: 'PENDING' | 'ACTIVE' | 'CLOSED';
  outcome?: 'TP' | 'SL' | 'BE';
  rr?: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ImageGenerationConfig {
  prompt: string;
  size: '1K' | '2K' | '4K';
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT',
  VISUALIZER = 'VISUALIZER',
  SETTINGS = 'SETTINGS'
}
