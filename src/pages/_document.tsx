import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-primaryNormal relative w-full h-screen text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
