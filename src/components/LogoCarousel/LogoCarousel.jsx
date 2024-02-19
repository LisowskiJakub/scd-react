// import adidas from '/brand/adidas.png'
// import arvato from '/brand/arvato.png'
// import ceva from '/brand/ceva.png'
// import dhl from '/brand/dhl.png'
// import eberspacher from '/brand/eberspacher.png'
// import geodis from '/brand/geodis.png'
// import geodis2 from '/brand/geodis2.png'
// import jd from '/brand/jd.png'
// import mahle from '/brand/mahle.png'
// import mcmaster from '/brands/mcmaster.png'
// import skoda from '/brand/skoda.png'
// import toyota from '/brand/toyota.png'
// import vw from '/brand/vw.png'
// import zalando from '/brand/zalando.png'

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const images = require('/brands/vw.png');
// const imageList = images.keys().map(image => images(image));


// export const LogoCarousel = () => (

//     <div>

//     </div>

// )

import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import fs from 'fs';







const LogoCarousel = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/midj');
    const imageFilenames = await fs.readdir(imageDirectory)
    console.log(imageFilenames)

    return (
        <div className={container}>
            <div className={main}>
                <Title Name='Gallery' Title={'Proof of Concept'} />
                <Gallery images={imageFilenames} />

            </div>
        </div>
    );
};

const Gallery = ({ images }) => {
    return <div className={grid}>
        {images.map((el) => <Image className={card} width={150} height={150} alt={'alt'} src={`/midj/${el}`} key={el} />)}
    </div>
}

const Title = ({ Name, Title }) => {
    return (
        <h1 className={title}>
            {Name} {Title}
        </h1>
    )
}

export default LogoCarousel;



