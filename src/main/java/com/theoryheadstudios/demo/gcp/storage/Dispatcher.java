package com.theoryheadstudios.demo.gcp.storage;

import com.theoryheadstudios.demo.exception.ConflictingScheduleTImeException;
import com.theoryheadstudios.demo.exception.SongNotFoundException;
import com.theoryheadstudios.demo.model.DebutListEntity;
import com.theoryheadstudios.demo.model.SongsEntity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.sql.Timestamp;
import java.util.List;

public class Dispatcher {
    DebutListEntity debutListEntity = new DebutListEntity();
    @PersistenceContext
    EntityManager entityManager;

    public SongsEntity getCurrentDebutSong() throws ConflictingScheduleTImeException, SongNotFoundException {
        List<?> list = entityManager.createQuery("Select u from DebutListEntity u where u.scheduledTime=?1 ")
               .setParameter(1, currentTime())
                .getResultList();
        if(list==null){
                throw new SongNotFoundException();
        }else if(debutListEntity.getScheduledTime().equals(currentTime())){
            return (SongsEntity) list.get(0);
        }
        else throw new ConflictingScheduleTImeException();
    }

    public Timestamp currentTime(){
        Timestamp currentTime = new Timestamp(System.currentTimeMillis());
        return currentTime;
    }
}
