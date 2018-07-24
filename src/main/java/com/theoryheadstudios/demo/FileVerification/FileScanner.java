package com.theoryheadstudios.demo.FileVerification;

import org.apache.tika.Tika;

import java.io.File;
import java.io.IOException;


public class FileScanner {
    File audioFile;

    public FileScanner(File file){
        this.audioFile = file;
//        Tika tika = new Tika();
//        try {
////            String mediaType = tika.detect(new File("/Users/freddyacevedo/IdeaProjects/Bars2018/src/main/Bounce.mp3"));
//            String mediaType = tika.detect(file);
//            System.out.println(mediaType);
//        } catch(IOException e) {
//            System.err.println(e.getMessage());
//        }
    }

    public boolean fileIsAudio(File audioInputFile){
        Tika tika = new Tika();
        try {
//            String mediaType = tika.detect(new File("/Users/freddyacevedo/IdeaProjects/Bars2018/src/main/Bounce.mp3"));
            String mediaType = tika.detect(audioInputFile);
            System.out.println(mediaType);
            if(mediaType.contains("audio")){
                return true;
            }
        } catch(IOException e) {
            System.err.println(e.getMessage());
        }
        return false;
    }

    public boolean fileIsMpeg(File audioInputFile){
        Tika tika = new Tika();
        try {
            String mediaType = tika.detect(audioInputFile);
            System.out.println(mediaType);
            if(mediaType.contains("mpeg")){
                return true;
            }
        } catch(IOException e) {
            System.err.println(e.getMessage());
        }
        return false;
    }
}
