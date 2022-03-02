const phoneSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    if (searchText == '') {
        //give error warning
        alert('error')
    }
    else {
        // showing Phone
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(showPhone => displayPhone(showPhone.data))

        displayDetail().textContent = '';
    }
}

// display Phone
const displayPhone = data => {
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';
    if (data.length == 0) {
        const noFound = document.getElementById('error-message');
        noFound.innerHTML = `
    <h5>noo result found</h5>
    `;
        searchResult.appendChild(noFound);
    }
    else {
        data.slice(-20).forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="shadow p-3 bg-body rounded">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.brand}</p>
                </div>
                <a href="#" onclick='loadPhoneDetail("${phone.slug}")' class="btn btn-primary">Show Details</a>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

// load Phone Detail
const loadPhoneDetail = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(load => displayDetail(load.data));
}

// display Phone Details
const displayDetail = phoneContent => {

    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="border-none shadow p-3 bg-body rounded">
        <img src="${phoneContent.image}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${phoneContent.name}</h5>
            <p class="card-text">Release Date: ${phoneContent.releaseDate ? phoneContent.releaseDate : 'Not found'}</p>
            <p class="card-text">Brand: ${phoneContent.brand}</p>
            <p class="card-text">Storage: ${phoneContent.mainFeatures.storage}</p>
            <p class="card-text">Display Size: ${phoneContent.mainFeatures.displaySize}</p>
            <p class="card-text">Chipset: ${phoneContent.mainFeatures.chipSet}</p>
            <p class="card-text">Memory: ${phoneContent.mainFeatures.memory}</p>
            <p class="card-text">Sensors: ${phoneContent.mainFeatures.sensors}</p>
          <div>
          <p class="card-text">Others: </p>
          <p class="card-text">wlan : ${phoneContent.others ? phoneContent.others.WLAN : 'Not Found'} </p>
          <p class="card-text">bluetooth : ${phoneContent.others ? phoneContent.others.Bluetooth : 'Not Found'} </p>
          <p class="card-text">gps : ${phoneContent.others ? phoneContent.others.GPS : 'Not Found'} </p>
          <p class="card-text">nfc : ${phoneContent.others ? phoneContent.others.NFC : 'Not Found'} </p>
          <p class="card-text">usb : ${phoneContent.others ? phoneContent.others.USB : 'Not Found'} </p>
          </div>
        </div>
    <div>
    `;
    phoneDetails.appendChild(div);
}