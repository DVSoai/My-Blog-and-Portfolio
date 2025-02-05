import clsx from 'clsx'
import CareerData from '@/data/CareerData'
import { Minus, Plus } from 'lucide-react'
import CustomLink from './Link'
import Image from './Image'

const TimelineItem = ({ exp, last }: { exp: (typeof CareerData)[0]; last?: boolean }) => {
  const { org, url, logo, start, end, title, icon, event, details: Details } = exp

  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-800',
        !last && [
          'before:z-1',
          'before:absolute before:left-[35px] before:top-10',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="z-10 mb-0 mt-0 h-12 w-12 shrink-0 rounded-md bg-transparent"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full !bg-inherit [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-200',
            ])}
            data-umami-event={`${event} expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-200',
            ])}
            data-umami-event={`${event} collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-200">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <CustomLink
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline dark:text-white"
            >
              {org}
            </CustomLink>
            <div className="flex items-center gap-1 pt-1 text-sm text-yellow-600 dark:text-yellow-200">
              {icon}
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base text-gray-500 dark:text-gray-200">
          <Details />
        </div>
      </details>
    </div>
  )
}

export default TimelineItem
