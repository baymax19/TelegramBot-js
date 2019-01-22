const a = require("axios")

const getCountries = (currencyCode) =>{
		return new Promise(function(resolve,reject){
			const countries = a.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
			if 	(countries){ resolve(countries);}
			else {reject("unable to get countries");}
		});
}


const getCountriesAsync = async (currencyCode) => {
	const countries = await a.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
	return countries;
};
getCountries("INR").then((data) => { return data.data.map((countries)=>countries["name"])}).then((country)=> console.log(country));

getCountriesAsync("cad").then((data)=>{return data.data.map((countries)=> countries["name"])}).then((data)=> console.log(data)).catch((e)=>console.log(e))
