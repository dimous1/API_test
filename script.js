async function requestData() {

    try {

        const Rq = await fetch('https://raw.githubusercontent.com/dwyl/quotes/main/quotes.json')
        const quoteContainer = document.getElementById('quoteContainer');

        if (!Rq.ok) {
            throw new Error('test')
        }

        const data = await Rq.json();

        data.forEach((quote, index) => {
            setTimeout(() => {
                const quoteDiv = document.createElement('div');
                quoteDiv.className = 'quote';
                quoteDiv.innerHTML = `
                    <p>${index + 1}: "${quote.text}"</p>
                    <p class="author">— ${quote.author}</p>
                `;
                quoteContainer.appendChild(quoteDiv);
            }, index * 5000); // (5k milisekund)
        });



        console.log(data)

    } catch (error) {
        ocument.getElementById('quoteContainer').innerText = 'Error';
        console.error('Error')

    }


}

requestData();