//fetch return API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=bf3aa022e712505b7ecedd9a80810f60',{
//pass method post request
method: 'POST',
//header passing in JSON
header: {
  'Constent-Type' : 'application/json'
},
//pass data in body as JSON to match the body
body: JSON.stringify()
})
//calling for reponse
.then(response => response.json())
//data show
.then(data => console.log(data));
