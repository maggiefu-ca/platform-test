
// Stablecoin peg status data - current and historical
export const stablecoinPegData = [
  { 
    id: 1, 
    name: 'USDC', 
    currentPrice: 0.998, 
    peg: 1.0, 
    deviation: -0.2, 
    marketCap: 31500000000,
    risk: 'low',
    riskScore: 15,
    liquidity24h: 4280000000,
    backingStatus: 'fully backed',
    exchangeRatios: [
      { exchange: 'Binance', price: 0.999 },
      { exchange: 'Coinbase', price: 0.998 },
      { exchange: 'Kraken', price: 0.997 },
      { exchange: 'FTX', price: 0.999 },
    ]
  },
  { 
    id: 2, 
    name: 'USDT', 
    currentPrice: 1.001, 
    peg: 1.0, 
    deviation: 0.1, 
    marketCap: 86700000000,
    risk: 'medium',
    riskScore: 35,
    liquidity24h: 7850000000,
    backingStatus: 'partially backed',
    exchangeRatios: [
      { exchange: 'Binance', price: 1.002 },
      { exchange: 'Coinbase', price: 1.001 },
      { exchange: 'Kraken', price: 1.001 },
      { exchange: 'FTX', price: 1.000 },
    ]
  },
  { 
    id: 3, 
    name: 'DAI', 
    currentPrice: 0.995, 
    peg: 1.0, 
    deviation: -0.5, 
    marketCap: 5200000000,
    risk: 'medium',
    riskScore: 42,
    liquidity24h: 980000000,
    backingStatus: 'collateralized',
    exchangeRatios: [
      { exchange: 'Binance', price: 0.996 },
      { exchange: 'Coinbase', price: 0.995 },
      { exchange: 'Kraken', price: 0.994 },
      { exchange: 'FTX', price: 0.995 },
    ]
  },
  { 
    id: 4, 
    name: 'BUSD', 
    currentPrice: 0.999, 
    peg: 1.0, 
    deviation: -0.1, 
    marketCap: 1900000000,
    risk: 'medium',
    riskScore: 38,
    liquidity24h: 430000000,
    backingStatus: 'fully backed',
    exchangeRatios: [
      { exchange: 'Binance', price: 1.000 },
      { exchange: 'Coinbase', price: 0.999 },
      { exchange: 'Kraken', price: 0.998 },
      { exchange: 'FTX', price: 0.999 },
    ]
  },
  { 
    id: 5, 
    name: 'FRAX', 
    currentPrice: 0.991, 
    peg: 1.0, 
    deviation: -0.9, 
    marketCap: 780000000,
    risk: 'high',
    riskScore: 68,
    liquidity24h: 125000000,
    backingStatus: 'partially backed',
    exchangeRatios: [
      { exchange: 'Binance', price: 0.992 },
      { exchange: 'Coinbase', price: 0.991 },
      { exchange: 'Kraken', price: 0.990 },
      { exchange: 'FTX', price: 0.991 },
    ]
  },
  { 
    id: 6, 
    name: 'TUSD', 
    currentPrice: 0.997, 
    peg: 1.0, 
    deviation: -0.3, 
    marketCap: 650000000,
    risk: 'medium',
    riskScore: 45,
    liquidity24h: 98000000,
    backingStatus: 'fully backed',
    exchangeRatios: [
      { exchange: 'Binance', price: 0.998 },
      { exchange: 'Coinbase', price: 0.997 },
      { exchange: 'Kraken', price: 0.996 },
      { exchange: 'FTX', price: 0.997 },
    ]
  },
];

// Historical stablecoin peg data for the past 90 days
export const historicalPegData = [
  { 
    name: 'USDC',
    data: Array.from({ length: 90 }, (_, i) => ({
      date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      price: 1 + (Math.random() * 0.01 - 0.005)
    }))
  },
  { 
    name: 'USDT',
    data: Array.from({ length: 90 }, (_, i) => ({
      date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      price: 1 + (Math.random() * 0.015 - 0.0075)
    }))
  },
  { 
    name: 'DAI',
    data: Array.from({ length: 90 }, (_, i) => ({
      date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      price: 1 + (Math.random() * 0.02 - 0.01)
    }))
  },
  { 
    name: 'BUSD',
    data: Array.from({ length: 90 }, (_, i) => ({
      date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      price: 1 + (Math.random() * 0.008 - 0.004)
    }))
  },
  { 
    name: 'FRAX',
    data: Array.from({ length: 90 }, (_, i) => ({
      date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      price: 1 + (Math.random() * 0.025 - 0.0125)
    }))
  },
  { 
    name: 'TUSD',
    data: Array.from({ length: 90 }, (_, i) => ({
      date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      price: 1 + (Math.random() * 0.012 - 0.006)
    }))
  }
];

