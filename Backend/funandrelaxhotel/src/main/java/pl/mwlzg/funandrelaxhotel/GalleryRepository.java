package pl.mwlzg.funandrelaxhotel;


import org.springframework.stereotype.Repository;
import pl.mwlzg.funandrelaxhotel.sqltables.GalleryImages;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Repository
public class GalleryRepository {
    private final ArrayList<String> listPaths=new ArrayList<>();
    private List<Path> auxiliary;

    public GalleryImages getAllPaths (){
        try {
            auxiliary=Files.walk(Paths.get("\\ProjektHotel\\Backend\\Pictures"))
                    .filter(Files::isRegularFile)
                    .toList();
            //TODO coś tu źle zwraca
        } catch (IOException e) {
            e.printStackTrace();
        }
        for (Path path:auxiliary){
            listPaths.add(path.toString());
        }
        return new GalleryImages(listPaths);
    }
}
