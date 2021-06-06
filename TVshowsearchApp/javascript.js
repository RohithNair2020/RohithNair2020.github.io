const form = document.querySelector('#searchform');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchterm = form.elements.query.value;
    const config = { params: { q:searchterm} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config);
    imagelist(res.data);
    form.elements.query.value = '';
})

const imagelist = (shows) => {
    for (let result of shows) {
        if(result.show.image){
            const resimg = document.createElement('img');
            resimg.src = result.show.image.medium;
            document.body.append(resimg);
        }
    }
}



