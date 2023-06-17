

fetch('https://dummyjson.com/quotes')
  .then(response => response.json())
  .then(data => {
    const quoteList = document.getElementById('quoteList');
    const myInput = document.getElementById('myInput');
    const errMsg = document.getElementById('errMsg');


    displayQuotes(data);


    myInput.addEventListener('input', () => {
      const searchTerm = myInput.value.toLowerCase();
      const filteredQuotes = data.filter(quote => quote.text.toLowerCase().includes(searchTerm));
      displayQuotes(filteredQuotes);
    });

    function displayQuotes(quotes) {
      quoteList.innerHTML = '';
      if (quotes.length === 0) {

        errMsg.textContent = 'No quotes found.';
      } else {

        errMsg.textContent = '';


        quotes.forEach(quote => {
          const li = document.createElement('li');
          li.textContent = quote.text;
          quoteList.appendChild(li);
        });
      }
    }
  })
  .catch(error => {
    const errMsg = document.getElementById('errMsg');
    errMsg.textContent = 'Failed to fetch quote data.';
    console.error(error);
  });

