package pl.mwlzg.funandrelaxhotel.sqltables;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    @NonNull Date arrival_date;
    @NonNull Date departure_date;
    @NonNull String kind;
    @NonNull Integer room_count;
    @NonNull Boolean paid;
    @NonNull String Pesel;
}
