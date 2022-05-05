package pl.mwlzg.funandrelaxhotel.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.FreeReservation;

import java.sql.Date;

@Repository
public class FreeReservationRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public FreeReservation getFreeReservations (Date from, Date to) {

        return jdbcTemplate.queryForObject(
                """
                        SELECT COUNT(*) AS room_count,room_id,prise,kind,description,path FROM(
                        SELECT arrival_date,departure_date,reservation.room_id,prise,room.kind,description,path
                        FROM reservation INNER JOIN (room INNER JOIN room_kind ON room.kind=room_kind.kind) ON reservation.room_id=room.room_id
                        GROUP BY reservation.room_id
                        HAVING arrival_date NOT BETWEEN ? AND ? AND departure_date NOT BETWEEN ? AND ?
                        ) AS pom GROUP BY kind""",
                BeanPropertyRowMapper.newInstance(FreeReservation.class),
                from,to,from,to
        );
    }
}
