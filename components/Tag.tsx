import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="rounded-md bg-primary-200 px-2 py-1 text-sm font-medium uppercase text-primary-950 hover:bg-primary-100 dark:bg-primary-600 dark:text-primary-50 dark:hover:bg-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
