import axios from "axios";


export async function getGallery() 
{
	let tmpResponse;
	await axios.get('http://localhost:8080/gallery')
	.then(function (response) {
		tmpResponse=response.data;
		return(tmpResponse);
	})
	return tmpResponse;
}
export async function getRooms() 
{
	let tmpResponse;
	await axios.get('http://localhost:8080/room')
	.then(function (response) {
		tmpResponse=response.data;
		return(tmpResponse);
	})
	return tmpResponse;
}
export async function doesClientExistInDB(perdonalId) 
{
	let tmpPerdonalId;
	await axios.get(`http://localhost:8080/client/${perdonalId}`)
	.then(function (response) {
		tmpPerdonalId=response.data.ifClientExists;
		return(tmpPerdonalId);
	})
	return tmpPerdonalId;
}
export async function getAvaliabeRooms(date1, date2) 
{
	let tmpNotAvaliabeRooms;
	await axios.get(`http://localhost:8080/reservation/arrival/${date1}/departure/${date2}`)
	.then(function (response) {
		tmpNotAvaliabeRooms=response.data;
		return(tmpNotAvaliabeRooms);
	})
	return tmpNotAvaliabeRooms;
}