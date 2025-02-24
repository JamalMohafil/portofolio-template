import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

type Props = {}

const Grid = (props: Props) => {
  return (
    <section id="about" className='mt-24'>
      <BentoGrid >
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            imgClassName={item.imgClassName}
            spareImg={item.spareImg}
            titleClassName={item.titleClassName}
            img={item.img}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid