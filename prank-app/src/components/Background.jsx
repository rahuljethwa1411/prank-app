import React from 'react'


const Background = () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=h7oqtfgvT64'
  const handleClick = (e) => {
    // Attempt new tab first; fall back to same-tab if blocked
    const win = window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
    if (!win) {
      window.location.href = youtubeUrl
    }
  }

  return (
    <div>
      <div className='w-full h-screen bg-gradient-to-br from-[#0a031a] via-[#11032c] to-[#16043a] bg-vignette flex items-center justify-center p-6 sm:p-10'>
        <div className='absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-3xl px-4 sm:px-6'>
          <p className='font-inter text-center text-[#EDE9FE]/95 text-base sm:text-lg md:text-xl font-medium tracking-wide text-glow px-2'>
            hi besties do you know wanna more about rahul the king
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); handleClick(); }}
            className="no-tap-highlight touch-manipulation rainbow-button rainbow-animate text-white btn-label font-semibold px-7 py-4 sm:px-8 sm:py-4 rounded-2xl shadow-lg active:scale-95 transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 text-base sm:text-lg whitespace-nowrap"
          >
            Click to know about me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Background
