import { NextResponse, NextRequest } from 'next/server'

type BinanceKline = [
  number, // openTime
  string, // open
  string, // high
  string, // low
  string, // close
  string, // volume
  number, // closeTime
  ...unknown[]
]

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const symbol = searchParams.get('symbol') ?? 'BTCUSDT'
    const interval = searchParams.get('interval') ?? '1w'

    const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=50`

    const res = await fetch(url, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Binance error' }, { status: 500 })
    }

    const data: BinanceKline[] = await res.json()

    const candles = data.map((kline) => ({
      time: new Date(kline[0]).toISOString().split('T')[0],
      open: Number(kline[1]),
      high: Number(kline[2]),
      low: Number(kline[3]),
      close: Number(kline[4]),
    }))

    return NextResponse.json(candles)
  } catch (e) {
    return NextResponse.json({ message: 'Event fetching failed', error: e }, { status: 500 });
  }
}