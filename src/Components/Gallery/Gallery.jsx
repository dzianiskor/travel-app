import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';



import s from './Gallery.module.css'



const Gallery = ({allArr}) => {

    const [indexdesc, setIndex] = useState(0)

    let dima = []
    if (!allArr) {
        return <div></div>
    }

    allArr.forEach(el => dima.push(el.description))

    let photos = [];
    allArr.forEach(el => photos.push({
        original: el.img,
        thumbnail: el.img,
    }))

console.log('allArr', allArr)



/*
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
            description  :`${lang === 'Русский' && allArr[id].descriptionAboutCountry.ru}`
                + `${lang === 'English' && allArr[id].descriptionAboutCountry.eng}`
                + `${lang === 'Deutsche' && allArr[id].descriptionAboutCountry.gr}`,
            originalClass:`${s.mainImg}`,
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            description  :'Коза',
            originalClass:`${s.mainImg}`,


        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            description  :'Мука',
            originalClass:`${s.mainImg}`,


        },
    ];
*/



    return (
        <div>
            <h1 className={s.h1}>Галерея</h1>
            <div className={s.gall}>
                <ImageGallery thumbnailClass={s.dima}  onSlide={(currentIndex) => setIndex(currentIndex)} items={photos} />

            </div>
            <div>
                <ul>
                    {dima.map((el, index ) => {
                        if (index === indexdesc) {
                            return <li className={s.active} key={el}>
                                {el}

                            </li>
                        } else {
                            return <li key={el}>
                                {el}
                            </li>
                        }

                    }
                        )}
                </ul>
            </div>
        </div>
    );
};

export default Gallery;