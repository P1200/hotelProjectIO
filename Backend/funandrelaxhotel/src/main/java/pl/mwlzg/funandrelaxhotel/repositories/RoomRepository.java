package pl.mwlzg.funandrelaxhotel.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.Room;


@Repository
public class RoomRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public Room getRoomById (int room_id){

        return jdbcTemplate.queryForObject(
                "SELECT * FROM room WHERE room_id= ?",
                BeanPropertyRowMapper.newInstance(Room.class),
                room_id
        );
    }
}
