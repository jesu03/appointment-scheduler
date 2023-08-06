package com.registration.form.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.registration.form.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
    
}
