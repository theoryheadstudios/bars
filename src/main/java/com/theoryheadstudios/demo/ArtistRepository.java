package com.theoryheadstudios.demo;

import org.springframework.data.repository.CrudRepository;

public interface ArtistRepository extends CrudRepository<User, String> {
}
