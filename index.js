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
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.phone_name}</h5>
            <h6 class="card-title">${data.brand}</h6>
            <p class="card-text"> This content is a little bit longer.</p>
                <button onclick="showDetails()" class="btn btn-outline-secondary" type="button">Details</button>
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
}
