let papa = document.querySelector('.ota')

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=a5c835515a3642aa8d9f3739209212ce';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f19516e44msh290fdeacb0c0f5cp187332jsnd9ea8454424b',
        'X-RapidAPI-Host': 'comparable-companies.p.rapidapi.com'
    }
};

async function getData(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        let newss =
            result.articles.forEach(element => {
                let inbox = document.createElement('div')
                inbox.classList.add('add_clas')
                inbox.innerHTML = `
        <img class="img_clas" src="${element.urlToImage}">
        <div class="yonbosh">
        <p>${element.author}</p>
        <p>${element.title}</p>
        </div>
        `
                papa.appendChild(inbox)
            });
    } catch (error) {
        console.error(error);
    }
}
getData(url)