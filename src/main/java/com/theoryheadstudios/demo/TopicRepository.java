package com.theoryheadstudios.demo;

import org.springframework.data.repository.CrudRepository;

public interface TopicRepository extends CrudRepository<Topic, String> {


    void save(User user);
}
