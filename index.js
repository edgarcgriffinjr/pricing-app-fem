const slider = document.getElementById('slider')

slider.oninput = () => {
    const pageViews = document.getElementById('pageviews')
    const price = document.getElementById('cost')
    const term = document.getElementById('term')
    var toggle = document.getElementById('toggle')

    if (toggle.checked == true) {
        term.textContent = '/year'

        if(Number(slider.value) > 0 && Number(slider.value) < 20 ) {
            pageViews.textContent = '10K'
            price.textContent = '$96 '
        } else if(Number(slider.value) > 20 && Number(slider.value) < 40) {
            pageViews.textContent = '50K'
            price.textContent = '$144 '
        } else if(Number(slider.value) > 40 && Number(slider.value) < 60) {
            pageViews.textContent = '100K'
            price.textContent = '$192 '
        } else if(Number(slider.value) > 60 && Number(slider.value) < 80) {
            pageViews.textContent = '500K'
            price.textContent = '$288 '
        } else if(Number(slider.value) > 80) {
            pageViews.textContent = '1M'
            price.textContent = '$432 '
        }
    } else {
        term.textContent = '/month'
        if(Number(slider.value) > 0 && Number(slider.value) < 20 ) {
            pageViews.textContent = '10K'
            price.textContent = '$8 '
        } else if(Number(slider.value) > 20 && Number(slider.value) < 40) {
            pageViews.textContent = '50K'
            price.textContent = '$12 '
        } else if(Number(slider.value) > 40 && Number(slider.value) < 60) {
            pageViews.textContent = '100K'
            price.textContent = '$16 '
        } else if(Number(slider.value) > 60 && Number(slider.value) < 80) {
            pageViews.textContent = '500K'
            price.textContent = '$24 '
        } else if(Number(slider.value) > 80) {
            pageViews.textContent = '1M'
            price.textContent = '$36 '
        }
    }


}

slider.addEventListener('mousemove', () => {
    var percent = slider.value
    var color = 'linear-gradient(90deg, hsl(174, 77%, 60%)' + percent + '%, hsl(224, 65%, 95%)' + percent + '%)'
    slider.style.background = color;
})

