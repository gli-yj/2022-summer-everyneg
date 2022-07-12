import java.io.*
import java.util.*

//Choosing the file to draw from
public class FileTest {

    final static File dir = new File("C:\\Users\\gliyj\\Desktop\\UCI\\prosody-exp\\experiments\\audio_files\\");
    static int size = 3; //Not sure if there's a way to get the number of files
                         //in a folder, hardcoding should be fine for now
    static String audioid = new String;


public static String main(String[] args) {
    File[] files = dir.listFiles(); //array of all audio files in audio_files folder
    int id = (int)(Math.random()*size); //choose random file from array

    audioid = files[id];
    Return getaudio;
}
