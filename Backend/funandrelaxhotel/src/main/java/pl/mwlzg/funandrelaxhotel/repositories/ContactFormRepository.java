package pl.mwlzg.funandrelaxhotel.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.ContactFormData;

@Repository
public class ContactFormRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public HttpStatus postContactForm (ContactFormData contactFormData) {
        String query = "INSERT INTO `contact_form_data` (email, name_and_surname";
        String valuesFromQuery="VALUES (?,?";
        System.out.println(contactFormData.getEmail()+
                contactFormData.getName_and_surname()+
                contactFormData.getPhone_number()+
                contactFormData.getMessage());
        if (contactFormData.getPhone_number() != null && contactFormData.getMessage() != null){
            valuesFromQuery = valuesFromQuery + ",?,?)";
            query=query+", phone_number, message) "+valuesFromQuery;
            System.out.println(query);
            jdbcTemplate.update(query, contactFormData.getEmail(),
                    contactFormData.getName_and_surname(),
                    contactFormData.getPhone_number(),
                    contactFormData.getMessage());
            return HttpStatus.OK;
        } else if (contactFormData.getPhone_number() != null) {
            valuesFromQuery = valuesFromQuery + ",?)";
            query=query+", phone_number) "+valuesFromQuery;
            System.out.println(query);
            jdbcTemplate.update(query, contactFormData.getEmail(),
                    contactFormData.getName_and_surname(),
                    contactFormData.getPhone_number());
            return HttpStatus.OK;
        }else if (contactFormData.getMessage() != null){
            valuesFromQuery=valuesFromQuery+",?)";
            query=query+", message) "+valuesFromQuery;
            System.out.println(query);
            jdbcTemplate.update(query, contactFormData.getEmail(),
                    contactFormData.getName_and_surname(),
                    contactFormData.getMessage());
            return HttpStatus.OK;
        }else if (contactFormData.getPhone_number() == null && contactFormData.getMessage() == null){
            valuesFromQuery = valuesFromQuery + ")";
            query=query+") "+valuesFromQuery;
            System.out.println(query);
            jdbcTemplate.update(query, contactFormData.getEmail(),
                    contactFormData.getName_and_surname());
            return HttpStatus.OK;
        }
        return HttpStatus.BAD_REQUEST;
    }
}
