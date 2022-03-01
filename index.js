const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


    //const url = `https://openapi.programming-hero.com/api/phone/${id}`;

    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0, 20)));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        //console.log(data);

        // <button onclick="showDetails()" class="btn btn-outline-secondary" type="button">Details</button>
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <h6 class="card-title">${data.brand}</h6>
            <p class="card-text"> This content is a little bit longer.</p>
            <a href="${data.slug}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadPhoneDetails = mainFeatures => {
    //console.log(mainFeatures);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.jeson())
        .then(data => displayDetail(data.mainFeatures[0]));
}
const displayDetail = data => {
    console.log(data);
    const mainFeatures = document.getElementById('features-details');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.mainFeatures}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="${data.mainFeatures}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
}
