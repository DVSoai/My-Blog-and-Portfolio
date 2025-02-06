interface Career {
  org: string
  url: string
  logo: string
  start: string
  end: string
  title: string
  icon: string
  event: string
  details: () => JSX.Element
}

const CareerData: Career[] = [
  {
    org: 'Younet Media',
    url: 'https://younetmedia.com',
    logo: '/static/images/avatar.jpg',
    start: 'Mar 2022',
    end: 'Present',
    title: 'Junior Software Engineer',
    icon: '👨‍💻',
    event: 'career-younetmedia',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Build{' '}
            <a href="https://ecomheat.youneteci.com" rel="noopener noreferrer" target="_blank">
              Ecomheat
            </a>{' '}
            - a website helps to measure the performance of the industry and players on E-Commerce
            platforms thru cross E-commerce channels.
          </li>
          <li>
            Build <strong>AppCore</strong> - Developed and published core NestJS packages, including
            DatabaseModule, CacheModule, RedisModule, ConfigModule and others on npm to accelerate
            development and deployment across multiple projects.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'QKIT Software',
    url: 'https://qkit.vn',
    logo: '/static/images/avatar.jpg',
    start: 'Jan 2021',
    end: 'Dec 2022',
    title: 'Fresher Backend Developer',
    icon: '👨‍💻',
    event: 'career-qkit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>strong]:text-gray-700 [&>strong]:dark:text-gray-100">
          <li>
            📍<strong>Developed and maintained web applications</strong> for managing company
            website content, including blogs, clients, and recruitment.
          </li>
          <li>
            📍Implemented backend solutions using <strong> NestJS, PostgreSQL, and Prisma</strong>.
          </li>
          <li>
            📍<strong>Participated in Agile methodologies </strong> to boost project efficiency and
            completion rates.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'University of Information Technology',
    url: 'https://en.uit.edu.vn',
    logo: '/static/images/avatar.jpg',
    start: 'Aug 2019',
    end: 'Jun 2023',
    title: 'Student ad UIT',
    icon: '👨‍💻',
    event: 'career-qkit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Get a good degree at <strong>School of Computer Science</strong>
          </li>
          <li>
            While most of my friends pursued careers in <strong> Data or AI Engineering </strong>, I
            found my passion in {''}
            <strong>Software Engineering</strong> , particularly in web and app development. This
            decision has shaped who I am today.
          </li>
        </ul>
      )
    },
  },
]

export default CareerData
