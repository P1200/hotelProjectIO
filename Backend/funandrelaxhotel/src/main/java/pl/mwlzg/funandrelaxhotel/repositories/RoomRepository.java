package pl.mwlzg.funandrelaxhotel.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.Room;

import java.util.List;


@Repository
public class RoomRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Room> getRoomById () {

        return jdbcTemplate.query(
                "SELECT DISTINCT room.prise,room.kind,room.description,room_kind.path " +
                        "FROM room INNER JOIN room_kind " +
                        "ON room.kind=room_kind.kind",
                BeanPropertyRowMapper.newInstance(Room.class)
        );
    }
}
