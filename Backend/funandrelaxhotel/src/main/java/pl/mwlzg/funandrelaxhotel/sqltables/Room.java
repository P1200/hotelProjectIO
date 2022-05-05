package pl.mwlzg.funandrelaxhotel.sqltables;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @NonNull private Integer room_id;
    @NonNull private Double price;
    @NonNull private String kind;
    @NonNull private String description;
    @NonNull private String path;
}
