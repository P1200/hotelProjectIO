package pl.mwlzg.funandrelaxhotel.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.FreeReservation;
import pl.mwlzg.funandrelaxhotel.sqltables.FreeRoomId;

import java.sql.Date;
import java.util.List;

@Repository
public class FreeReservationRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<FreeReservation> getFreeReservations (Date from, Date to) {

        return jdbcTemplate.query(
                """
                        SELECT COUNT(*) AS room_count,prise,kind,description,path FROM(
                        SELECT DISTINCT reservation.room_id,prise,room.kind,description,path
                        FROM reservation INNER JOIN (room INNER JOIN room_kind ON room.kind=room_kind.kind) ON reservation.room_id=room.room_id
                        WHERE reservation.room_id NOT IN (
                        SELECT room_id FROM(
                        SELECT arrival_date,departure_date,reservation.room_id
                        FROM reservation INNER JOIN room ON reservation.room_id=room.room_id
                        WHERE arrival_date BETWEEN ? AND ? AND departure_date BETWEEN ? AND ?
                        ) AS pom
                        )
                        ) AS pom2 GROUP BY kind""",
                BeanPropertyRowMapper.newInstance(FreeReservation.class),
                from,to,from,to
        );
    }

    public List<FreeRoomId> getFreeReservationIds (Date from, Date to, String kind) {

        return jdbcTemplate.query(
                """
                        SELECT room_id FROM(
                        SELECT room_id,kind FROM(
                        SELECT DISTINCT reservation.room_id,room.kind
                        FROM reservation INNER JOIN (room INNER JOIN room_kind ON room.kind=room_kind.kind) ON reservation.room_id=room.room_id
                        WHERE reservation.room_id NOT IN (
                        SELECT room_id FROM(
                        SELECT arrival_date,departure_date,reservation.room_id
                        FROM reservation INNER JOIN room ON reservation.room_id=room.room_id
                        WHERE arrival_date BETWEEN ? AND ? AND departure_date BETWEEN ? AND ?
                        ) AS pom
                        )
                        )  WHERE kind = ? )""",
                BeanPropertyRowMapper.newInstance(FreeRoomId.class),
                from,to,from,to,kind
        );
    }
}
