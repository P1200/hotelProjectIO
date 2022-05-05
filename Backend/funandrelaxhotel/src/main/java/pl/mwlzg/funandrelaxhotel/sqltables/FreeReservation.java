package pl.mwlzg.funandrelaxhotel.sqltables;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FreeReservation {
    @NonNull private Integer room_count;
    @NonNull private  Double prise;
    @NonNull private String kind;
    @NonNull private String description;
    @NonNull private String path;
}
