import Heading from '@components/Heading/Heading.tsx'
import Loader from '@components/Loader/Loader.tsx'
import Paragraph from '@components/Paragraph/Paragraph.tsx'
import { useEffect, useState } from 'react'

const ResultView = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 4000)
  }, [])

  return (
    <section>
      <Heading
        text={showLoader ? 'Your Plan' : " Oops! It's not developed yet :D "}
      />

      <Paragraph
        text={
          showLoader
            ? 'We are creating a personal plan for you, please wait...'
            : 'Please contact your developer and invite him to the interview'
        }
        color="text-textSecondary"
        className="mb-3.75 tracking-[0.25px]"
      />

      <div className="flex justify-center">{showLoader && <Loader />}</div>
    </section>
  )
}

export default ResultView
