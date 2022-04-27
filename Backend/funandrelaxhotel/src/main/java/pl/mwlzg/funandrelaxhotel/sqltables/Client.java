package pl.mwlzg.funandrelaxhotel.sqltables;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
public class Client {
    @NonNull private String pesel;
    @NonNull private String name;
    @NonNull private String surname;
    private String email;
    @NonNull private String phone_number;
}
