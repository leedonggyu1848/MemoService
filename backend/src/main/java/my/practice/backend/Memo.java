package my.practice.backend;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Memo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String data;
}