// Historical depeg events
export const historicalDepegEvents = [
  {
    id: 1,
    stablecoin: 'UST',
    date: '2022-05-09',
    description: 'Terra UST de-pegged from $1.00 to under $0.30',
    severity: 'critical',
    duration: '7 days',
    lowestPrice: 0.05,
    marketCapBefore: 18700000000,
    marketCapAfter: 940000000,
    impact: 'Led to collapse of Terra ecosystem',
    relatedCoins: ['LUNA']
  },
  {
    id: 2,
    stablecoin: 'USDC',
    date: '2023-03-11',
    description: 'USDC de-pegged following Silicon Valley Bank collapse',
    severity: 'high',
    duration: '3 days',
    lowestPrice: 0.87,
    marketCapBefore: 42300000000,
    marketCapAfter: 36500000000,
    impact: 'Temporary market panic',
    relatedCoins: ['DAI']
  },
  {
    id: 3,
    stablecoin: 'DAI',
    date: '2023-03-11',
    description: 'DAI de-pegged due to USDC collateral concerns',
    severity: 'high',
    duration: '2 days',
    lowestPrice: 0.89,
    marketCapBefore: 5800000000,
    marketCapAfter: 5200000000,
    impact: 'Significant DEX slippage',
    relatedCoins: ['USDC', 'ETH']
  },
  {
    id: 4,
    stablecoin: 'BUSD',
    date: '2023-02-13',
    description: 'BUSD de-pegged slightly after Paxos stopped minting',
    severity: 'medium',
    duration: '1 day',
    lowestPrice: 0.98,
    marketCapBefore: 16100000000,
    marketCapAfter: 15800000000,
    impact: 'Migration to other stablecoins',
    relatedCoins: ['USDT', 'USDC']
  },
  {
    id: 5,
    stablecoin: 'USDT',
    date: '2023-06-07',
    description: 'USDT brief de-peg amid SEC action against crypto exchanges',
    severity: 'low',
    duration: '6 hours',
    lowestPrice: 0.97,
    marketCapBefore: 83200000000,
    marketCapAfter: 82900000000,
    impact: 'Minor market impact',
    relatedCoins: []
  }
];

// Liquidity Monitoring Data
export const liquidityMovementData = [
  {
    id: 1,
    stablecoin: 'USDC',
    timestamp: '2023-11-21T08:23:45Z',
    amount: 24500000,
    direction: 'outflow',
    platform: 'Curve 3pool',
    txHash: '0x7a8e4f...',
    address: '0x1a2b3c...',
    significance: 'high',
    correlatedWith: ['FRAX outflow', 'Increased BTC buying']
  },
  {
    id: 2,
    stablecoin: 'USDT',
    timestamp: '2023-11-21T09:12:31Z',
    amount: 18700000,
    direction: 'outflow',
    platform: 'Uniswap v3',
    txHash: '0x3d2f5a...',
    address: '0x4e5f6d...',
    significance: 'medium',
    correlatedWith: ['DAI outflow']
  },
  {
    id: 3,
    stablecoin: 'DAI',
    timestamp: '2023-11-21T10:05:18Z',
    amount: 12300000,
    direction: 'outflow',
    platform: 'Aave',
    txHash: '0x9b8a7c...',
    address: '0x7g8h9i...',
    significance: 'medium',
    correlatedWith: ['ETH price drop']
  },
  {
    id: 4,
    stablecoin: 'USDC',
    timestamp: '2023-11-21T11:47:52Z',
    amount: 31000000,
    direction: 'inflow',
    platform: 'Compound',
    txHash: '0x2c3d4e...',
    address: '0xj9k8l...',
    significance: 'high',
    correlatedWith: ['BTC price recovery']
  },
  {
    id: 5,
    stablecoin: 'FRAX',
    timestamp: '2023-11-21T12:36:09Z',
    amount: 8500000,
    direction: 'outflow',
    platform: 'Fraxswap',
    txHash: '0x5f6g7h...',
    address: '0xm9n8o...',
    significance: 'high',
    correlatedWith: ['FRAX/3CRV pool imbalance']
  }
];

// Regulatory Tracking Data
export const regulatoryEvents = [
  {
    id: 1,
    date: '2023-11-15',
    title: 'SEC Investigation into Stablecoin Reserves',
    description: 'SEC launched investigation into reserve backing of major stablecoins',
    impactedCoins: ['USDT', 'BUSD'],
    sentiment: 'negative',
    region: 'United States',
    status: 'ongoing',
    riskLevel: 'high',
    source: 'Financial Times'
  },
  {
    id: 2,
    date: '2023-10-28',
    title: 'EU MiCA Regulation Implementation Timeline',
    description: 'European Union published timeline for Markets in Crypto Assets regulation implementation',
    impactedCoins: ['All EUR-pegged stablecoins'],
    sentiment: 'neutral',
    region: 'European Union',
    status: 'announced',
    riskLevel: 'medium',
    source: 'European Commission'
  },
  {
    id: 3,
    date: '2023-10-12',
    title: 'NYDFS Updates Stablecoin Guidelines',
    description: 'New York Department of Financial Services updated guidelines for stablecoin issuers',
    impactedCoins: ['USDC', 'GUSD'],
    sentiment: 'positive',
    region: 'United States - New York',
    status: 'implemented',
    riskLevel: 'low',
    source: 'NYDFS Official Website'
  },
  {
    id: 4,
    date: '2023-09-25',
    title: 'Hong Kong Regulatory Framework for Stablecoins',
    description: 'Hong Kong Monetary Authority published regulatory framework for stablecoin issuers',
    impactedCoins: ['All USD-pegged stablecoins'],
    sentiment: 'neutral',
    region: 'Hong Kong',
    status: 'proposed',
    riskLevel: 'medium',
    source: 'Hong Kong Monetary Authority'
  },
  {
    id: 5,
    date: '2023-09-03',
    title: 'UK Treasury Stablecoin Consultation Results',
    description: 'UK Treasury published results of stablecoin regulation consultation',
    impactedCoins: ['All GBP-pegged stablecoins'],
    sentiment: 'positive',
    region: 'United Kingdom',
    status: 'announced',
    riskLevel: 'low',
    source: 'UK Treasury'
  }
];
