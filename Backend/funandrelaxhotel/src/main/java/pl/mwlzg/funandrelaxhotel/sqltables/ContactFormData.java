package pl.mwlzg.funandrelaxhotel.sqltables;


import lombok.*;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
public class ContactFormData {
    @NonNull String email;
    @NonNull String name_and_surname;
    String phone_number;
    String message;
}
