interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'The Comic book website',
    description: `A website that allows you to read comic books online. You can choose from a wide range of genres and authors.`,
    imgSrc: '/static/images/projects/comic.png',
    href: '/blog/the-time-machine',
  },
  {
    title: 'The E-commerce website',
    description: `An e-commerce website that allows you to buy products online. You can choose from a wide range of products.`,
    imgSrc: '/static/images/projects/e-commerce.png',
    href: 'https://e-commerce-dcs.netlify.app',
  },
]

export default projectsData
