import { TradeSignal } from './types';

export const VEGAS_TOUCH_SYSTEM_PROMPT = `
You are an expert trading assistant specializing in the "Vegas Touch" strategy.
Here are the strict rules of the strategy you must follow when answering questions:

1. **Indicators**:
   - Tunnel: EMA 144 & EMA 169.
   - Trend Filter: EMA 576 & EMA 676.
   - Momentum Filter: EMA 12.

2. **Entry Conditions**:
   - **Long**: Price touches the Lower Tunnel (144/169). Trend must be Bullish (144 > 576). EMA 12 must be above the tunnel.
   - **Short**: Price touches the Upper Tunnel (144/169). Trend must be Bearish (144 < 576). EMA 12 must be below the tunnel.
   - **Pattern**: Must have a valid "Pinbar" (shadow >= 40% of range) or "Engulfing" candle.

3. **Risk Management**:
   - **TP (Take Profit)**: Dynamic R-Multiples (1R to 5R). Default is usually 2R.
   - **SL (Stop Loss)**: Based on "TFX" (10-candle extreme + buffer) or "SWING" (recent swing low/high).
   - **Breakeven**: Move SL to Entry when price hits 1R.
   - **Cooldown**: After a Stop Loss (SL), wait 5 candles before re-entering the same pair/direction.

4. **Pairs**: BTC, ETH, SOL, DOGE, XRP, ADA, etc.
5. **Timeframes**: 15m, 30m, 1h, 4h.

Answer concisely and professionally, like a senior trader.
`;

export const MOCK_SIGNALS: TradeSignal[] = [
  {
    id: '1',
    symbol: 'BTC-USDT',
    timeframe: '15m',
    side: 'Long',
    entry: 64230.5,
    tp: 65100.0,
    sl: 63800.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    status: 'ACTIVE',
  },
  {
    id: '2',
    symbol: 'ETH-USDT',
    timeframe: '1h',
    side: 'Short',
    entry: 3450.2,
    tp: 3380.0,
    sl: 3490.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    status: 'ACTIVE',
  },
  {
    id: '3',
    symbol: 'SOL-USDT',
    timeframe: '4h',
    side: 'Long',
    entry: 145.20,
    tp: 155.00,
    sl: 140.50,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    status: 'CLOSED',
    outcome: 'TP',
    rr: 2.1,
  },
  {
    id: '4',
    symbol: 'DOGE-USDT',
    timeframe: '15m',
    side: 'Long',
    entry: 0.1240,
    tp: 0.1300,
    sl: 0.1210,
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    status: 'CLOSED',
    outcome: 'SL',
    rr: -1.0,
  },
];

export const MOCK_PERFORMANCE_DATA = [
  { name: 'Mon', pnl: 2.4 },
  { name: 'Tue', pnl: -0.5 },
  { name: 'Wed', pnl: 4.2 },
  { name: 'Thu', pnl: 1.1 },
  { name: 'Fri', pnl: 3.8 },
  { name: 'Sat', pnl: -1.2 },
  { name: 'Sun', pnl: 5.5 },
];
