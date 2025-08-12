import React from 'react'


const useTypewriter = (text, typeSpeed = 90, startPause = 0, deleteSpeed = 50, loop = true, loopPause = 1000) => {
  const [display, setDisplay] = React.useState('')
  React.useEffect(() => {
    let mounted = true
    let i = 0
    let isDeleting = false
    let timeoutId

    const tick = () => {
      if (!mounted) return
      if (isDeleting) {
        i = Math.max(0, i - 1)
      } else {
        i = Math.min(text.length, i + 1)
      }
      setDisplay(text.slice(0, i))

      let delay = isDeleting ? deleteSpeed : typeSpeed

      if (!isDeleting && i === text.length) {
        if (loop) {
          delay = loopPause
          isDeleting = true
        } else {
          return
        }
      } else if (isDeleting && i === 0) {
        isDeleting = false
        delay = startPause
      }

      timeoutId = setTimeout(tick, delay)
    }

    timeoutId = setTimeout(tick, startPause)

    return () => {
      mounted = false
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, typeSpeed, startPause, deleteSpeed, loop, loopPause])
  return display
}

const Background = () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=h7oqtfgvT64'
  const handleClick = (e) => {
    // Attempt new tab first; fall back to same-tab if blocked
    const win = window.open(youtubeUrl, 'noopener,noreferrer')
    if (!win) {
      window.location.href = youtubeUrl
    }
  }

  const typed = useTypewriter('rahul the king', 85, 300, 45, true, 900)

  return (
    <div>
      <div className='w-full h-screen bg-gradient-to-br from-[#0a031a] via-[#11032c] to-[#16043a] bg-vignette flex items-center justify-center p-6 sm:p-10'>
        <div className='absolute top-16 sm:top-20 md:top-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-3xl px-4 sm:px-6'>
          <p className='font-inter text-center text-[#EDE9FE]/95 text-base sm:text-lg md:text-xl font-medium tracking-wide text-glow px-2'>
            hi besties do you know wanna more about <span className='king-highlight'>{typed}</span><span className='caret'>|</span>
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
