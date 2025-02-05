import Script from 'next/script.js'

interface UmamiAnalyticsProps {
  websiteId?: string
}

const UmamiAnalytics = ({ websiteId }: UmamiAnalyticsProps) => {
  if (websiteId) {
    return <Script async defer src="https://cloud.umami.is/script.js" data-website-id={websiteId} />
  }

  return null
}

export default UmamiAnalytics
