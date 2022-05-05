package pl.mwlzg.funandrelaxhotel.repositories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.Client;
import pl.mwlzg.funandrelaxhotel.sqltables.ClientExists;


@Repository
public class ClientRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public ClientExists getByPesel (String pesel){
        return jdbcTemplate.queryForObject("SELECT count(*) as ifClientExists FROM client WHERE " + "PESEL = ?", //checking if exists
                BeanPropertyRowMapper.newInstance(ClientExists.class)
                , pesel);
    }

    public HttpStatus postClient (Client client){
        String query="INSERT INTO `client` VALUES (?,?,?,";
        if (client.getEmail()!=null){
            query=query+"?,?)";
            jdbcTemplate.update(query,client.getPesel(),
                    client.getName(),client.getSurname(),
                    client.getEmail(),client.getPhone_number()
                    );
            return HttpStatus.OK;
        }
        query=query+"?)";
        jdbcTemplate.update(query,client.getPesel(),client.getName(),client.getSurname(),client.getPhone_number());
        return HttpStatus.OK;
    }
}
