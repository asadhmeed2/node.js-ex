const axios = require("axios");
const request = require("request");
const got = require("got")

const URL = "https://geek-jokes.sameerkumar.website/api?format=json";
const getData = async () => {
  const response = await axios.get(URL);
  return response.data;
};
// getData();

const getDataRequest = () => {
  request(URL, (error, response, body) => {
    if (error) console.log(error);
    console.log(response.statusCode);
    console.log(body);
  });
};
// getDataRequest();

const getDataGot =async()=>{
    try {
		const response = await got('https://geek-jokes.sameerkumar.website/api?format=json');
		console.log(response.body);
	} catch (error) {
		console.log(error.response.body);
	}

}
// getDataGot();