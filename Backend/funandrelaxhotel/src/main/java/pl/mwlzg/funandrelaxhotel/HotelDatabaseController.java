package pl.mwlzg.funandrelaxhotel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.mwlzg.funandrelaxhotel.repositories.*;
import pl.mwlzg.funandrelaxhotel.sqltables.*;

import java.sql.Date;
import java.util.List;

@RestController
public class HotelDatabaseController {

    @Autowired
    ClientRepository clientRepository;
    @Autowired
    GalleryRepository galleryRepository;
    @Autowired
    RoomRepository roomRepository;
    @Autowired
    FreeReservationRepository freeReservationRepository;
    @Autowired
    ContactFormRepository contactFormRepository;
    @Autowired
    ReservationRepository reservationRepository;

    @GetMapping("/client/{pesel}")
    public ClientExists checkIfExists(@PathVariable("pesel") String pesel){
        return clientRepository.getByPesel(pesel);
    }

    @PostMapping("/client")
    public HttpStatus addClient (@RequestBody Client client){
        return clientRepository.postClient(client);
    }

    @GetMapping("/room")
    public List<Room> getRoomById(){
        return roomRepository.getRoomById();
    }

    @GetMapping("/gallery")
    public GalleryImages getAllGalery(){
        return galleryRepository.getAllPaths();
    }

    @GetMapping("/reservation/arrival/{arrival_date}/departure/{departure_date}")
    public List<FreeReservation> getFreeReservations(@PathVariable("arrival_date")Date arrival_date,
                                    @PathVariable("departure_date")Date departure_date)
    {
        return freeReservationRepository.getFreeReservations(arrival_date,departure_date);
    }

    @PostMapping("/form")
    public HttpStatus postContactForm (@RequestBody ContactFormData contactFormData){
        return contactFormRepository.postContactForm(contactFormData);
    }

    @PostMapping("/reservation")
    public  HttpStatus postReservation(@RequestBody Reservation reservation){
        return reservationRepository.postReservation(reservation,
                freeReservationRepository.getFreeReservationIds(
                        reservation.getArrival_date(),
                        reservation.getDeparture_date(),
                        reservation.getKind()
                )
        );
    }
}
