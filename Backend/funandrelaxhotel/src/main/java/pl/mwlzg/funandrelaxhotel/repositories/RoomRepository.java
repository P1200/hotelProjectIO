package pl.mwlzg.funandrelaxhotel.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.Room;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


@Repository
public class RoomRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Room> getRoomById () {

        List<Room> roomList = jdbcTemplate.query(
                "SELECT DISTINCT room.prise,room.kind,room.description,room_kind.path " +
                        "FROM room INNER JOIN room_kind " +
                        "ON room.kind=room_kind.kind",
                BeanPropertyRowMapper.newInstance(Room.class)
        );
        Path currentRelativePath = Paths.get("");
        System.out.println("------------");
        System.out.println("Path to the class: " + currentRelativePath.toAbsolutePath());
        for (Room room : roomList){
            room.setPath(currentRelativePath.toAbsolutePath() + "\\..\\Pictures\\" + room.getPath());
            System.out.println(room.getPath());
        }
        return roomList;
    }
}
