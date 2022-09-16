package my.practice.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MemoController {
    private final MemoRepository repository;

    @GetMapping("/memo/{id}")
    public Memo getMemo(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Wrong id: " + id));
    }

    @PostMapping("/memo")
    public ResponseEntity<?> saveMomo(@RequestBody Memo memo) {
        Memo res = repository.save(memo);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/memo")
    public List<Memo> all() {
        return repository.findAll();
    }

    @PutMapping("/memo/{id}")
    public void updateMemo(@PathVariable Long id, @RequestBody Memo memo) {
        repository.findById(id)
                .map(m -> {
                    m.setData(memo.getData());
                    return repository.save(m);
                })
                .orElseGet(() -> {
                    memo.setId(id);
                    return repository.save(memo);
                });
    }

    @DeleteMapping("/memo/{id}")
    public void deleteMemo(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
