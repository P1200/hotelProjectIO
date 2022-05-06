package pl.mwlzg.funandrelaxhotel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.mwlzg.funandrelaxhotel.repositories.ClientRepository;
import pl.mwlzg.funandrelaxhotel.repositories.FreeReservationRepository;
import pl.mwlzg.funandrelaxhotel.repositories.GalleryRepository;
import pl.mwlzg.funandrelaxhotel.repositories.RoomRepository;
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

    @GetMapping("/client/{pesel}")
    public ClientExists checkIfExists(@PathVariable("pesel") String pesel){
        return clientRepository.getByPesel(pesel);
    }

    @PostMapping("/client")
    public HttpStatus addClient (@RequestBody Client client){
        return clientRepository.postClient(client);
    }

    @GetMapping("/room/{room_id}")
    public Room getRoomById(@PathVariable("room_id") int room_id){
        return roomRepository.getRoomById(room_id);
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
}
