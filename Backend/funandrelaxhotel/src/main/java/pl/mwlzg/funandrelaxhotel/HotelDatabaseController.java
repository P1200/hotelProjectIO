package pl.mwlzg.funandrelaxhotel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.mwlzg.funandrelaxhotel.sqltables.Client;
import pl.mwlzg.funandrelaxhotel.sqltables.ClientExists;
import pl.mwlzg.funandrelaxhotel.sqltables.GalleryImages;

@RestController
public class HotelDatabaseController {

    @Autowired
    ClientRepository clientRepository;
    @Autowired
    GalleryRepository galleryRepository;

    @GetMapping("/client/{pesel}")
    public ClientExists checkIfExists(@PathVariable("pesel") String pesel){
        return clientRepository.getByPesel(pesel);
    }

    @PostMapping("/client")
    public HttpStatus addClient (@RequestBody Client client){
        return clientRepository.postClient(client);
    }

    @GetMapping("/gallery")
    public GalleryImages getAllGalery(){
        return galleryRepository.getAllPaths();
    }
}
