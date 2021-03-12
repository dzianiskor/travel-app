function DeleteTooIndexInArr(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

const OneArrAddTwoArrInNewArr = (firstArr, secondArr) => {
    let arr = [];

    arr = firstArr.concat(secondArr)
    return arr
}

export const SearchFunction = (lang, countrysForCard, inputValue, isFetching) => {

    if (!!isFetching) {
        return
    }

    let first = countrysForCard.filter(el => (el.name.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
    let second = countrysForCard.filter(el => (el.capital.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
    return DeleteTooIndexInArr(OneArrAddTwoArrInNewArr(first, second))

/*
    switch (lang) {
/!*        case 'Русский': {
            let first = countrysForCard.filter(el => (el.name.ru.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
            let second = countrysForCard.filter(el => (el.capital.ru.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
            //return DeleteTooIndexInArr(OneArrAddTwoArrInNewArr(first, second))
            let arr = [];
            arr = first.concat(second)
            return DeleteTooIndexInArr(arr)


        }

        case 'English': {
            let first = countrysForCard.filter(el => (el.name.en.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
            let second = countrysForCard.filter(el => (el.capital.en.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
            DeleteTooIndexInArr(OneArrAddTwoArrInNewArr(first, second))

        }
        case 'Deutsche': {
            let first = countrysForCard.filter(el => (el.name.gr.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
            let second = countrysForCard.filter(el => (el.capital.gr.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0))
            return DeleteTooIndexInArr(OneArrAddTwoArrInNewArr(first, second))

        }
        *!/

    }
*/

}

export const MonthInData = (mo, lang, rus, eng, de) => {
    let newMo
    if (lang === 'Русский') {
         newMo = rus
    } else if (lang === 'English') {
         newMo = eng
    } else if (lang === 'Deutsche') {
          newMo = de
    }

    return newMo



}



