const initialState = {

    allArr: [
        {
            id:0,
            ISO:'BYN',
            imgCountry:'https://minsknews.by/wp-content/uploads/2020/06/Pavel-Rusak-4-of-24.jpg',
            video:'',
            nameCountry: {
                ru: 'Беларусь',
                eng:'Belarus',
                gr:'Weißrussland'
            },
            capital: {
                ru:'Минск',
                eng:'Minsk',
                gr: 'Minsk',
            },
            descriptionAboutCountry: {
                ru:'Беларусь — это страна с древней историей и богатыми традициями; с великолепной природой и удивительной архитектурой, которая сочетает в себе наследие западноевропейских и восточнославянских традиций зодчества. Беларусь славится своими лесами и озерами – недаром ее называют «легкие Европы». Беларусь – это широкие светлые проспекты и узкие мощеные улочки, католические костелы и православные соборы, величественные замки и деревянные хаты в деревнях, сытная и вкусная национальная кухня.',
                eng:'Belarus is a country with an ancient history and rich traditions; with magnificent nature and amazing architecture, which combines the heritage of Western European and Eastern Slavic architectural traditions. Belarus is famous for its forests and lakes - it is not for nothing that it is called “the lungs of Europe”. Belarus is wide light avenues and narrow cobbled streets, Catholic churches and Orthodox cathedrals, majestic castles and wooden huts in the villages, hearty and delicious national cuisine.',
                gr:'Weißrussland ist ein Land mit einer alten Geschichte und reichen Traditionen; mit herrlicher Natur und erstaunlicher Architektur, die das Erbe westeuropäischer und ostslawischer Architekturtraditionen verbindet. Weißrussland ist berühmt für seine Wälder und Seen - nicht umsonst wird es „die Lunge Europas“ genannt. Weißrussland ist breite helle Alleen und enge Kopfsteinpflasterstraßen, katholische Kirchen und orthodoxe Kathedralen, majestätische Schlösser und Holzhütten in den Dörfern, herzhafte und köstliche nationale Küche.',
            },
            gallery: [
                {
                    id:0,
                    img:'https://upload.wikimedia.org/wikipedia/commons/7/78/Babrujskaja%2C_Minsk.jpg',
                    name:{
                        ru:'Ворота Минска',
                        eng:'Gates of Minsk',
                        gr:'Tore von Minsk',
                    },
                    desc:{
                        ru:'архитектурный комплекс на Привокзальной площади в Минске, представляющий собой два 11-этажных здания-башни по углам 5-этажных домов, расположенных симметрично относительно поперечной оси площади',
                        eng:'An architectural complex on Privokzalnaya Square in Minsk, which consists of two 11-storey buildings-towers at the corners of 5-storey buildings, located symmetrically relative to the transverse axis of the square',
                        gr:'Ein architektonischer Komplex am Privokzalnaya-Platz in Minsk, der aus zwei 11-stöckigen Gebäudetürmen an den Ecken von 5-stöckigen Gebäuden besteht, die symmetrisch zur Querachse des Platzes angeordnet sind'

                    },

                },
                {
                    id:1,
                    img:'https://zetgrodno.com/thumb/2/v6YkE-NIbzcSj7vQtUTn8g/r/d/image_104.jpg',
                    name:{
                        ru:'Беловежская пуща',
                        eng:'Bialowieza Forest',
                        gr:'Bialowieza Wald',
                    },
                    desc:{
                        ru:'Беловежская пуща – одна из интересных достопримечательностей Беларуси и, пожалуй, один из самых значимых реликтов всей Европы. Это место можно назвать настоящим природно-экологическим музеем под открытым небом, ведь именно здесь до наших дней природа сохранилась в первозданном виде, здесь обитают редкие виды диких животных, а живописный древний лес буквально завораживает своей красотой.',
                        eng:'Belovezhskaya Pushcha is one of the interesting sights of Belarus and, perhaps, one of the most significant relics of all of Europe. This place can be called a real natural and ecological open-air museum, because it is here that nature has been preserved to this day in its original form, rare species of wild animals live here, and the picturesque ancient forest literally mesmerizes with its beauty.',
                        gr:'Belovezhskaya Pushcha ist eine der interessantesten Sehenswürdigkeiten von Belarus und vielleicht eines der bedeutendsten Relikte Europas. Dieser Ort kann als echtes natürliches und ökologisches Freilichtmuseum bezeichnet werden, da hier die Natur bis heute in ihrer ursprünglichen Form erhalten geblieben ist, seltene Arten wilder Tiere hier leben und der malerische alte Wald buchstäblich von seiner Schönheit fasziniert .'
                    },

                },
                {
                    id:2,
                    img:'https://upload.wikimedia.org/wikipedia/commons/d/d6/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG',
                    name:{
                        ru:'Мирский замок',
                        eng:'Mir Castle',
                        gr:'Mir Schloss',
                    },
                    desc: {
                        ru:'Замковый комплекс «Мир» – уникальный памятник национальной культуры Беларуси, включенный в 2000 году в Список всемирного культурного и природного наследия ЮНЕСКО.',
                        eng:'The Mir castle complex is a unique monument of the national culture of Belarus, included in 2000 in the UNESCO World Cultural and Natural Heritage List.',
                        gr:'Der Schlosskomplex Mir ist ein einzigartiges Denkmal der belarussischen Nationalkultur, das im Jahr 2000 in die Liste des UNESCO-Weltkultur- und Naturerbes aufgenommen wurde.'
                    },

                },
                {
                    id:3,
                    img:'https://www.nlb.by/upload/iblock/378/biblioteka.jpg',
                    name:{
                        ru:'Национальная Библиотека Беларуси',
                        eng:'National Library of Belarus',
                        gr:'Nationalbibliothek von Belarus',
                    },
                    desc:{
                        ru:'Национальная библиотека – визитная карточка Беларуси. Сегодня это не только  богатейшее собрание книг, но и огромный мультифункциональный центр, где совместились высокие технологии, ультрасовременный дизайн и необычная архитектура.',
                        eng:'The National Library is a visiting card of Belarus. Today it is not only the richest collection of books, but also a huge multifunctional center where high technologies, ultra-modern design and unusual architecture have been combined.',
                        gr:'Die Nationalbibliothek ist eine Visitenkarte von Belarus. Heute ist es nicht nur die reichste Büchersammlung, sondern auch ein riesiges multifunktionales Zentrum, in dem Hochtechnologien, hochmodernes Design und ungewöhnliche Architektur kombiniert wurden.'
                    },

                },
                {
                    id:4,
                    img:'https://planetabelarus.by/upload/iblock/09f/09fa1405d52b2114b863c18d3f05d12b.jpg',
                    name:{
                        ru:'Брестская крепость',
                        eng:'Brest Fortress',
                        gr:'Festung Brest',
                    },
                    desc:{
                        ru:'Бре́стская кре́пость — крепость в черте города Бреста , у впадения реки Мухавец в Западный Буг, а также Тереспольской гмины Польши. Кроме того, Брестской крепости С 8 мая 1965 года присвоено звание крепости-героя. - высшей степени отличия, которой удостоены единственная крепость и двенадцать городов Советского Союза прославившихся своей героической обороной во время Великой Отечественной войны 1941—1945 годов.',
                        eng:'Brest Fortress is a fortress within the city of Brest, at the confluence of the Mukhavets River with the Western Bug, as well as the Terespol commune of Poland. In addition, the Brest Fortress was awarded the title of Hero Fortress on May 8, 1965. - the highest degree of distinction, which was awarded to the only fortress and twelve cities of the Soviet Union, famous for their heroic defense during the Great Patriotic War of 1941-1945.',
                        gr:'Die Festung Brest ist eine Festung in der Stadt Brest am Zusammenfluss des Flusses Mukhavets mit dem westlichen Käfer sowie der polnischen Gemeinde Terespol. Darüber hinaus wurde die Festung Brest am 8. Mai 1965 mit dem Titel Heldenfestung ausgezeichnet. - das höchste Maß an Auszeichnung, das der einzigen Festung und zwölf Städten der Sowjetunion verliehen wurde, die für ihre heldenhafte Verteidigung während des Großen Vaterländischen Krieges von 1941-1945 berühmt waren.'
                    },

                },
                {
                    id:5,
                    img:'https://upload.wikimedia.org/wikipedia/commons/4/4d/Nara%C4%8D_-_6.jpg',
                    name:{
                        ru:'озеро Нарочь',
                        eng:'Lake Naroch',
                        gr:'See Naroch',
                    },
                    desc:{
                        ru:'Озеро Нарочь – это не просто очередной крупный водоем Беларуси. Это «визитная карточка» страны, слава о которой уже давно пересекла пределы Беларуси. А в последние годы и вовсе на берегах этого озера прослеживается тенденция: необорудованные пляжи «оккупируют» местные жители да белорусские туристы, а вот оборудованную часть озера занимают иностранные туристы.',
                        eng:'Lake Naroch is not just another large reservoir of Belarus. This is a "visiting card" of the country, the fame of which has long crossed the borders of Belarus. And in recent years, a tendency has been observed on the shores of this lake: unequipped beaches are "occupied" by local residents and Belarusian tourists, but the equipped part of the lake is occupied by foreign tourists',
                        gr:'Der Narochsee ist nicht nur ein weiteres großes Reservoir in Weißrussland. Dies ist eine "Visitenkarte" des Landes, deren Ruhm seit langem die Grenzen von Belarus überschritten hat. Und in den letzten Jahren wurde an den Ufern dieses Sees eine Tendenz beobachtet: Unausgestattete Strände werden von Anwohnern und belarussischen Touristen "besetzt", aber der ausgestattete Teil des Sees wird von ausländischen Touristen besetzt'
                    },

                },

            ]
        },
        {
            id:1,
            ISO:'UAH',
            imgCountry:'https://delo.ua/files/news/images/3610/72/picture2_ukraina-podnjalas_361072_p0.jpg',
            nameCountry: {
                ru: 'Украина',
                eng:'Ukraine',
                gr:'Ukraine'
            },
            capital: {
                ru:'Киев',
                eng:'Kiev',
                gr: 'Kiew',
            },
            descriptionAboutCountry: {
                ru:'Украина – это большая страна в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами. В Киеве, столице страны, расположен Софийский собор, украшенный золотыми куполами, мозаикой XI века и фресками. Над рекой Днепр возвышается монастырь Киево-Печерская лавра, место паломничества многих православных христиан.',
                eng:'Ukraine is a large country in Eastern Europe, famous for its Orthodox churches, Black Sea resorts and forested mountains. In Kiev, the capital of the country, there is the St. Sophia Cathedral, decorated with golden domes, 11th century mosaics and frescoes. The Kiev-Pechersk Lavra monastery rises above the Dnieper River, a place of pilgrimage for many Orthodox Christians.',
                gr:'Die Ukraine ist ein großes Land in Osteuropa, das für seine orthodoxen Kirchen, Schwarzmeerorte und bewaldeten Berge bekannt ist. In Kiew, der Hauptstadt des Landes, befindet sich die Sophienkathedrale, die mit goldenen Kuppeln, Mosaiken und Fresken aus dem 11. Jahrhundert geschmückt ist. Das Kloster Kiew-Petschersk Lavra erhebt sich über dem Dnepr, einem Wallfahrtsort für viele orthodoxe Christen.'
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-1-Kiev-Pechersk-Lavra-e1490934404725.jpg',
                    name:{
                        ru:'Киево-Печерская лавра',
                        eng:'Kiev-Pechersk Lavra',
                        gr:'Kiew-Petschersk Lavra',
                    },
                    desc:{
                        ru:'Одной из самых главных святынь православия, что сохранилась практически в первозданном виде еще с 11 века, по праву считается Киево-Печерская лавра – первый монастырь на Руси и символ веры. Над мощными водами Днепра, на его живописных склонах, сияя золотыми куполами, красуются величественные храмы. К ним ведут утопающие в зелени вымощенные булыжником дорожки, а внизу, в подземелье, извиваясь узким лабиринтом коридоров, расположились таинственные пещеры, где находится главное сокровище лавры – святые нетленные мощи праведников',
                        eng:'One of the most important shrines of Orthodoxy, which has been preserved almost in its original form since the 11th century, is rightfully considered the Kiev-Pechersk Lavra - the first monastery in Russia and a symbol of faith. Above the powerful waters of the Dnieper, on its picturesque slopes, shining with golden domes, majestic temples flaunt. Cobbled paths drowning in greenery lead to them, and below, in the dungeon, meandering in a narrow labyrinth of corridors, there are mysterious caves, where the main treasure of the Lavra is located - the holy incorruptible relics of the righteous.',
                        gr:'Eines der wichtigsten Schreine der Orthodoxie, das seit dem 11. Jahrhundert fast in seiner ursprünglichen Form erhalten geblieben ist, gilt zu Recht als die Kiewer Pechersker Lavra - das erste Kloster in Russland und ein Symbol des Glaubens. Über dem mächtigen Wasser des Dnjepr, an seinen malerischen Hängen, die mit goldenen Kuppeln glänzen, prägen majestätische Tempel. Im Grünen ertrunkene Kopfsteinpflasterwege führen zu ihnen, und unten im Verlies, das sich in einem engen Labyrinth von Korridoren schlängelt, befinden sich mysteriöse Höhlen, in denen sich der Hauptschatz der Lavra befindet - die heiligen unbestechlichen Relikte der Gerechten.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-2-Maidan-Nezalezhnosti--e1490934628398.jpg',
                    name:{
                        ru:'Площадь Независимости',
                        eng:'Independence Square',
                        gr:'Platz der Unabhängigkeit',
                    },
                    desc:{
                        ru:'Площадь Независимости, именуемая украинцами «майдан», – главная площадь столицы. Это объект, который туристы и гости города посещают обязательно. Здесь любят побродить у фонтанов, сфотографироваться рядом с величественным монументом и просто погулять. К майдану примыкают несколько главных улиц Киева: Крещатик, Институтская, Софийская, Михайловская.',
                        eng:'Independence Square, called "Maidan" by Ukrainians, is the main square of the capital. This is an object that tourists and guests of the city must visit. Here they like to wander by the fountains, take pictures next to the majestic monument and just take a walk. Several main streets of Kiev adjoin the Maidan: Khreshchatyk, Institutskaya, Sofiyskaya, Mikhailovskaya.',
                        gr:'Der Unabhängigkeitsplatz, von den Ukrainern "Maidan" genannt, ist der Hauptplatz der Hauptstadt. Dies ist ein Objekt, das Touristen und Gäste der Stadt besuchen müssen. Hier wandern sie gerne an den Brunnen vorbei, fotografieren neben dem majestätischen Denkmal und machen einfach einen Spaziergang. Mehrere Hauptstraßen von Kiew grenzen an den Maidan: Chreschtschatyk, Institutskaya, Sofiyskaya, Mikhailovskaya.'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-4-The-Khotyn-Fortress-e1490935229596.jpg',
                    name:{
                        ru:'Хотинская крепость',
                        eng:'Khotyn fortress',
                        gr:'Festung Khotyn',
                    },
                    desc: {
                        ru:'Хотинская крепость – одно из самых зрелищных мест, где нужно обязательно побывать любому туристу. Это настоящий памятник великой истории Руси, которому уже чуть более 1000 лет.',
                        eng:'The Khotyn Fortress is one of the most spectacular places where any tourist should definitely visit. This is a real monument to the great history of Russia, which is already a little over 1000 years old.',
                        gr:'Die Festung Khotyn ist einer der spektakulärsten Orte, die jeder Tourist unbedingt besuchen sollte. Dies ist ein echtes Denkmal für die große Geschichte Russlands, die bereits etwas mehr als 1000 Jahre alt ist.'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-5-Saint-Sophia-Cathedral-e1490935588202.jpg',
                    name:{
                        ru:'Собор Святой Софии',
                        eng:'Saint Sophie Cathedral',
                        gr:'Saint Sophie Kathedrale',
                    },
                    desc:{
                        ru:'Изначально сооружение состояло из 13 куполов, с течением времени добавилось еще 6. Храм часто разрушался из-за нападок грабителей-захватчиков, пережил натиск татаро-монгольского ига, отряд Батыя полностью разнес и разграбил собор',
                        eng:'Initially, the structure consisted of 13 domes, over time 6 more were added. The temple was often destroyed due to the attacks of robbers-invaders, survived the onslaught of the Tatar-Mongol yoke, Batu\'s detachment completely destroyed and plundered the cathedral',
                        gr:'Anfangs bestand die Struktur aus 13 Kuppeln, im Laufe der Zeit kamen 6 weitere hinzu. Der Tempel wurde oft durch die Angriffe von Räuber-Invasoren zerstört, überlebte den Ansturm des tatarisch-mongolischen Jochs, Batus Abteilung zerstörte die Kathedrale vollständig und plünderte sie'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-6-the-Tunnel-of-Love-e1490938470328.jpg',
                    name:{
                        ru:'Тонль любви',
                        eng:'Tonle of love',
                        gr:'Tonle der Liebe',
                    },
                    desc:{
                        ru:'Тоннель любви считается одним из самых красивых мест на земле. Особенно популярна эта достопримечательность среди романтиков и молодоженов, которые приезжают сюда загадывать желание, и фотографов, получающих много качественных и интересных снимков. Находится тоннель в лесу неподалеку от города Клевань в Ровенской области.',
                        eng:'The Tunnel of Love is considered one of the most beautiful places on earth. This attraction is especially popular among romantics and newlyweds who come here to make a wish, and photographers who receive many high-quality and interesting pictures. There is a tunnel in a forest near the town of Klevan in the Rivne region.',
                        gr:'Der Tunnel der Liebe gilt als einer der schönsten Orte der Welt. Diese Attraktion ist besonders beliebt bei Romantikern und Jungvermählten, die hierher kommen, um sich etwas zu wünschen, sowie bei Fotografen, die viele hochwertige und interessante Bilder erhalten. Es gibt einen Tunnel in einem Wald in der Nähe der Stadt Klevan in der Region Rivne.',
                    },

                },
                {
                    id:5,
                    img:'https://ukrainer.net/wp-content/uploads/2020/06/39.jpg',
                    name:{
                        ru:'Город-полуостров Залищики',
                        eng:'Peninsula City Zalishiki',
                        gr:'Halbinselstadt Zalishiki',
                    },
                    desc:{
                        ru:'Залещики - небольшой курортный городок (около 5000 населения) - лежит в живописной долине на левом берегу Днестра в юго-западном Подолье, как бы на полуострове. Противоположный буковинский берег Днестра, окружающий Залещики с трех сторон, а в частности с юга и востока, возвышается над рекой на 70-120 метров высокой и отвесной стеной, в основном покрытой кустами и деревьями. С Буковиной Залещики связанны двумя мостами - Железнодорожный на западе, наивысшим мостом предвоенной Польши, и вторым мостом, соединяет галицкий гостинец Тернополь - Чертков - Залещики с Черновцами. Этот гостинец в самом городе назывался улица Собеского.',
                        eng:'Zalishchyky is a small resort town (about 5000 population) - lies in a picturesque valley on the left bank of the Dniester in southwestern Podillia, as if on a peninsula. The opposite Bukovinian bank of the Dniester, surrounding Zalishchyky from three sides, and in particular from the south and east, rises 70-120 meters above the river with a high and steep wall, mainly covered with bushes and trees. Zalishchyky is connected with Bukovina by two bridges - Zheleznodorozhny in the west, the highest bridge of pre-war Poland, and the second bridge, which connects the Galician hotel Ternopil - Chertkov - Zalishchyky with Chernivtsi. This hotel in the city itself was called Sobieski Street.',
                        gr:'Zalishchyky ist ein kleiner Ferienort (ca. 5000 Einwohner) - liegt in einem malerischen Tal am linken Ufer des Dnjestr im Südwesten von Podillia wie auf einer Halbinsel. Das gegenüberliegende bukowinische Ufer des Dnjestr, das Zalishchyky von drei Seiten und insbesondere von Süden und Osten umgibt, erhebt sich 70 bis 120 Meter über dem Fluss mit einer hohen und steilen Wand, die hauptsächlich mit Büschen und Bäumen bedeckt ist. Zalishchyky ist durch zwei Brücken mit der Bukowina verbunden - Zheleznodorozhny im Westen, die höchste Brücke Polens aus der Vorkriegszeit, und die zweite Brücke, die das galizische Hotel Ternopil - Chertkov - Zalishchyky mit Chernivtsi verbindet. Dieses Hotel in der Stadt selbst hieß Sobieski Street.'
                    },


                },
            ]
        },
        {
            id:2,
            ISO:'RUB',
            imgCountry:'https://static.dw.com/image/43156700_303.jpg',
            nameCountry: {
                ru: 'Россия',
                eng:'Russia',
                gr:'Russland'
            },
            capital: {
                ru:'Москва',
                eng:'Moscow',
                gr: 'Moskau',
            },
            descriptionAboutCountry: {
                ru:'Россия – крупнейшая страна мира, расположенная в Восточной Европе и Северной Азии и омываемая водами Тихого и Северного Ледовитого океанов. Ландшафт России крайне разнообразен: на ее территории есть и тундра, и леса, и субтропические пляжи. В Большом театре в Москве и Мариинском театре в Санкт-Петербурге выступают балетные труппы, снискавшие всемирную славу. Санкт-Петербург, основанный императором Петром I, известен своим Зимним дворцом в стиле барокко, в котором размещается часть обширной художественной коллекции музея "Эрмитаж".',
                eng:'Russia is the largest country in the world, located in Eastern Europe and North Asia and washed by the Pacific and Arctic Oceans. The landscape of Russia is extremely diverse: on its territory there are tundra, forests, and subtropical beaches. World-renowned ballet companies perform at the Bolshoi Theater in Moscow and the Mariinsky Theater in St. Petersburg. Founded by Emperor Peter I, St. Petersburg is famous for its Baroque Winter Palace, which houses part of the Hermitage Museum\'s extensive art collection.',
                gr:'Russland ist das größte Land der Welt, liegt in Osteuropa und Nordasien und wird vom Pazifik und der Arktis umspült. Die Landschaft Russlands ist äußerst vielfältig: Auf seinem Territorium gibt es Tundra, Wälder und subtropische Strände. Weltbekannte Ballettkompanien treten am Bolschoi-Theater in Moskau und am Mariinsky-Theater in St. Petersburg auf. St. Petersburg wurde von Kaiser Peter I. gegründet und ist berühmt für seinen barocken Winterpalast, in dem sich ein Teil der umfangreichen Kunstsammlung der Eremitage befindet.',
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-2-Petergof-e1491988446972.jpg',
                    name:{
                        ru:'Петергоф',
                        eng:'Peterhof',
                        gr:'Peterhof',
                    },
                    desc:{
                        ru:'Петергоф относится к самым красивым достопримечательностям России. Здесь на небольшой площади сосредоточилось огромное количество исторических сооружений и произведений искусства.',
                        eng:'Peterhof is one of the most beautiful sights of Russia. A huge number of historical buildings and works of art are concentrated here in a small area.',
                        gr:'Peterhof ist eine der schönsten Sehenswürdigkeiten Russlands. Eine große Anzahl historischer Gebäude und Kunstwerke konzentriert sich hier auf eine kleine Fläche.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-3-Lake-Baikal-e1491988640354.jpg',
                    name:{
                        ru:'Озеро Байкал',
                        eng:'Lake Baikal',
                        gr:'Baikalsee',
                    },
                    desc:{
                        ru:'Величайшее озеро на Земле, российскую святыню иногда называют «лабораторией разнообразия» и крупнейшим в мире хранилищем чистейшей пресной воды. В нем обитает почти 3,000 видов растений, а более 80% из них не встречаются больше нигде. Единственное млекопитающее, живущее в древнем озере, – байкальская нерпа. Несколько лет назад Байкал был официально признан «чудом России». Это самое глубокое, прозрачное и невероятно чистое озеро не Земле. ',
                        eng:'The greatest lake on Earth, the Russian shrine is sometimes called the “laboratory of diversity” and the world\'s largest repository of the purest fresh water. It is home to nearly 3,000 plant species, and more than 80% of them are found nowhere else. The only mammal living in the ancient lake is the Baikal seal. Several years ago, Baikal was officially recognized as a “miracle of Russia”. This is the deepest, transparent and incredibly clean lake on Earth.',
                        gr:'Der größte Schrein der Erde, der russische Schrein, wird manchmal als „Labor der Vielfalt“ und als weltweit größter Speicher für reinstes Süßwasser bezeichnet. Es ist die Heimat von fast 3.000 Pflanzenarten, von denen mehr als 80% nirgendwo anders zu finden sind. Das einzige Säugetier, das im alten See lebt, ist das Baikalrobben. Vor einigen Jahren wurde der Baikalsee offiziell als „Wunder Russlands“ anerkannt. Dies ist der tiefste, transparenteste und unglaublich saubere See der Erde.'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-5-Hermitage-Museum-e1491989129859.jpg',
                    name:{
                        ru:'Эрмитаж',
                        eng:'hermitage Museum',
                        gr:'Einsiedelei Museum',
                    },
                    desc: {
                        ru:'Госуда́рственный Эрмита́ж — музей изобразительного и декоративно-прикладного искусства, расположенный в городе Санкт-Петербург. Один из крупнейших художественных музеев в мире',
                        eng:'The State Hermitage Museum is a museum of fine and decorative applied arts located in the city of St. Petersburg. One of the largest art museums in the world',
                        gr:'Die Eremitage ist ein Museum für bildende und dekorative angewandte Kunst in der Stadt St. Petersburg. Eines der größten Kunstmuseen der Welt'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-12-The-Russky-Bridge-e1491990665968.jpg',
                    name:{
                        ru:'Вантовые мосты во Владивостоке',
                        eng:'Cable-stayed bridges in Vladivostok',
                        gr:'Schrägseilbrücken in Wladiwostok',
                    },
                    desc:{
                        ru:'Вантовые мосты во Владивостоке потрясают своим величием каждого, кто приезжает в страну посмотреть достопримечательности России. Это современное грандиозное сооружение, строившееся почти шесть лет, стало современным символом города и его гордостью.',
                        eng:'Cable-stayed bridges in Vladivostok amaze everyone who comes to the country to see the sights of Russia with their grandeur. This modern grandiose structure, which has been under construction for almost six years, has become a modern symbol of the city and its pride.',
                        gr:'Schrägseilbrücken in Wladiwostok überraschen jeden, der ins Land kommt, um die Sehenswürdigkeiten Russlands mit ihrer Größe zu sehen. Diese moderne, grandiose Struktur, die seit fast sechs Jahren im Bau ist, ist zu einem modernen Symbol der Stadt und ihres Stolzes geworden.'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/21-Cruiser_Aurora_St._Petersburg-e1561773467888.jpg',
                    name:{
                        ru:'Крейсер Аврора',
                        eng:'Cruiser Aurora',
                        gr:'Kreuzer Aurora',
                    },
                    desc:{
                        ru:'Крейсер Аврора - это символичный памятник северной столицы.Бронепалубный крейсер, созданный для усиления военно-морского флота в процессе геополитического соперничества с Англией, получил название в честь древнеримской богини утренней зари. Судно регулярно подвергалось обстрелам вражеских артиллерий, но всё же сохранилось до наших дней. Сегодня на борту крейсера действует музей, посвящённый участию судна в значимых исторических событиях, а также корабельный храм, восстановленный в постсоветское время',
                        eng:'The cruiser Aurora is a symbolic monument of the northern capital. The armored cruiser, created to strengthen the navy in the process of geopolitical rivalry with England, was named in honor of the ancient Roman goddess of the morning dawn. The ship was regularly subjected to enemy artillery fire, but it has survived to this day. Today, on board the cruiser, there is a museum dedicated to the ship\'s participation in significant historical events, as well as a ship temple restored in the post-Soviet era.',
                        gr:'Der Kreuzer Aurora ist ein symbolisches Denkmal der nördlichen Hauptstadt. Der Panzerkreuzer, der zur Stärkung der Marine im Zuge der geopolitischen Rivalität mit England geschaffen wurde, wurde zu Ehren der alten römischen Göttin des Morgens benannt. Das Schiff war regelmäßig feindlichem Artilleriefeuer ausgesetzt, hat aber bis heute überlebt. Heute gibt es an Bord des Kreuzers ein Museum, das der Teilnahme des Schiffes an bedeutenden historischen Ereignissen gewidmet ist, sowie einen Schiffstempel, der in der postsowjetischen Ära restauriert wurde.'
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/31-Trans-Siberian_Railway-e1561774249218.jpg',
                    name:{
                        ru:'Транссибирская железная дорога',
                        eng:'Trans-Siberian Railway',
                        gr:'Trans-Siberian Railway ...',
                    },
                    desc:{
                        ru:'Великий сибирский путь, именуемый сегодня Транссибирской железной дорогой, по масштабам своим превосходит все железнодорожные линии мира. Протяжённость магистрали составляет почти 10 тысяч километров, она проходит через 21 субъект РФ, и её главная задача состоит в соединении Европейского региона страны, его основной (Москва) и северной столицы (Санкт-Петербург) с важнейшими дальневосточными и восточносибирскими городами России.',
                        eng:'The great Siberian route, now called the Trans-Siberian Railway, surpasses all railway lines in the world in its scale. The length of the highway is almost 10 thousand kilometers, it passes through 21 constituent entities of the Russian Federation, and its main task is to connect the European region of the country, its main (Moscow) and the northern capital (St. Petersburg) with the most important Far Eastern and Eastern Siberian cities of Russia.',
                        gr:'Die große sibirische Strecke, heute Transsibirische Eisenbahn genannt, übertrifft in ihrem Umfang alle Eisenbahnstrecken der Welt. Die Länge der Autobahn beträgt fast zehntausend Kilometer, sie führt durch 21 Bestandteile der Russischen Föderation und ihre Hauptaufgabe besteht darin, die europäische Region des Landes, ihre Hauptregion (Moskau) und die nördliche Hauptstadt (St. Petersburg) zu verbinden. mit den wichtigsten fernöstlichen und ostsibirischen Städten Russlands.'
                    },

                },

            ]
        },
        {
            id:3,
            ISO:'BRL',
            imgCountry:'https://100dorog.ru/upload/contents/432/2008/Braziliya_RiodeZhane-03403104.jpg?width=795&scale=both',
            nameCountry: {
                ru: 'Бразилия',
                eng:'Brazil',
                gr:'Brasilien'
            },
            capital: {
                ru:'Бразилиа',
                eng:'Brasilia',
                gr: 'Brasilia',
            },
            descriptionAboutCountry: {
                ru:'Бразилия расположена в юго-восточной части южной Америки. С востока омывается Атлантическим океаном, на севере граничит с Гвианой, Суринамом, Гайаной и Венесуэлой, на северо-западе – с Колумбией, на западе – С Перу. Боливией, Парагваем, Аргентиной, на юго-западе – с Уругваем. Большую часть страны занимает амазонская низменность. Протяженность береговой линии – 3000 км, здесь находятся самые лучшие пляжи мира. На границе трех государств: Бразилии, Аргентины и Парагвая - расположен великолепный национальный парк Игуасу с водопадами (около трехсот) на стыке рек Игуасу и Парана.',
                eng:'Brazil is located in the southeastern part of South America. It is washed by the Atlantic Ocean in the east, in the north it borders with Guiana, Suriname, Guyana and Venezuela, in the northwest - with Colombia, in the west - with Peru. Bolivia, Paraguay, Argentina, in the southwest - with Uruguay. Most of the country is occupied by the Amazonian lowlands. The length of the coastline is 3000 km, the best beaches in the world are located here. On the border of three states: Brazil, Argentina and Paraguay, there is a magnificent Iguazu National Park with waterfalls (about three hundred) at the junction of the Iguazu and Parana rivers.',
                gr:'Brasilien liegt im südöstlichen Teil Südamerikas. Es wird im Osten vom Atlantik umspült, im Norden grenzt es an Guayana, Suriname, Guyana und Venezuela, im Nordwesten an Kolumbien, im Westen an Peru. Bolivien, Paraguay, Argentinien, im Südwesten - mit Uruguay. Der größte Teil des Landes ist vom Amazonas-Tiefland besetzt. Die Länge der Küste beträgt 3000 km, hier befinden sich die besten Strände der Welt. An der Grenze von drei Staaten: Brasilien, Argentinien und Paraguay befindet sich an der Kreuzung der Flüsse Iguazu und Parana ein herrlicher Iguazu-Nationalpark mit Wasserfällen (etwa dreihundert).',
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Brazil-2-Adam-and-Eve-waterfall-e1490430110461.jpg',
                    name:{
                        ru:'Водопад «Адам и Ева',
                        eng:'Waterfall "Adam and Eve',
                        gr:'Wasserfall "Adam und Eva',
                    },
                    desc:{
                        ru:'Водопад «Адам и Ева» можно по праву считать величайшей природной достопримечательностью Бразилии. Комплекс водопадов на реке Игуасу восхищает каждого, кто их видит. Они находятся на границе Бразилии и Аргентины.',
                        eng:'Waterfall "Adam and Eve" can rightfully be considered the greatest natural attraction in Brazil. The complex of waterfalls on the Iguazu River delights everyone who sees them. They are located on the border of Brazil and Argentina.',
                        gr:'Der Wasserfall "Adam und Eva" kann zu Recht als die größte natürliche Attraktion in Brasilien angesehen werden. Der Komplex der Wasserfälle am Fluss Iguazu begeistert jeden, der sie sieht. Sie befinden sich an der Grenze zwischen Brasilien und Argentinien.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Brazil-1-Christ-the-Redeemer-e1490429791222.jpg',
                    name:{
                        ru:'Статуя Христа',
                        eng:'Statue of christ',
                        gr:'Statue von Christus',
                    },
                    desc:{
                        ru:'Статуя Христа-Искупителя самая узнаваемая в стране. Она находится на горе Корковаду. Раскинутые Руки Христа символизируют благословение города. Миллионы туристов стремятся попасть в Рио-де-Жанейро именно для того, чтобы увидеть статую Христа-Искупителя. Эта знаменитая достопримечательность Бразилии возводилась в честь 100-летия независимости.',
                        eng:'The statue of Christ the Redeemer is the most recognizable in the country. It is located on Mount Corcovado. The outstretched Hands of Christ symbolize the blessing of the city. Millions of tourists strive to get to Rio de Janeiro precisely in order to see the statue of Christ the Redeemer. This famous landmark in Brazil was built in honor of the 100th anniversary of independence.',
                        gr:'Die Statue von Christus dem Erlöser ist die bekannteste im Land. Es befindet sich am Mount Corcovado. Die ausgestreckten Hände Christi symbolisieren den Segen der Stadt. Millionen von Touristen bemühen sich, genau nach Rio de Janeiro zu gelangen, um die Statue von Christus dem Erlöser zu sehen. Dieses berühmte Wahrzeichen in Brasilien wurde zu Ehren des 100. Jahrestages der Unabhängigkeit erbaut.'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Brazil-7-Sugarloaf-Mountain-e1490431704298.jpg',
                    name:{
                        ru:'Гора «Cахарная голова»',
                        eng:'Mountain "Sugarloaf"',
                        gr:'Berg "Zuckerhut"',
                    },
                    desc: {
                        ru:'Гора имеет высоту 396 метров. Она величественно поднимается над заливом Гуанабара и является природной достопримечательностью Бразилии. Необычная форма горы послужила причиной оригинального названия. Местные жители называют ее Пан-ди-Асукар, что в переводе означает «сахарная голова»',
                        eng:'The mountain is 396 meters high. It rises majestically over Guanabara Bay and is a natural landmark in Brazil. The unusual shape of the mountain gave rise to the original name. Locals call it Pan-di-Asukar, which means "sugar loaf"',
                        gr:'Der Berg ist 396 Meter hoch. Es erhebt sich majestätisch über der Guanabara Bay und ist ein natürliches Wahrzeichen in Brasilien. Aus der ungewöhnlichen Form des Berges entstand der ursprüngliche Name. Einheimische nennen es Pan-di-Asukar, was "Zuckerhut" bedeutet.'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Brazil-8-Amazon-rainforest-e1490431988735.jpg',
                    name:{
                        ru:'Тропические леса Амазонки',
                        eng:'Amazon rainforest',
                        gr:'Amazonas-Regenwald',
                    },
                    desc:{
                        ru:'В природные достопримечательности Бразилии входят леса Амазонки. Они имеют второе название — Амазония, которое в Бразилии встречается более часто. Это широколиственные леса с повышенной влажностью. Амазония находится в бассейне реки с тем же названием. Мощные вечнозеленые леса занимают площадь в 5,5 миллионов квадратных километров.',
                        eng:'Brazil\'s natural attractions include the Amazon forests. They have a second name - Amazonia, which is more common in Brazil. These are deciduous forests with high humidity. The Amazon is located in the basin of the river of the same name. Powerful evergreen forests cover an area of 5.5 million square kilometers.',
                        gr:'Zu den natürlichen Attraktionen Brasiliens zählen die Amazonaswälder. Sie haben einen zweiten Namen - Amazonien, das in Brasilien häufiger vorkommt. Dies sind Laubwälder mit hoher Luftfeuchtigkeit. Der Amazonas befindet sich im Becken des gleichnamigen Flusses. Kraftvolle immergrüne Wälder bedecken eine Fläche von 5,5 Millionen Quadratkilometern.'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Brazil-12-Copacabana-e1490433208175.jpg',
                    name:{
                        ru:'Копакабана',
                        eng:'Copacabana',
                        gr:'Copacabana',
                    },
                    desc:{
                        ru:'На 4 километра распростерся пляжный район Копакабана в Рио-де-Жанейро. Ранее на этом месте находилась рыбацкая деревня, которая носила то же название. В переводе это слово обозначает «светлое пятно». Копакабана известна тем, что здесь находили приют представители мира искусства. Здесь часто селились бразильские артисты, писатели или художники.',
                        eng:'The Copacabana beach area in Rio de Janeiro stretches for 4 kilometers. Previously, there was a fishing village on this site, which bore the same name. Translated, this word means "bright spot". Copacabana is known for being the home of the art world. Brazilian artists, writers or painters often settled here.',
                        gr:'Der Strandbereich der Copacabana in Rio de Janeiro erstreckt sich über 4 Kilometer. Zuvor gab es an dieser Stelle ein Fischerdorf, das den gleichen Namen trug. Übersetzt bedeutet dieses Wort "Lichtblick". Copacabana ist bekannt als Heimat der Kunstwelt. Hier ließen sich oft brasilianische Künstler, Schriftsteller oder Maler nieder.'
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Brazil-14-Ponta-Dunas-waterpark-e1490433772720.jpg',
                    name:{
                        ru:'Аквапарк Ponta Dunas',
                        eng:'Ponta Dunas Water Park',
                        gr:'Wasserpark Ponta Dunas',
                    },
                    desc:{
                        ru:'В Форталезе находится один из самых крупных бразильских аквапарков. Ponta Dunas — это излюбленное летнее развлечение туристов. Бесчисленное множество головокружительных аттракционов привлекает сюда отдыхающих. Горки и экстремальные спуски в потоках воды, от которых замирает сердце, — это гарантия самых ярких впечатлений. Ponta Dunas дополняет достопримечательности Бразилии.',
                        eng:'Fortaleza is home to one of the largest Brazilian water parks. Ponta Dunas is a favorite summer attraction for tourists. Countless dizzying attractions attract vacationers here. Slides and extreme descents in streams of water, from which the heart sinks, is a guarantee of the most vivid impressions. Ponta Dunas complements the attractions of Brazil.',
                        gr:'In Fortaleza befindet sich einer der größten brasilianischen Wasserparks. Ponta Dunas ist eine beliebte Sommerattraktion für Touristen. Unzählige schwindelerregende Attraktionen ziehen hier Urlauber an. Rutschen und extreme Abfahrten in Wasserströmen, aus denen das Herz sinkt, garantieren die lebendigsten Eindrücke. Ponta Dunas ergänzt die Attraktionen Brasiliens.'
                    },

                },

            ]
        },
        {
            id:4,
            ISO:'GBP',
            imgCountry:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jsurwfkgUJnpbmM4pxj0e0HPvf1Rdze0sg&usqp=CAU',
            nameCountry: {
                ru: 'Великобритания',
                eng:'Great Britain',
                gr:'Großbritannien'
            },
            capital: {
                ru:'Лондон',
                eng:'London',
                gr: 'London',
            },
            descriptionAboutCountry: {
                ru:'Великобритания (официальное название – Соединенное Королевство Великобритании и Северной Ирландии) – островное государство на северо-западе Европы, состоящее из Англии, Шотландии, Уэльса и Северной Ирландии. В Англии, на родине Шекспира и группы The Beatles, находится столица государства Лондон – мировой деловой и культурный центр.',
                eng:'Great Britain (officially the United Kingdom of Great Britain and Northern Ireland) is an island state in northwestern Europe, consisting of England, Scotland, Wales and Northern Ireland. In England, the homeland of Shakespeare and the Beatles, is the capital of the state, London - the world business and cultural center.',
                gr:'Großbritannien (offiziell das Vereinigte Königreich von Großbritannien und Nordirland) ist ein Inselstaat in Nordwesteuropa, der aus England, Schottland, Wales und Nordirland besteht. In England, der Heimat von Shakespeare und den Beatles, befindet sich die Hauptstadt des Bundesstaates London - das weltweite Geschäfts- und Kulturzentrum.',
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/1-Windsor-Castle-e1517624976108.jpg',
                    name:{
                        ru:'Виндзорский замок',
                        eng:'Windsor castle',
                        gr:'Schloss Windsor',
                    },
                    desc:{
                        ru:'Виндзорский замок - оплот и резиденция британских монархов. , возвышающегося на холме в долине Темзы, не случайно. Он был возведен в 1070 году, и сегодня считается самой романтической постройкой страны. Более того, благодаря размерам в 580 м. на 165 м., Виндзорский замок попал в Книгу Рекордов Гиннеса в качестве крупнейшего замка всего мира.',
                        eng:'Windsor Castle is a stronghold and residence of British monarchs. towering on a hill in the Thames Valley is no coincidence. It was built in 1070, and today it is considered the most romantic building in the country. Moreover, due to the size of 580 m. By 165 m., Windsor Castle got into the Guinness Book of Records as the largest castle in the world.',
                        gr:'Windsor Castle ist eine Festung und Residenz britischer Monarchen. Es ist kein Zufall, auf einem Hügel im Thames Valley aufzustehen. Es wurde 1070 erbaut und gilt heute als das romantischste Gebäude des Landes. Aufgrund der Größe von 580 m wurde Windsor Castle um 165 m als größtes Schloss der Welt in das Guinness-Buch der Rekorde aufgenommen.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/7-Eden-Project-e1517626723392.jpg',
                    name:{
                        ru:'Проект Эдем',
                        eng:'Project Eden',
                        gr:'Projekt Eden',
                    },
                    desc:{
                        ru:'Рекомендации местных любителей флоры и фауны непременно приведут вас в этот ботанический сад. Он находится в графстве Корнуолл, и особо известен своей уникальной оранжереей (геодезические купола собрали под собой растения со всех уголков Земли)',
                        eng:'Recommendations from local flora and fauna lovers will certainly lead you to this botanical garden. It is located in Cornwall, and is especially famous for its unique greenhouse (geodesic domes have collected plants from all over the world)',
                        gr:'Die Empfehlungen der örtlichen Flora und Fauna werden Sie sicherlich in diesen botanischen Garten führen. Es befindet sich in Cornwall und ist besonders berühmt für sein einzigartiges Gewächshaus (geodätische Kuppeln haben Pflanzen aus der ganzen Welt gesammelt).'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/2-Big-Ben-e1517625239863.jpg',
                    name:{
                        ru:'Лондонский Биг-Бен',
                        eng:'London Big Ben',
                        gr:'London Big Ben',
                    },
                    desc: {
                        ru:'Планируя путешествие и изучая главные достопримечательности Англии, не забывайте о часовой башне Вестминстерского дворца, созданной более 150 лет назад. Памятные часы провозглашают о самых важных событиях государства: наступлении Нового года, Минутах Молчания и т.д. До недавнего времени именно у Биг-Бена был самый громадный циферблат на Земле – ни одно фото или описание не способны передать всего величия главного символа Лондона;',
                        eng:'When planning your trip and exploring the main attractions of England, do not forget about the clock tower of Westminster Palace, created more than 150 years ago. The commemorative clock proclaims the most important events of the state: the coming of the New Year, the Minutes of Silence, etc. Until recently, it was Big Ben that had the largest dial on Earth - not a single photo or description can convey all the greatness of the main symbol of London;',
                        gr:'Vergessen Sie bei der Planung Ihrer Reise und der Erkundung der Hauptattraktionen Englands nicht den Glockenturm des Westminster Palace, der vor mehr als 150 Jahren errichtet wurde. Die Gedenkuhr verkündet die wichtigsten Ereignisse des Staates: das Kommen des neuen Jahres, das Protokoll der Stille usw. Bis vor kurzem war es Big Ben, der das größte Zifferblatt der Welt hatte - kein einziges Foto oder eine einzige Beschreibung kann die ganze Größe des Hauptsymbols von London vermitteln.'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/13-Buckingham-Palace-e1517628547800.jpg',
                    name:{
                        ru:'Букингемский дворец',
                        eng:'Buckingham Palace',
                        gr:'Buckingham Palace',
                    },
                    desc:{
                        ru:'Официальная резиденция Елизаветы Второй (английская королева) в Лондоне. Поклонники этой достопримечательности Англии сравнивают ее с маленьким городом. Тут есть собственный кинотеатр, дискотека, несколько спортклубов, бар, госпиталь, почтовые отделения и полиция. Три мили ковровых дорожек красного цвета и 600 комнат, в том числе парадных залов, ежедневно обслуживаются более чем 700 работниками.',
                        eng:'The official residence of Elizabeth II (Queen of England) in London. Fans of this landmark in England compare it to a small town. It has its own cinema, disco, several sports clubs, a bar, a hospital, post offices and police. Three miles of red carpet walkways and 600 rooms, including grand halls, are serviced daily by more than 700 workers.',
                        gr:'Die offizielle Residenz von Elizabeth II (Königin von England) in London. Fans dieses Wahrzeichens in England vergleichen es mit einer kleinen Stadt. Es hat ein eigenes Kino, eine Disco, mehrere Sportvereine, eine Bar, ein Krankenhaus, Postämter und eine Polizei. Drei Meilen Gehwege auf dem roten Teppich und 600 Zimmer, einschließlich großer Hallen, werden täglich von mehr als 700 Arbeitern gewartet.'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/24-Canterbury_Cathedral-e1564541446236.jpg',
                    name:{
                        ru:'Кентерберийский собор',
                        eng:'Canterbury cathedral',
                        gr:'Kathedrale von Canterbury',
                    },
                    desc:{
                        ru:' В числе первых мест стоит посетить Кентерберийский собор 603 года, расположенный в древнем городе Кентербери в юго-восточной части страны. К сожалению, первоначальный облик собора уже не сохранился — его уничтожил пожар в 12 веке, но в процессе восстановления было возведено великолепное готическое здание с пристроенной Троицкой капеллой, где хранятся мощи убитого архиепископа Томаса Бекета. Особую ценность собора представляют красочные витражи 12-13 веков с библейскими сюжетами, которые можно увидеть в западном окне.',
                        eng:'Among the first places worth visiting is 603 Canterbury Cathedral, located in the ancient city of Canterbury in the southeastern part of the country. Unfortunately, the original appearance of the cathedral has no longer survived - it was destroyed by a fire in the 12th century, but in the process of restoration a magnificent Gothic building was erected with an attached Trinity Chapel, where the relics of the assassinated Archbishop Thomas Becket are kept. The cathedral is especially valuable for its colorful stained-glass windows of the 12-13th centuries with biblical subjects, which can be seen in the western window.',
                        gr:'Zu den ersten Orten, die einen Besuch wert sind, gehört die 603 Canterbury Cathedral in der antiken Stadt Canterbury im Südosten des Landes. Leider ist das ursprüngliche Erscheinungsbild der Kathedrale nicht mehr erhalten - sie wurde im 12. Jahrhundert durch einen Brand zerstört. Bei der Restaurierung wurde jedoch ein prächtiges gotisches Gebäude mit einer angeschlossenen Dreifaltigkeitskapelle errichtet, in der die Reliquien des ermordeten Erzbischofs Thomas aufbewahrt wurden Becket werden behalten. Die Kathedrale ist besonders wertvoll für ihre farbenfrohen Glasfenster aus dem 12. bis 13. Jahrhundert mit biblischen Motiven, die im westlichen Fenster zu sehen sind.'
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/19-Tower-of-London-e1517630862623.jpg',
                    name:{
                        ru:'Тауэр',
                        eng:'The tower',
                        gr:'Der Turm',
                    },
                    desc:{
                        ru:'Тауэр – исторический центр столицы Англии и крепость на северном берегу Темзы. Длительный срок Тауэр был тюрьмой и хранилищем драгоценностей английских монархов, сегодня же это великолепный архитектурный памятник. Купите билет на вечернюю экскурсию, и, возможно, вы окажитесь в числе тех, кто увидит тут приведений.',
                        eng:'The Tower is the historic center of the capital of England and a fortress on the north bank of the Thames. For a long time, the Tower was a prison and a repository of jewels of the English monarchs, but today it is a magnificent architectural monument. Buy a ticket for an evening tour, and you may be among those who see ghosts here.',
                        gr:'Der Tower ist das historische Zentrum der Hauptstadt von England und eine Festung am Nordufer der Themse. Der Turm war lange Zeit ein Gefängnis und ein Aufbewahrungsort für die Schätze der englischen Monarchen, heute ist er ein prächtiges Baudenkmal. Wenn Sie ein Ticket für eine Abendtour kaufen, gehören Sie möglicherweise zu denen, die hier Geister sehen.'
                    },

                },

            ]
        },
        {
            id:5,
            ISO:'USD',
            imgCountry:'https://m.dw.com/image/52168825_401.jpg',
            nameCountry: {
                ru: 'США',
                eng:'USA',
                gr:'USA'
            },
            capital: {
                ru:'Вашингтон',
                eng:'Washington',
                gr: 'Washington',
            },
            descriptionAboutCountry: {
                ru:'Соединенные Штаты Америки – государство, состоящее из 50 штатов, занимает значительную часть Северной Америки. Штат Аляска расположен на северо-западе континента, а Гавайи – в Тихом океане.',
                eng:'The United States of America is a state of 50 states that occupies a significant part of North America. The state of Alaska is located in the northwest of the continent, while Hawaii is in the Pacific Ocean.',
                gr:'Die Vereinigten Staaten von Amerika sind ein Bundesstaat mit 50 Bundesstaaten, der einen bedeutenden Teil Nordamerikas einnimmt. Der Bundesstaat Alaska liegt im Nordwesten des Kontinents, während Hawaii im Pazifik liegt.',
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/USA-1-Statue-of-Liberty-e1490919539391.jpg',
                    name:{
                        ru:'Статуя Свободы',
                        eng:'The Statue of Liberty',
                        gr:'Freiheitsstatue',
                    },
                    desc:{
                        ru:'Величественная скульптура женщины с факелом в руке, протянутым в небеса, стала олицетворением свободы Америки. Корона на ее голове имеет семь лучей, что обозначает семь континентов и семь океанов (по западной географической традиции). В другой руке она держит плиту с выбитой на ней датой принятия Декларации о независимости.',
                        eng:'The majestic sculpture of a woman with a torch in her hand, outstretched to heaven, has become the personification of America\'s freedom. The crown on her head has seven rays, which means seven continents and seven oceans (in Western geographic tradition). In her other hand, she holds a plate with the date of the adoption of the Declaration of Independence engraved on it.',
                        gr:'Die majestätische Skulptur einer Frau mit einer Fackel in der Hand, die zum Himmel ausgestreckt ist, ist zur Personifikation der Freiheit Amerikas geworden. Die Krone auf ihrem Kopf hat sieben Strahlen, was sieben Kontinente und sieben Ozeane bedeutet (in westlicher geografischer Tradition). In der anderen Hand hält sie ein Schild mit dem Datum der Annahme der Unabhängigkeitserklärung.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/USA-4-the-White-House-e1490931067798.jpg',
                    name:{
                        ru:'Белый Дом',
                        eng:'The White house',
                        gr:'Weißes Haus',
                    },
                    desc:{
                        ru:'Белый Дом  является символом демократии Америки. Резиденция правителей страны названа в честь цвета самого здания. Это одна из главных достопримечательностей в США, и каждый год около полутора миллионов туристов съезжаются в столицу, чтобы увидеть величие и красоту всемирно известного здания.',
                        eng:'The White House is the symbol of America\'s democracy. The residence of the country\'s rulers is named after the color of the building itself. It is one of the main attractions in the United States, and every year about one and a half million tourists flock to the capital to see the grandeur and beauty of the world famous building.',
                        gr:'Das Weiße Haus ist das Symbol der amerikanischen Demokratie. Die Residenz der Herrscher des Landes ist nach der Farbe des Gebäudes selbst benannt. Es ist eine der Hauptattraktionen in den Vereinigten Staaten, und jedes Jahr strömen ungefähr eineinhalb Millionen Touristen in die Hauptstadt, um die Größe und Schönheit des weltberühmten Gebäudes zu sehen.'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/USA-8-Niagara-Falls-e1490931974777.jpg',
                    name:{
                        ru:'Ниагарский водопад',
                        eng:'Niagara Falls',
                        gr:'Niagarafälle',
                    },
                    desc: {
                        ru:'Водопад является одним из главных источников энергии для Нью-Йорка. Комплекс водопадов дважды замерзал – в середине XIX века и начале XX. Обязательно побывайте в этих местах, и воочию увидите всю эту мощь и красоту.',
                        eng:'The waterfall is one of the main sources of energy for New York. The complex of waterfalls froze twice - in the middle of the 19th century and the beginning of the 20th. Be sure to visit these places, and see with your own eyes all this power and beauty.',
                        gr:'Der Wasserfall ist eine der wichtigsten Energiequellen für New York. Der Komplex der Wasserfälle gefror zweimal - Mitte des 19. Jahrhunderts und Anfang des 20. Jahrhunderts. Besuchen Sie diese Orte und sehen Sie all diese Kraft und Schönheit mit eigenen Augen.'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/USA-9-Las-Vegas-e1490932161771.jpg',
                    name:{
                        ru:'Лас-Вегас',
                        eng:'Las Vegas',
                        gr:'Las Vegas',
                    },
                    desc:{
                        ru:'Лас-Вегас заслуженно считается крупнейшим центром игровой (азартной) индустрии. Город наполнен множеством казино и отелей. Нескончаемые концерты и световые шоу не дают заскучать туристам круглые сутки. Приезжая сюда, будьте готовы не спать с ночи до утра. Многие большие компании с мировыми брендами проводят здесь свои презентации и банкеты. Как только вы окажетесь в Лас-Вегасе, вопрос, что посмотреть в США, сразу же отпадет. Это город больших огней и денег, желаний и их исполнения.',
                        eng:'Las Vegas is deservedly considered the largest center of the gambling (gambling) industry. The city is filled with many casinos and hotels. Endless concerts and light shows do not let tourists get bored around the clock. Coming here, be prepared not to sleep from night to morning. Many large companies with global brands hold their presentations and banquets here. As soon as you find yourself in Las Vegas, the question of what to see in the USA will immediately disappear. It is a city of big lights and money, desires and their fulfillment.',
                        gr:'Las Vegas gilt zu Recht als das größte Zentrum der Glücksspielbranche. Die Stadt ist mit vielen Casinos und Hotels gefüllt. Endlose Konzerte und Lichtshows lassen Touristen nicht rund um die Uhr gelangweilt werden. Wenn Sie hierher kommen, sollten Sie darauf vorbereitet sein, nicht von Nacht bis Morgen zu schlafen. Viele große Unternehmen mit globalen Marken halten hier ihre Präsentationen und Bankette ab. Sobald Sie sich in Las Vegas befinden, wird die Frage, was Sie in den USA sehen können, sofort verschwinden. Es ist eine Stadt der großen Lichter und des Geldes, der Wünsche und ihrer Erfüllung.'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/USA-12-Hoover-Dam-e1490932813178.jpg',
                    name:{
                        ru:'Дамба Гувера',
                        eng:'Hoover Dam',
                        gr:'Hoover-Staudamm',
                    },
                    desc:{
                        ru:'Дамба является одной из самых больших гидроэлектростанций США. Высота бетонной конструкции составляет 221 метр. Плотина сооружена на нижней части реки Колорадо и располагается в каньоне недалеко от штата Невада. Названа в честь Герберта Гувера. Если вы еще не решили, что посетить в США, это знаменитую плотину обязательно включите в список достопримечательностей.',
                        eng:'The dam is one of the largest hydroelectric power plants in the United States. The height of the concrete structure is 221 meters. The dam was built on the lower part of the Colorado River and is located in a canyon near the state of Nevada. Named after Herbert Hoover. If you have not yet decided what to visit in the United States, be sure to include this famous dam in your list of attractions.',
                        gr:'Der Damm ist eines der größten Wasserkraftwerke in den Vereinigten Staaten. Die Höhe der Betonkonstruktion beträgt 221 Meter. Der Damm wurde im unteren Teil des Colorado River gebaut und befindet sich in einer Schlucht in der Nähe des Bundesstaates Nevada. Benannt nach Herbert Hoover. Wenn Sie sich noch nicht für einen Besuch in den USA entschieden haben, sollten Sie diesen berühmten Damm in Ihre Liste der Sehenswürdigkeiten aufnehmen.'
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/USA-14-the-Golden-Gate-Bridge-e1490933592556.jpg',
                    name:{
                        ru:'Мост «Золотые ворота»',
                        eng:'Bridge "Golden Gate"',
                        gr:'Brücke "Golden Gate"',
                    },
                    desc:{
                        ru:'Золотые ворота – из самых популярных и узнаваемых достопримечательностей в США. Этот мост вы определите с первого взгляда, даже если никогда прежде здесь не бывали. Поэтому на вопрос, что посмотреть в США, можно смело предложить отправиться на знаменитый мост.',
                        eng:'The Golden Gate is one of the most popular and recognizable landmarks in the United States. You will identify this bridge at a glance, even if you have never been here before. Therefore, when asked what to see in the USA, you can safely suggest going to the famous bridge.',
                        gr:'Das Golden Gate ist eines der beliebtesten und bekanntesten Wahrzeichen in den Vereinigten Staaten. Sie werden diese Brücke auf einen Blick erkennen, auch wenn Sie noch nie hier waren. Wenn Sie gefragt werden, was Sie in den USA sehen möchten, können Sie daher sicher vorschlagen, zur berühmten Brücke zu gehen.'
                    },

                },

            ]
        },
        {
            id:6,
            ISO:'EUR',
            imgCountry:'https://img3.goodfon.ru/original/1440x900/9/ac/deutschland-germany-germaniya-4383.jpg',
            nameCountry: {
                ru: 'Германия',
                eng:'Germany',
                gr:'Deutschland'
            },
            capital: {
                ru:'Берлин',
                eng:'Berlin',
                gr: 'Berlin',
            },
            descriptionAboutCountry: {
                ru:'Германия – государство в Западной Европе с лесами, реками, горными хребтами и пляжными курортами Северного моря. История страны охватывает период в более чем две тысячи лет. В столице, Берлине, кипит культурная и ночная жизнь. Многие достопримечательности города, в частности Бранденбургские ворота, напоминают о событиях Второй мировой войны.',
                eng:'Germany is a state in Western Europe with forests, rivers, mountain ranges and beach resorts in the North Sea. The history of the country covers a period of more than two thousand years. The capital, Berlin, is full of cultural and nightlife. Many sights of the city, in particular the Brandenburg Gate, remind of the events of the Second World War.',
                gr:'Deutschland ist ein Staat in Westeuropa mit Wäldern, Flüssen, Gebirgszügen und Badeorten in der Nordsee. Die Geschichte des Landes erstreckt sich über einen Zeitraum von mehr als zweitausend Jahren. Die Hauptstadt Berlin ist voller Kultur und Nachtleben. Viele Sehenswürdigkeiten der Stadt, insbesondere das Brandenburger Tor, erinnern an die Ereignisse des Zweiten Weltkriegs.',
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-1-Cologne-Cathedral-e1492727734625.jpg',
                    name:{
                        ru:'Кёльнский собор',
                        eng:'Cologne Cathedral',
                        gr:'Kölner Dom',
                    },
                    desc:{
                        ru:'Один только внешний вид этого собора вызывает неподдельное восхищение. Архитектура величественного сооружения будто бы соткана из кружева каменных башен, колонн и пилястр, объединенных в единой архитектурной композиции. А общая форма здания, если смотреть сверху, выполнена в форме латинского креста.',
                        eng:'The mere appearance of this cathedral causes genuine admiration. The architecture of the majestic structure seems to be woven from the lace of stone towers, columns and pilasters, united in a single architectural composition. And the general shape of the building, when viewed from above, is made in the form of a Latin cross.',
                        gr:'Das bloße Erscheinen dieser Kathedrale sorgt für echte Bewunderung. Die Architektur der majestätischen Struktur scheint aus der Spitze von Steintürmen, Säulen und Pilastern gewebt zu sein, die in einer einzigen architektonischen Komposition vereint sind. Und die allgemeine Form des Gebäudes ist von oben gesehen in Form eines lateinischen Kreuzes.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-3-The-Brandenburg-Gate-e1492728193602.jpg',
                    name:{
                        ru:'Бранденбургские ворота',
                        eng:'Brandenburg Gate',
                        gr:'Brandenburger Tor',
                    },
                    desc:{
                        ru:'Брандербургские ворота - это поистине легендарное сооружение, впечатляющее своими размерами, архитектурой и символизирующее важнейшие вехи истории страны.',
                        eng:'The Brandenburg Gate is a truly legendary building, impressive in its size, architecture and symbolizing the most important milestones in the history of the country.',
                        gr:'Das Brandenburger Tor ist ein wahrhaft legendäres Bauwerk, das in Größe, Architektur und Symbol der wichtigsten Meilensteine ​​der Landesgeschichte beeindruckt.'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-5-Museum-Island-of-Berlin-e1492728590515.jpg',
                    name:{
                        ru:'Музейный остров Берлина',
                        eng:'Berlin Museum Island',
                        gr:'Berliner Museumsinsel',
                    },
                    desc: {
                        ru:'Для того, чтобы выбрать, что посмотреть в Германии, далеко ездить не придётся — прямо посреди европейской столицы, на небольшом острове Шпрееинзель, расположился один из самых ярких и впечатляющих объектов культурного наследия страны — так называемый музейный остров, который представляет собой целый музейный комплекс, включающий пять музеев, основанных в разное время.',
                        eng:'In order to choose what to see in Germany, you don\'t have to travel far - right in the middle of the European capital, on the small island of Spreeinsel, there is one of the most striking and impressive objects of the country\'s cultural heritage - the so-called museum island, which is a whole museum complex. including five museums founded at different times.',
                        gr:'Um zu entscheiden, was Sie in Deutschland sehen möchten, müssen Sie nicht weit reisen - mitten in der europäischen Hauptstadt, auf der kleinen Insel Spreeinsel, befindet sich eines der auffälligsten und beeindruckendsten Objekte des kulturellen Erbes des Landes - die sogenannte Museumsinsel, ein ganzer Museumskomplex mit fünf zu unterschiedlichen Zeiten gegründeten Museen.'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Berliner_Mauer_Bernauer_Stra--e_Berlin-Mitte-e1506919063394.jpg',
                    name:{
                        ru:'Берлинская стена',
                        eng:'Berlin Wall',
                        gr:'Berliner Mauer',
                    },
                    desc:{
                        ru:'Каждый октябрь в Германии отмечается День немецкого единства, состоящий в воссоединении западной и восточной частей государства. В сознании жителей символом воссоединения стало прекращение существования так называемой Берлинской стены, некогда разделившей не только город, но и государство, и весь народ, и ставшей символом «холодной войны»',
                        eng:'Every October, Germany celebrates the Day of German Unity, which consists in the reunification of the western and eastern parts of the state. In the minds of residents, the symbol of reunification was the end of the so-called Berlin Wall, which once divided not only the city, but also the state, and the entire people, and became a symbol of the Cold War.',
                        gr:'Deutschland feiert jedes Jahr im Oktober den Tag der deutschen Einheit, der in der Wiedervereinigung der westlichen und östlichen Teile des Staates besteht. In den Köpfen der Bewohner war das Symbol der Wiedervereinigung die Beendigung der Existenz der sogenannten Berliner Mauer, die einst nicht nur die Stadt, sondern auch den Staat und das gesamte Volk teilte und zum Symbol des Kalten Krieges wurde .'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-7-The-Zugspitze-e1492729475797.jpg',
                    name:{
                        ru:'Цугшпитце (немецкие Альпы, граница Германии и Австрии)',
                        eng:'Zugspitze (German Alps, border of Germany and Austria)',
                        gr:'Zugspitze (Deutsche Alpen, Grenze zwischen Deutschland und Österreich)',
                    },
                    desc:{
                        ru:'В Баварских Альпах,на стыке границ Германии и Австрии, расположилась интересная достопримечательность Германии и уникальное место. Интересно это место тем, что с него открывается вид сразу на территории четырёх ближайших государства — Германии, Австрии, Швейцарии и Италии. Это пик Цугшпитце, высота которого составляет 2,962 км. Покорение этой вершины туристам сегодня не представит труда, ведь к ней проложены железнодорожные пути от города Гармиш-Партенкирхен, а для любителей экстрима есть и канатная дорога — правда, начинается она со стороны Австрии.',
                        eng:'An interesting sight of Germany and a unique place is located in the Bavarian Alps, at the junction of the borders of Germany and Austria. This place is interesting because it offers a view immediately on the territory of the four nearest states - Germany, Austria, Switzerland and Italy. This is the Zugspitze peak, which is 2.962 km high. The conquest of this peak will not be difficult for tourists today, because railway tracks from the city of Garmisch-Partenkirchen are laid to it, and for fans of extreme sports there is also a cable car - however, it starts from Austria.',
                        gr:'Ein interessanter Anblick Deutschlands und ein einzigartiger Ort befindet sich in den bayerischen Alpen, an der Kreuzung der Grenzen zwischen Deutschland und Österreich. Dieser Ort ist insofern interessant, als er einen sofortigen Blick auf das Gebiet der vier nächstgelegenen Staaten bietet - Deutschland, Österreich, Schweiz und Italien. Dies ist die Zugspitze, die 2.962 km hoch ist. Die Eroberung dieses Gipfels wird für Touristen heute nicht schwierig sein, da Bahngleise aus der Stadt Garmisch-Partenkirchen verlegt sind und für Fans von Extremsportarten auch eine Seilbahn vorhanden ist - sie startet jedoch ab Österreich.'
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-9-The-Reichstag-building-e1492730054282.jpg',
                    name:{
                        ru:'Рейхстаг',
                        eng:'Reichstag',
                        gr:'Reichstag',
                    },
                    desc:{
                        ru:'Эта достопримечательность Германии располагается в самом центре немецкой столицы, на Парижской площади. В 1884 году в фундамент здания был заложен первый камень, а строительство продолжалось на протяжении последующих 10 лет.Сегодня Рейхстаг стал одним из посещаемых мест в Германии — ежегодно сюда приезжают более 13 млн туристов со всего мира.',
                        eng:'This landmark of Germany is located in the very center of the German capital, on Paris Square. The foundation stone was laid in 1884, and construction continued over the next 10 years. Today, the Reichstag has become one of the most visited places in Germany - more than 13 million tourists from all over the world come here every year.',
                        gr:'Dieses Wahrzeichen Deutschlands befindet sich im Zentrum der deutschen Hauptstadt am Pariser Platz. Der Grundstein wurde 1884 gelegt und der Bau wurde in den nächsten 10 Jahren fortgesetzt. Heute ist der Reichstag zu einem der meistbesuchten Orte in Deutschland geworden - jedes Jahr kommen mehr als 13 Millionen Touristen aus aller Welt hierher.'
                    },

                },

                {
                    id:0,
                    imgCountry:'',
                    nameCountry: {
                        ru: '',
                        eng:'',
                        gr:''
                    },
                    capital: {
                        ru:'',
                        eng:'',
                        gr: '',
                    },
                    descriptionAboutCountry: {
                        ru:'',
                        eng:'',
                        gr:'',
                    },
                    gallery: [
                        {
                            id:0,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''

                            },

                        },
                        {
                            id:1,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:2,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc: {
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:3,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:4,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:5,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },

                    ]
                },
                /*{
                    id:0,
                    imgCountry:'',
                    nameCountry: {
                        ru: '',
                        eng:'',
                        gr:''
                    },
                    capital: {
                        ru:'',
                        eng:'',
                        gr: '',
                    },
                    descriptionAboutCountry: {
                        ru:'',
                        eng:'',
                        gr:'',
                    },
                    gallery: [
                        {
                            id:0,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''

                            },

                        },
                        {
                            id:1,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:2,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc: {
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:3,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:4,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },
                        {
                            id:5,
                            img:'',
                            name:{
                                ru:'',
                                eng:'',
                                gr:'',
                            },
                            desc:{
                                ru:'',
                                eng:'',
                                gr:''
                            },

                        },

                    ]
                }*/

            ]
        },
        {
            id:7,
            ISO:'ОКВ',
            imgCountry:'https://internationalwealth.info/wp-content/uploads/2019/11/austr-ofis.jpg',
            nameCountry: {
                ru: 'Австралия',
                eng:'Australia',
                gr:'Australien'
            },
            capital: {
                ru:'Канберра',
                eng:'Canberra',
                gr: 'Canberra',
            },
            descriptionAboutCountry: {
                ru:'Австралия – это страна, занимающая одноименный материк, который омывается Индийским и Тихим океанами. На побережьях континента находятся такие крупные города, как Сидней, Брисбен, Мельбурн, Перт и Аделаида.',
                eng:'Australia is a country that occupies the continent of the same name, which is washed by the Indian and Pacific Oceans. Large cities such as Sydney, Brisbane, Melbourne, Perth and Adelaide are located on the continent\'s coasts.',
                gr:'Australien ist ein Land, das den gleichnamigen Kontinent besetzt, der vom Indischen und Pazifischen Ozean gewaschen wird. Großstädte wie Sydney, Brisbane, Melbourne, Perth und Adelaide liegen an den Küsten des Kontinents.',
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Australia-3-The-Blue-Mountains-e1491974079389.jpg',
                    name:{
                        ru:'Голубые горы',
                        eng:'Blue Mountains',
                        gr:'Blaue Berge',
                    },
                    desc:{
                        ru:'Любители созерцать природные пейзажи, нетронутые цивилизацией, обязательно найдут, что посмотреть в Австралии, ведь на её территории расположилось уникальное чудо природы –  национальный парк «Голубые горы». Своё название эта местность обрела неспроста. Огромное количество эвкалиптовых лесов, произрастающих на горном массиве, непрестанно выделяет в воздух пары эфирного масла. Лучи солнца, преломляясь в миллиардах мельчайших капелек масла, образуют голубоватую дымку, создавая атмосферу таинственной сказочности.',
                        eng:'Lovers of contemplating natural landscapes, untouched by civilization, will definitely find what to see in Australia, because on its territory there is a unique natural wonder - the Blue Mountains National Park. This area acquired its name for a reason. A huge number of eucalyptus forests growing on the mountain range constantly emit essential oil vapors into the air. The sun\'s rays, refracting in billions of tiny droplets of oil, form a bluish haze, creating an atmosphere of mysterious fabulousness.',
                        gr:'Liebhaber der Betrachtung von Naturlandschaften, die von der Zivilisation unberührt bleiben, werden auf jeden Fall in Australien etwas zu sehen finden, denn auf seinem Territorium gibt es ein einzigartiges Naturwunder - den Blue Mountains National Park. Dieses Gebiet erhielt seinen Namen aus einem bestimmten Grund. Eine große Anzahl von Eukalyptuswäldern, die auf der Bergkette wachsen, geben ständig ätherische Öldämpfe in die Luft ab. Die Sonnenstrahlen, die in Milliarden winziger Öltröpfchen gebrochen sind, bilden einen bläulichen Dunst und erzeugen eine Atmosphäre mysteriöser Fabelhaftigkeit.'

                    },

                },
                {
                    id:1,
                    img:'https://cdn.miridei.com/files/img/c/idei-puteshestvii/australia-and-pacific-islands/1_Gippsland_lakes.jpg',
                    name:{
                        ru:'Озеро Гиппсленд',
                        eng:'Lake Gippsland',
                        gr:'Lake Gippsland',
                    },
                    desc:{
                        ru:'Австралия богата удивительными местами, приковывающими внимание туристов со всего света. В их числе — озеро Гиппсленд, которое иногда ещё называют «Огонь из преисподней».  В светлое время суток это озеро ничем не отличается от любого другого водоёма, но с наступлением темноты здесь начинают происходить настоящие чудеса. Из водных недр озера исходит завораживающее голубоватое свечение. Это явление имеет вполне реальное научное объяснение, и приобрело термин «биолюминесценция».',
                        eng:'Australia is rich in amazing places that attract the attention of tourists from all over the world. Among them - Lake Gippsland, which is sometimes also called "Fire from the underworld." In the daytime, this lake is no different from any other body of water, but with the onset of darkness, real miracles begin to happen here. A mesmerizing bluish glow emanates from the depths of the lake. This phenomenon has a very real scientific explanation, and has acquired the term "bioluminescence".',
                        gr:'Australien ist reich an erstaunlichen Orten, die die Aufmerksamkeit von Touristen aus der ganzen Welt auf sich ziehen. Unter ihnen - der Gippslandsee, der manchmal auch als "Feuer aus der Unterwelt" bezeichnet wird. Tagsüber unterscheidet sich dieser See nicht von anderen Gewässern, aber mit dem Einsetzen der Dunkelheit beginnen hier echte Wunder zu geschehen. Aus den Tiefen des Sees geht ein hypnotisierendes bläuliches Leuchten aus. Dieses Phänomen hat eine sehr reale wissenschaftliche Erklärung und hat den Begriff "Biolumineszenz" erhalten.'
                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/16-Queen_Victoria_House_Sydney-e1562477544831.jpg',
                    name:{
                        ru:' Дом Королевы Виктории',
                        eng:'Queen Victoria House',
                        gr:'Königin Victoria Haus',
                    },
                    desc: {
                        ru:'Изучая интересные места Сиднея, можно начать с самых символичных памятников — таких, как дом Королевы Виктории, возвышающийся посреди делового района города. Величественное здание появилось на свет в 1898 году в честь 60-летнего юбилея правления королевы, на месте бывшего городского рынка, который существовал здесь c начала 19 века. Сегодня это место представляет собой впечатляющий по размерам торговый центр, где размещаются различные модные бутики, кафетерии, ювелирные магазины и прочее. ',
                        eng:'When exploring Sydney\'s attractions, you can start with some of the most emblematic monuments, such as the Queen Victoria House, towering in the middle of the city\'s business district. The majestic building was born in 1898 in honor of the 60th anniversary of the reign of the Queen, on the site of the former city market, which has existed here since the beginning of the 19th century. Today, this place is an impressive shopping mall, which houses a variety of fashion boutiques, cafeterias, jewelry stores and more.',
                        gr:'Wenn Sie Sydneys Sehenswürdigkeiten erkunden, können Sie mit einigen der bedeutendsten Monumente beginnen, wie dem Queen Victoria House, das sich mitten im Geschäftsviertel der Stadt erhebt. Das majestätische Gebäude wurde 1898 zu Ehren des 60. Regierungsjubiläums an der Stelle des ehemaligen Stadtmarktes geboren, der hier seit Beginn des 19. Jahrhunderts besteht. Heute ist dieser Ort ein beeindruckendes Einkaufszentrum, in dem eine Vielzahl von Modeboutiquen, Cafeterias, Juweliergeschäften und vielem mehr untergebracht sind.'
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/17-Harbor_Bridge_Sydney-e1562478833919.jpg',
                    name:{
                        ru:'Мост Харбор Бридж',
                        eng:'Harbor Bridge',
                        gr:'Hafenbrücke',
                    },
                    desc:{
                        ru:'Мост Харбор-Бридж — крупнейший арочный мост в мире, возведённый из стали. Нередко местные его называют «вешалкой», по причине схожести конструкции с этим предметом. Торжественное открытие моста состоялось в 1932 году, хотя строительство было запланировано ещё в середине 19 века.',
                        eng:'The Harbor Bridge is the largest arched steel bridge in the world. Often the locals call it a "hanger", because of the similarity of the design with this item. The grand opening of the bridge took place in 1932, although construction was planned back in the middle of the 19th century.',
                        gr:'Die Harbour Bridge ist die größte gewölbte Stahlbrücke der Welt. Aufgrund der Ähnlichkeit des Designs mit diesem Artikel wird es von den Einheimischen oft als "Kleiderbügel" bezeichnet. Die feierliche Eröffnung der Brücke fand 1932 statt, obwohl der Bau bereits Mitte des 19. Jahrhunderts geplant war.'
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2019/01/19-St._Pauls_Cathedral_in_Melbourne.jpg',
                    name:{
                        ru:'Собор Святого Павла',
                        eng:'St Paul\'s Cathedral',
                        gr:'St. Pauls Kathedrale',
                    },
                    desc:{
                        ru:'Выбирая историко-культурные достопримечательности Австралии, не обойтись без одного из религиозных символов страны — Собора Святого Павла, расположенного в историческом районе Мельбурна. Это крупнейшая англиканская церковь в стиле неоготики, которая на момент возведения была самым высоким сооружением в Мельбурне. Одна из главных ценностей собора — крупнейший орган из Великобритании, созданный английским мастером Т.Льюисом и включающий более 6,5 тысяч трубок.',
                        eng:'Choosing the historical and cultural sights of Australia, you cannot do without one of the country\'s religious symbols - St. Paul\'s Cathedral, located in the historic district of Melbourne. This is the largest Anglican church in the neo-Gothic style, which at the time of construction was the tallest structure in Melbourne. One of the main values of the cathedral is the largest organ from Great Britain, created by the English master T. Lewis and including more than 6.5 thousand pipes.',
                        gr:'Wenn Sie sich für die historischen und kulturellen Sehenswürdigkeiten Australiens entscheiden, können Sie nicht auf eines der religiösen Symbole des Landes verzichten - die St. Paul\'s Cathedral im historischen Viertel von Melbourne. Dies ist die größte anglikanische Kirche im neugotischen Stil, die zum Zeitpunkt des Baus das höchste Bauwerk in Melbourne war. Einer der Hauptwerte der Kathedrale ist die größte Orgel Großbritanniens, die vom englischen Meister T. Lewis geschaffen wurde und mehr als 6,5 Tausend Pfeifen enthält.'
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Australia-6-Sydney-opera-house-e1491974775111.jpg',
                    name:{
                        ru:'Опера-хаус',
                        eng:'Opera House',
                        gr:'Opernhaus',
                    },
                    desc:{
                        ru:'Пейзаж Сиднея однозначно узнаётся среди тысяч других городов благодаря известной во всём мире достопримечательности — зданию оперного театра Опера-хаус, одному из самых знаменитых в мировой архитектуре. Это уникальное здание было спроектировано датским архитектором по имени Йорн Утзон. Спроектировав оригинальные по форме крыши театра, датчанин подарил Сиднею символ города, по которому теперь чуть ли не каждый житель планеты узнает этот город.',
                        eng:'The landscape of Sydney is unambiguously recognizable among thousands of other cities thanks to the world famous landmark - the building of the Opera House, one of the most famous in world architecture. This unique building was designed by a Danish architect named Jorn Utzon. Having designed the roofs of the theater, original in shape, the Dane presented Sydney with the symbol of the city, by which now almost every inhabitant of the planet will recognize this city.',
                        gr:'Die Landschaft von Sydney ist dank des weltberühmten Wahrzeichens - dem Gebäude des Opernhauses, eines der berühmtesten der Weltarchitektur - unter Tausenden anderer Städte eindeutig erkennbar. Dieses einzigartige Gebäude wurde von einem dänischen Architekten namens Jorn Utzon entworfen. Nachdem der Däne die Dächer des Theaters in seiner ursprünglichen Form entworfen hatte, präsentierte er Sydney das Symbol der Stadt, an dem nun fast jeder Einwohner des Planeten diese Stadt erkennen wird.'
                    },

                },

            ]
        },
        {
            id:8,
            ISO:'EUR',
            imgCountry:'data:image/jpeg;base64,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',
            nameCountry: {
                ru: 'Франция',
                eng:'France',
                gr:'Frankreich'
            },
            capital: {
                ru:'Париж',
                eng:'Paris',
                gr: 'Paris',
            },
            descriptionAboutCountry: {
                ru:'Фра́нция (фр. France) официальное название Францу́зская Респу́блика (фр. République française) – государство в Западной Европе, включающее в свой состав помимо материковой части ещё остров Корсика. Также в состав Франции входят: Гваделупа, Мартиника, Гвиана, Реюньон, Сен–Пьер и Микелон и о–ва Новая Каледония, Французская Полинезия и др. Общая площадь Франции составляет 551 000 кв. км, это самая крупная по территории страна в Западной Европе. ',
                eng:'France (fr. France) is the official name of the French Republic (fr. République française) - a state in Western Europe, which includes, in addition to the mainland, the island of Corsica. Also part of France includes: Guadeloupe, Martinique, Guiana, Reunion, Saint Pierre and Miquelon and the islands of New Caledonia, French Polynesia, etc. The total area of France is 551,000 square meters. km, it is the largest country in terms of territory in Western Europe.',
                gr:'Frankreich (fr. Frankreich) ist der offizielle Name der Französischen Republik (fr. République française) - eines Staates in Westeuropa, zu dem neben dem Festland auch die Insel Korsika gehört. Zu Frankreichs gehören auch: Guadeloupe, Martinique, Guayana, Reunion, Saint Pierre und Miquelon sowie die Inseln Neukaledonien, Französisch-Polynesien usw. Die Gesamtfläche Frankreichs beträgt 551.000 Quadratmeter. km ist es das territorial größte Land Westeuropas.'
            },
            gallery: [
                {
                    id:0,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-2-The-Louvre-e1492754751417.jpg',
                    name:{
                        ru:'Лувр',
                        eng:'Louvre',
                        gr:'Louvre',
                    },
                    desc:{
                        ru:'Бывшая крепость, некогда дворец, а теперь музей — все эти перевоплощения пережил на своём веку Лувр в Париже, ставший самым посещаемым музеем, куда ежегодно приезжают миллионы людей со всего мира. Самое далёкое прошлое и настоящее сплелись здесь в единое целое в сотнях тысяч экспонатов, из которых лишь 35 тысяч мы можем увидеть своими глазами. Всё дело в том, что для показа всех этих ценностей не хватит никаких экспозиционных площадей, при этом многим экспонатам требуются ещё и особые условия хранения.',
                        eng:'A former fortress, once a palace, and now a museum - the Louvre in Paris has experienced all these transformations in its lifetime, which has become the most visited museum, where millions of people from all over the world come every year. The most distant past and present are intertwined here into a single whole in hundreds of thousands of exhibits, of which only 35 thousand we can see with our own eyes. The point is that there will not be enough exposition areas to display all these values, while many exhibits also require special storage conditions.',
                        gr:'Eine ehemalige Festung, einst ein Palast und heute ein Museum - der Louvre in Paris hat all diese Veränderungen in seinem Leben erlebt und ist zum meistbesuchten Museum geworden, in das jedes Jahr Millionen von Menschen aus aller Welt kommen. Die am weitesten entfernte Vergangenheit und Gegenwart sind hier in Hunderttausenden von Exponaten zu einem Ganzen verflochten, von denen wir nur 35.000 mit eigenen Augen sehen können. Der Punkt ist, dass es nicht genügend Ausstellungsbereiche gibt, um alle diese Werte anzuzeigen, während viele Exponate auch spezielle Lagerbedingungen erfordern.',

                    },

                },
                {
                    id:1,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-3-The-Palace-of-Versailles-e1492754919622.jpg',
                    name:{
                        ru:'Версальский дворец ',
                        eng:'Palace of Versailles',
                        gr:'Schloss von Versailles',
                    },
                    desc:{
                        ru:'Здесь находится роскошный и сравнительно молодой дворцово-парковый комплекс, некогда служивший резиденцией французских королей, а сегодня ещё и ставший знаменитой достопримечательностью Франции.  Это Версальский дворец — выдающийся шедевр в истории мирового зодчества. Планировка парка Версальского дворца также являет собой высшее достижение в парковом искусстве Франции.',
                        eng:'Here is a luxurious and relatively young palace and park complex, which once served as the residence of the French kings, and today it has also become a famous landmark of France. This is the Palace of Versailles - an outstanding masterpiece in the history of world architecture. The layout of the park of the Palace of Versailles also represents the highest achievement in park art in France.',
                        gr:'Hier befindet sich ein luxuriöser und relativ junger Palast- und Parkkomplex, der einst als Residenz der französischen Könige diente und heute auch zu einem berühmten Wahrzeichen Frankreichs geworden ist. Dies ist das Schloss von Versailles - ein herausragendes Meisterwerk in der Geschichte der Weltarchitektur. Die Gestaltung des Schlosses von Versailles ist auch die höchste Errungenschaft in der Parkkunst in Frankreich.',                    },

                },
                {
                    id:2,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-4-French-Riviera-or-Coast-of-Azure-e1492755135661.jpg',
                    name:{
                        ru:'Лазурный берег или Французская Ривьера',
                        eng:'Cote d\'Azur or French Riviera',
                        gr:'Côte d\'Azur oder französische Riviera',
                    },
                    desc: {
                        ru:'Лазурный берег — это не просто излюбленная многими туристами достопримечательность Франции и место отличного отдыха, но и земля удивительных контрастов. Так, например, тёплые солнечные пляжи здесь контрастируют с заснеженными приморскими Альпами, расположенными всего в 2 часах езды от побережья. Эта курортная зона представляет собой и весьма шумное место, куда приезжают миллионы туристов, а в небольших деревушках, расположенных у самых скал, царит тишина и безмятежность.',
                        eng:'The Cote d\'Azur is not just a tourist attraction in France and a place of excellent rest, but also a land of amazing contrasts. For example, the warm sunny beaches here contrast with the snow-capped coastal Alps, located just 2 hours from the coast. This resort area is also a very noisy place where millions of tourists come, and in small villages located at the very rocks, silence and serenity reign.',
                        gr:'Die Côte d\'Azur ist nicht nur eine Touristenattraktion in Frankreich und ein Ort der hervorragenden Erholung, sondern auch ein Land der erstaunlichen Kontraste. Zum Beispiel kontrastieren die warmen, sonnigen Strände hier mit den schneebedeckten Küstenalpen, die nur 2 Stunden von der Küste entfernt liegen. Dieses Urlaubsgebiet ist auch ein sehr lauter Ort, an den Millionen von Touristen kommen, und in kleinen Dörfern, die an den Felsen liegen, herrschen Stille und Gelassenheit.',
                    },

                },
                {
                    id:3,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-6-Chamonix-Mont-Blanc-e1492755572637.jpg',
                    name:{
                        ru:'Шамони Монблан',
                        eng:'Chamonix Mont Blanc',
                        gr:'Chamonix Mont Blanc',
                    },
                    desc:{
                        ru:'Шамони Монблан — долина в Альпах, ставшая культовым местом для занятий горнолыжным спортом. Старейший лыжный курорт, история которого насчитывает уже более 200 лет, стал важнейшей достопримечательностью Франции для любителей горных лыж. Ведь здесь можно не только насладиться неповторимыми видами горной панорамы, но и отлично, в определённой степени даже экстремально, провести время.',
                        eng:'Chamonix Mont Blanc is a valley in the Alps that has become a cult destination for skiing. The oldest ski resort, with a history of over 200 years, has become the most important attraction in France for ski lovers. After all, here you can not only enjoy the unique views of the mountain panorama, but also have a great, to a certain extent even extreme, time.',
                        gr:'Chamonix Mont Blanc ist ein Tal in den Alpen, das zu einem Kultziel für Skifahrer geworden ist. Das älteste Skigebiet mit einer mehr als 200-jährigen Geschichte ist für Skiliebhaber zur wichtigsten Attraktion in Frankreich geworden. Schließlich können Sie hier nicht nur die einzigartige Aussicht auf das Bergpanorama genießen, sondern auch eine großartige, bis zu einem gewissen Grad sogar extreme Zeit verbringen.',
                    },

                },
                {
                    id:4,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-1-The-Eiffel-Tower-e1492754610997.jpg',
                    name:{
                        ru:'Эйфелева башня',
                        eng:'The Eiffel Tower',
                        gr:'Der Eiffelturm',
                    },
                    desc:{
                        ru:'Символом Парижа, как вы уже догадываетесь, стала главная достопримечательность Франции – Эйфелева башня — один из самых посещаемых и узнаваемых архитектурных объектов в мире.Это сейчас башня Эйфеля снискала мировую известность, а когда-то она вызывала неоднозначную реакцию среди парижан. В то время, как гости города восхищались монументальностью этого сооружения, многие жители, потрясённые размерами башни, были против её присутствия в городе и не раз требовали от властей разобрать это сооружение.',
                        eng:'The symbol of Paris, as you might guess, has become the main attraction of France - the Eiffel Tower - one of the most visited and recognizable architectural objects in the world.This is now the Eiffel tower gained world fame, and once it caused a mixed reaction among Parisians. While the guests of the city admired the monumentality of this structure, many residents, shocked by the size of the tower, were against its presence in the city and more than once demanded that the authorities dismantle this structure.',
                        gr:'Das Symbol von Paris ist, wie Sie sich vorstellen können, zur Hauptattraktion Frankreichs geworden - der Eiffelturm - eines der meistbesuchten und bekanntesten architektonischen Objekte der Welt gemischte Reaktion unter den Parisern. Während die Gäste der Stadt die Monumentalität dieses Bauwerks bewunderten, waren viele Einwohner, die von der Größe des Turms schockiert waren, gegen seine Präsenz in der Stadt und forderten mehr als einmal den Abbau dieses Bauwerks durch die Behörden.',
                    },

                },
                {
                    id:5,
                    img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-14-Champs-Elysees-e1492757432998.jpg',
                    name:{
                        ru:'Елисейские поля',
                        eng:'Elysian Fields',
                        gr:'elysische Felder',
                    },
                    desc:{
                        ru:'Улица Шанз-Элизе, известная всем как Елисейские поля, раскинулась в самом сердце Парижа на 1,9 километра в длину. Посещение этой достопримечательности Франции уже стало обязательным для гостей столицы, ведь никто и не поверит, что вы посетили Париж и не увидели своими глазами знаменитую улицу.',
                        eng:'Rue Champs-Elise, known to all as the Champs Elysees, stretches in the heart of Paris for 1.9 kilometers in length. A visit to this landmark of France has already become a must for guests of the capital, because no one will believe that you have visited Paris and did not see the famous street with your own eyes.',
                        gr:'Die Rue Champs-Elise, die allen als Champs Elysees bekannt ist, erstreckt sich über 1,9 Kilometer im Herzen von Paris. Ein Besuch dieses Wahrzeichens Frankreichs ist für Gäste der Hauptstadt bereits zu einem Muss geworden, denn niemand wird glauben, dass Sie Paris besucht und die berühmte Straße nicht mit eigenen Augen gesehen haben.',
                    },

                },

            ]
        },

    ]

}

const CountryPageReducer = (state = initialState, action) => {
    switch (action.type) {

        default: return state
    }
}

export default CountryPageReducer;