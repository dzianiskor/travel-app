import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';



import s from './Gallery.module.css'



const Gallery = ({allArr, id, lang}) => {

    const [indexdesc, setIndex] = useState(0)

    let dima = []

    allArr[id].gallery.forEach(el => dima.push(el.desc))
    //console.log('dima', dima)

    let photos = [];
    allArr[id].gallery.forEach(el => photos.push({
        original: el.img,
        thumbnail: el.img,
    }))



    //let imgCol = allArr[id].gallery.map(el => el)

    //console.log('imgCol', imgCol)

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
                            return <li className={s.active} key={el.ru}>
                                {lang === 'Русский' && el.ru}
                                {lang === 'English' && el.eng}
                                {lang === 'Deutsche' && el.gr}
                            </li>
                        } else {
                            return <li key={el.ru}>
                                {lang === 'Русский' && el.ru}
                                {lang === 'English' && el.eng}
                                {lang === 'Deutsche' && el.gr}
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