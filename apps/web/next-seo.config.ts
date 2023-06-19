import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Homeleswap ',
  defaultTitle: 'Homeleswap ',
  description:
    'Cheaper and faster than Uniswap? Discover Homeleswap , the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for HLS.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Homeleswap ',
    site: '@Homeleswap ',
  },
  openGraph: {
    title: '🥞 Homeleswap  - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC by user count! Earn HLS through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Homeleswap ), NFTs, and more, on a platform you can trust.',
    images: [{ url: '' }],
  },
}
