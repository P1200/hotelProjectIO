package pl.mwlzg.funandrelaxhotel;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.mwlzg.funandrelaxhotel.sqltables.Client;
import pl.mwlzg.funandrelaxhotel.sqltables.ClientExists;

@RestController
public class HotelDatabaseController {

    @Autowired
    DatabaseRepository databaseRepository;

    @GetMapping("/client/{pesel}")
    public ClientExists checkIfExists(@PathVariable("pesel") String pesel){
        return databaseRepository.getByPesel(pesel);
    }

    @PostMapping("/client")
    public HttpStatus addClient (@RequestBody Client client){
        return databaseRepository.postClient(client);
    }
}
