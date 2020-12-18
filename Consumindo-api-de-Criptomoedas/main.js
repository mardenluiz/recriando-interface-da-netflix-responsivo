// My api key
var apikey = {
    key: 'e72fb672-c7ad-4f39-b62f-8f02101a0b34'
}
//GET fetch Requisition
fetch('http://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ', response.status);
        return response.json();
    })
        .then((api) => {
                
            var texto = "";
            // Get 10 coins and symbols 
            for(let i = 0; i < 10; i++){

            //Show API information

               texto = texto + `
              
                <div class="media">
                    <img src="img/bitcoin.png" class="align-self-center mr-3" alt="coin" width="7%" height="7%">
                    <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                    </div>
                </div>
           
                `;

                document.getElementById("coins").innerHTML = texto;

                console.log(api);
                
            }
        })
        .catch((error) => {
            console.error(error.message);
        });
    