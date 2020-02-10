package com.CALV.RilDilBBQ;

//import com.example.easynotes.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//This annotation gives us the library to perform CRUD operations without having to create them. These methods are inherited from the JPA Repository.
@Repository
//This class requires no code because it is an interface we are using to steal the inherited library of methods.
public interface LoginRepository extends JpaRepository<Login, Long> {

}
