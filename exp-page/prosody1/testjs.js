import java.io.*
import java.util.*

//Choosing the file to draw from
public class FileTest {

    final static File dir = new File("/audio_files/");
    static int size = 3; //Not sure if there's a way to get the number of files
                         //in a folder, hardcoding should be fine for now

public static void main(String[] args) {
    static String audioName = "126_full.wav";
    static File audio = new File("audio_files//126_full.wav");

    File[] files = dir.listFiles(); //array of all audio files in audio_files folder
    int id = (int)(Math.random()*size); //choose random file from array

    //audio = files[id];
    //audioName = audio.getName();

}
