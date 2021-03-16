import React, {useState} from 'react';
import ImageGallery from 'react-image-gallery';




import s from './Gallery.module.css'
import {languageFunc} from "../../common/functions/functions";
import Rater from "../../Containers/RateContainer";
import Modal from "../Modal/Modal";



const Gallery = ({allArr, lang, id, token, countryInfo}) => {

    const [modal, setModal] = useState(false)

    //console.log('countryInfo',countryInfo.galleries)

    const [indexdesc, setIndex] = useState(0)
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


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
            <h1 className={s.h1}>{languageFunc(lang,
                'Достопримичательности',
                'Description',
                'Beschreibung')}</h1>
            <div className={s.gall}>
                <ImageGallery thumbnailClass={s.dima}  onSlide={(currentIndex) => setIndex(currentIndex)} items={photos} />

            </div>
            <div>
                <ul className={s.ul}>
                    {dima.map((el, index ) => {
                        if (index === indexdesc) {
                            return <li className={s.active} key={el}>
                                {el}
                                <div>
                                    <Rater galleryId={countryInfo.galleries[index]._id}
                                           token={token} id={id} />
                                    {!!modal && <Modal setModal={setModal} inf={countryInfo.galleries[index]} />}

                                    <div onClick={() => {
                                        setModal(true)
                                               console.log('проголосовавшиеся',
                                                   countryInfo.galleries[index]
                                               )
                                           }}>Посмотреть проголосовавших</div>
                                </div>

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