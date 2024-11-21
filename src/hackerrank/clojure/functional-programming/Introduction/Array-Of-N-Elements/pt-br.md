Crie um array de (n) inteiros, onde o valor de (n) é passado como um argumento para a função pré-preenchida no seu editor. Este desafio usa um verificador personalizado, então você pode criar qualquer array de inteiros. Por exemplo, se (n) = 4, você pode retornar [1,1,1,], [1,2,3,4], ou qualquer outro array de igual comprimento.

```clojure
(fn [n]
  (vec (repeat n 1)))
```

Essa função cria um array de tamanho `n`, preenchido com o número `1`.

### Explicação:

- `(repeat n 1)`: Cria uma sequência que repete o número `1` `n` vezes.
- `(vec ...)`: Converte essa sequência em um vetor (array) de Clojure.

### Exemplos:

- `(f 4)` retorna `[1 1 1 1]`
- `(f 3)` retorna `[1 1 1]`

Se você quiser um padrão diferente (como números incrementais), é fácil adaptar a função. Por exemplo:

**Incremental Array**:

```clojure
(fn [n]
  (vec (range 1 (inc n))))
```

Esse retorna `[1 2 3 4]` para `n = 4`.
