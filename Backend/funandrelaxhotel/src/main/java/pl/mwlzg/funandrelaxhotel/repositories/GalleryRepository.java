package pl.mwlzg.funandrelaxhotel.repositories;


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
    private List<Path> auxiliary;

    public GalleryImages getAllPaths (){
        ArrayList<String> listPaths = new ArrayList<>();
        try {
            Path currentRelativePath = Paths.get("");
            System.out.println("------------");
            System.out.println("Path to the class: "+currentRelativePath.toAbsolutePath());
            auxiliary=Files.walk(Paths.get(currentRelativePath.toAbsolutePath()+"\\..\\Pictures"))
                    .filter(Files::isRegularFile)
                    .toList();
        } catch (IOException e) {
            e.printStackTrace();
        }
        for (Path path:auxiliary){
            listPaths.add(path.toString());
        }
        return new GalleryImages(listPaths);
    }
}
