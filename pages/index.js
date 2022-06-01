import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>A home for open-source games | openhaven.io</title>
        <meta name="description" content="A home for open-source video games and the community that drives them." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="primary-heading">
          <div className="centerbox">
            <h1>A home for open-source video games</h1>
            <p>And the community that drives them.</p>
          </div>
        </header>

        <div className="centerbox">
          <p>Yo</p>
        </div>
        
      </main>
    </div>
  )
}
