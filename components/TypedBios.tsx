'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const TypedBios = () => {
  const el = useRef(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })

    return () => typed.current?.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in <b className="font-medium">Ha Noi, Viet Nam</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C/C++</b>.
        </li>
        <li>I ❤️ web development.</li>
        <li>
          I'm focusing on <b className="font-medium">Front-end</b> development.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I work mostly with <b className="font-medium">React.Js, Next.Js</b> framework.
        </li>
        <li>I have a dog 🐕 and a cat 🐈.</li>
        <li>I love listening music 🎶.</li>
        <li>I love playing video game 🎮, TFT is my favorite one.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
