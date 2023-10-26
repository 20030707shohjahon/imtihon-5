let papasha = document.querySelector('.api__parend');
let p2 = document.querySelector('.page_2')
let p3 = document.querySelector('.page_3')
let p1 = document.querySelector('.page_1')
let p4 = document.querySelector('.page_4')
let p5 = document.querySelector('.page_5')
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
        let newss = result.articles.slice(0, 20)
        let newss2 = result.articles.slice(20, 40)
        let newss3 = result.articles.slice(40, 60)
        let newss4 = result.articles.slice(60, 80)
        let newss5 = result.articles.slice(80, 100)

        newss.forEach(element => {
            let inbox = document.createElement('div')
            inbox.classList.add('bisnes__class__onbox')
            inbox.innerHTML = `
        <img class="bisnes__class"  src="${element.urlToImage}">
            <div class="bisnes__class__inbox">
            <p class="bisnes__class__inbox__title_one">${element.author}</p>
            <p class="bisnes__class__inbox__title_two">${element.title}</p>
            <p class="bisnes__class__inbox__title_tre">${element.publishedAt.slice(0,10)}</p>
            </div>
        `
            papasha.appendChild(inbox)
        });
        p1.addEventListener('click', () => {
            papasha.textContent = ''
            newss.forEach(element => {

                let inbox = document.createElement('div')
                inbox.classList.add('bisnes__class__onbox')
                inbox.innerHTML = `
                <img class="bisnes__class"  src="${element.urlToImage}">
                <div class="bisnes__class__inbox">
                <p class="bisnes__class__inbox__title_one">${element.author}</p>
                <p class="bisnes__class__inbox__title_two">${element.title}</p>
                <p class="bisnes__class__inbox__title_tre">${element.publishedAt.slice(0,10)}</p>
                </div>
        
            `
                papasha.appendChild(inbox)
            })
        })
        p2.addEventListener('click', () => {
            papasha.textContent = ''
            newss2.forEach(element => {

                let inbox = document.createElement('div')
                inbox.classList.add('bisnes__class__onbox')
                inbox.innerHTML = `
                <img class="bisnes__class"  src="${element.urlToImage}">
                <div class="bisnes__class__inbox">
                <p class="bisnes__class__inbox__title_one">${element.author}</p>
                <p class="bisnes__class__inbox__title_two">${element.title}</p>
                <p class="bisnes__class__inbox__title_tre">${element.publishedAt.slice(0,10)}</p>
                </div>
        
            `
                papasha.appendChild(inbox)
            })
        })
        p3.addEventListener('click', () => {
            papasha.textContent = ''
            newss3.forEach(element => {

                let inbox = document.createElement('div')
                inbox.classList.add('bisnes__class__onbox')
                inbox.innerHTML = `
                <img class="bisnes__class"  src="${element.urlToImage}">
                <div class="bisnes__class__inbox">
                <p class="bisnes__class__inbox__title_one">${element.author}</p>
                <p class="bisnes__class__inbox__title_two">${element.title}</p>
                <p class="bisnes__class__inbox__title_tre">${element.publishedAt.slice(0,10)}</p>
                </div>
        
            `
                papasha.appendChild(inbox)
            })
        })
        p4.addEventListener('click', () => {
            papasha.textContent = ''
            newss4.forEach(element => {

                let inbox = document.createElement('div')
                inbox.classList.add('bisnes__class__onbox')
                inbox.innerHTML = `
                <img class="bisnes__class"  src="${element.urlToImage}">
                <div class="bisnes__class__inbox">
                <p class="bisnes__class__inbox__title_one">${element.author}</p>
                <p class="bisnes__class__inbox__title_two">${element.title}</p>
                <p class="bisnes__class__inbox__title_tre">${element.publishedAt.slice(0,10)}</p>
                </div>
        
            `
                papasha.appendChild(inbox)
            })
        })
        p5.addEventListener('click', () => {
            papasha.textContent = ''
            newss5.forEach(element => {

                let inbox = document.createElement('div')
                inbox.classList.add('bisnes__class__onbox')
                inbox.innerHTML = `
                <img class="bisnes__class"  src="${element.urlToImage}">
                <div class="bisnes__class__inbox">
                <p class="bisnes__class__inbox__title_one">${element.author}</p>
                <p class="bisnes__class__inbox__title_two">${element.title}</p>
                <p class="bisnes__class__inbox__title_tre">${element.publishedAt.slice(0,10)}</p>
                </div>
        
            `
                papasha.appendChild(inbox)
            })
        })

    } catch (error) {
        console.error(error);
    }
}
getData(url)