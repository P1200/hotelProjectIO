import axios from "axios";

export async function postVisit(visit) 
{
    axios.post('http://localhost:8080/reservation', {
    "arrival_date": visit.arrival_date,
    "departure_date": visit.departure_date,
    "kind": visit.kind,
    "room_count": visit.room_count,
    "paid": visit.paid,
    "pesel": visit.pesel
    }
    )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
export async function postClient(client) 
{
  console.log(client)
    axios.post('http://localhost:8080/client', {
      "pesel": client.idn,
      "name": client.name,
      "surname": client.surname,
      "email": client.email,
      "phone_number": client.phone_number
    }
    )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}