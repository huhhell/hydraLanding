window.addEventListener('DOMContentLoaded',() => {
    function carousel(elemClass, prevButtonClass, nextButtonClass) {

        let listOfElems = Array.from(document.querySelectorAll(`.${elemClass}`));
        let prevButton = document.querySelector(`.${prevButtonClass}`);
        let nextButton = document.querySelector(`.${nextButtonClass}`);

        function showItem(index) {
            listOfElems.forEach((item, idx) => {
                item.classList.remove(`${elemClass}-active`);
                if (idx === index) {
                    item.classList.add(`${elemClass}-active`);
                }
            })
        }


        prevButton.addEventListener('click', () => {
            let activeIndex = [...listOfElems].findIndex((i) => i.classList.contains(`${elemClass}-active`));
            showItem((activeIndex - 1 + listOfElems.length) % listOfElems.length)
        })

        nextButton.addEventListener('click', () => {
            let activeIndex = [...listOfElems].findIndex((i) => i.classList.contains(`${elemClass}-active`));
            showItem((activeIndex + 1) % listOfElems.length)
        })

    }

    carousel('contact__item', 'contact__prev', 'contact__next');
})