Para uma lista dada com (N) inteiros, retorne uma nova lista removendo os elementos em posições ímpares.

### Entrada

```
2
5
3
4
6
7
9
8
```

### Saida

```
5
4
7
8
```

Clojure:
Este será o esboço do corpo da sua função (preencha a parte em branco marcada por sublinhados):

```
 (fn[lst]___________________________)
```

# Explicando

Para resolver esse problema em Clojure, podemos usar uma abordagem recursiva para construir uma nova lista contendo apenas os elementos em posições pares (considerando que a indexação começa em 0). A lógica é iterar pela lista com um contador e incluir apenas os elementos que estão em posições pares.

Aqui está a implementação:

```clojure
(fn [lst]
  (let [result
        (loop [lst lst, idx 0, result []]
          (if (empty? lst)
            result
            (let [head (first lst)
                  tail (rest lst)]
              (if (odd? idx)
                (recur tail (inc idx) (conj result head))
                (recur tail (inc idx) result)))))]
    (doseq [val result]
      (println val))))
```

### Explicação:

Entendido! Com a correção de que o índice começa em **0**, precisamos ajustar a lógica para incluir elementos em **índices ímpares** e ignorar os pares.

Aqui está a solução ajustada:

```clojure
(fn [lst]
  (let [result
        (loop [lst lst, idx 0, result []]
          (if (empty? lst)
            result
            (let [head (first lst)
                  tail (rest lst)]
              (if (odd? idx)
                (recur tail (inc idx) (conj result head))
                (recur tail (inc idx) result)))))]
    (doseq [val result]
      (println val))))
```

### Explicação:

1. **Índice começa em 0:**

   - O índice inicial (`idx`) é **0**, então:
     - **Pares (idx % 2 = 0):** Ignorar.
     - **Ímpares (idx % 2 ≠ 0):** Adicionar o elemento ao `result`.

2. **Recursão:**

   - Iteramos pela lista com `loop` e acumulamos no vetor `result` apenas os elementos nos índices ímpares.

3. **Impressão:**
   - Após construir o vetor `result`, usamos `doseq` para imprimir cada valor em uma linha separada.

### Exemplo de Uso:

Entrada:

```clojure
(fn ['(2 5 3 4 6 7 9 8)])
```

Saída no terminal:

```
5
4
7
8
```

### Justificativa:

- **Posições na lista:**
  - `2` (posição 0, excluído),
  - `5` (posição 1, incluído),
  - `3` (posição 2, excluído),
  - `4` (posição 3, incluído),
  - `6` (posição 4, excluído),
  - `7` (posição 5, incluído),
  - `9` (posição 6, excluído),
  - `8` (posição 7, incluído).
