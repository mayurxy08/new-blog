import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero() {
    return (
      <section className={classes.hero}>
        <div className={classes.image}>image</div>
        <Image src="/images/site/max.png" alt='atlt for image' width={300} height={300}></Image>
        <h1> its me mario</h1>
        <p> this is blog</p>
      </section>
    )
  }
  