import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Car App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to  Car  Main page 
              
        </h1>

 
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        
            <h3 className="text-2xl font-bold">Car Data &rarr;</h3>
         
            <p className="mt-4 text-xl">
         
            car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads
         
            </p>
          
            </div>
         

          
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
          Powered by Shahed Al-khatib     
      </footer>
    </div>
  )
}
