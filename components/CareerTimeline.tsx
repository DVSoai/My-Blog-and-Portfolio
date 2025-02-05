import TimelineItem from './TimelineItem'
import CareerData from '@/data/CareerData'

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {CareerData.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === CareerData.length - 1} />
      </li>
    ))}
  </ul>
)

export default CareerTimeline
