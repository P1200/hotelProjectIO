package pl.mwlzg.funandrelaxhotel.repositories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.FreeRoomId;
import pl.mwlzg.funandrelaxhotel.sqltables.Reservation;

import java.util.List;

@Repository
public class ReservationRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public HttpStatus postReservation(Reservation reservation, List<FreeRoomId> freeRoomId){
        if (reservation.getRoom_count()>freeRoomId.size()){
            return HttpStatus.TOO_MANY_REQUESTS;
        }
        for (int i=0;i<reservation.getRoom_count();i++) {
            System.out.println("Adding "+i+" reservation");
            String query = "INSERT INTO `reservation` (ARRIVAL_DATE,DEPARTURE_DATE,ROOM_ID,PAID,PESEL) VALUES (?,?,?,?,?)";
            jdbcTemplate.update(query, reservation.getArrival_date(),
                    reservation.getDeparture_date(),
                    freeRoomId.get(i).getRoom_id(),
                    reservation.getPaid(),
                    reservation.getPesel());
        }
        return HttpStatus.OK;
    }
}
