# [Hackerrank] – Between Two Sets Solution

Você receberá duas matrizes de inteiros e será solicitado a determinar todos os inteiros entre dois conjuntos que satisfaçam as duas condições a seguir: – Os elementos da primeira matriz são todos fatores do inteiro que está sendo considerado – O inteiro que está sendo considerado é um fator de todos os elementos da segunda matriz

Input

```markdown
a = { 2, 6 }
b = { 24, 36 }
```

Output:

```markdown
2
```

A parte mais difícil sobre esse problema é entender o que ele realmente está dizendo. Para colocar em palavras bem simples, você recebe 2 arrays. Agora você precisa encontrar uma contagem de inteiros que satisfaçam as condições:

- Os inteiros devem ser múltiplos de cada elemento da primeira matriz.
- Os inteiros devem ser fatores de cada elemento da segunda matriz.

Time Complexity: O(n log n)

Space Complexity: O(log n)

Vou usar typescript, e usar MMC (Mínimo múltiplo comum) e MDC (Máximo divisor comum). O algoritmo será:

- Encontra o MMC de todos os inteiros da matriz (a)
- Em seguida, encontra o MDC de todos os inteiros da matriz b.
- Conte o número de múltiplos do MMC que são divisíveis pelo MDC.

## Explicando a minha solução

Aqui está uma explicação detalhada, linha por linha, da função `getTotalX`, escrita de forma simples para quem está começando:

```typescript
function getTotalX(a: number[], b: number[]): number {
```

- **O que ela faz?** Define uma função chamada `getTotalX`, que recebe dois arrays de números (`a` e `b`) como entrada e retorna um número (quantos números estão "entre" os dois conjuntos).

---

[GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor) (Greatest common divisor)

```typescript
const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));
```

- **O que é isso?** Aqui estamos criando uma função chamada `gcd` (máximo divisor comum, ou "greatest common divisor").
- **Como funciona?**
  - Se `y` for `0`, significa que já encontramos o maior divisor comum, que é `x`.
  - Caso contrário, usamos a recursão (a função chama ela mesma) com os valores `y` e `x % y` (o resto da divisão entre `x` e `y`).
  - Isso é conhecido como o [**algoritmo de Euclides**](https://en.wikipedia.org/wiki/Euclidean_algorithm).

---

[LCM](https://en.wikipedia.org/wiki/Least_common_multiple) (Lowest common multiple)

```typescript
const lcm = (x: number, y: number): number => (x * y) / gcd(x, y);
```

- **O que é isso?** Outra função chamada `lcm` (mínimo múltiplo comum, ou "least common multiple").
- **Como funciona?**
  - Multiplicamos `x` e `y`, e depois dividimos pelo `gcd` (máximo divisor comum) deles.
  - Isso nos dá o menor número que é múltiplo de ambos.

---

```typescript
const lcmOfA = a.reduce((acc, val) => lcm(acc, val));
```

- **O que está acontecendo aqui?** Estamos calculando o `lcm` de todos os números no array `a`.
- **Como funciona?**
  - Usamos a função `reduce` para iterar por todos os elementos de `a`.
  - `acc` começa como o primeiro elemento do array, e `val` é o próximo.
  - Em cada passo, calculamos o `lcm` do acumulador (`acc`) e o próximo valor (`val`).
  - No final, temos o `lcm` de todos os elementos de `a`.

---

```typescript
const gcdOfB = b.reduce((acc, val) => gcd(acc, val));
```

- **O que está acontecendo aqui?** Agora estamos calculando o `gcd` de todos os números no array `b`.
- **Como funciona?**
  - Assim como no passo anterior, usamos `reduce`, mas agora aplicamos a função `gcd`.
  - No final, temos o maior número que divide todos os elementos de `b`.

---

```typescript
let count = 0;
```

- **O que isso faz?** Iniciamos uma variável `count` com o valor `0`.
- **Por que?** Vamos usá-la para contar quantos números estão "entre" os dois conjuntos.

---

```typescript
    for (let i = lcmOfA; i <= gcdOfB; i += lcmOfA) {
```

- **O que é isso?** Um laço `for` que itera pelos números entre `lcmOfA` e `gcdOfB`.
- **Como funciona?**
  - Começa no `lcmOfA` porque queremos múltiplos de todos os números em `a`.
  - Vai até `gcdOfB` porque queremos divisores de todos os números em `b`.
  - Incrementamos de `lcmOfA` em `lcmOfA` para garantir que todos os números testados sejam múltiplos de `a`.

---

```typescript
if (gcdOfB % i === 0) {
  count++;
}
```

- **O que está acontecendo aqui?**
  - Verificamos se o número atual (`i`) é um divisor de `gcdOfB`.
  - Fazemos isso usando `gcdOfB % i === 0`, que retorna `true` se o resto da divisão for `0`.
  - Se for verdade, aumentamos o `count` porque encontramos um número que está "entre" os dois conjuntos.

---

```typescript
return count;
```

- **O que ela faz?** Retorna o valor final de `count`, ou seja, o número total de inteiros que satisfazem as condições do problema.

---

### Resumo

1. Calculamos o `lcm` de `a` para encontrar o menor número que é múltiplo de todos os números de `a`.
2. Calculamos o `gcd` de `b` para encontrar o maior número que é divisor de todos os números de `b`.
3. Iteramos pelos múltiplos do `lcm` até o `gcd`, verificando se eles também são divisores do `gcd`.
4. Contamos e retornamos quantos números satisfazem as condições.

## MAP

### Exemplo: Números Entre Dois Conjuntos

### Arrays Dados

- **Array A**: [2, 4]
- **Array B**: [16, 32, 96]

---

### Passo 1: Números Múltiplos de Todos os Elementos de A

- **Condição**: Devem ser múltiplos de 2 e 4.
- **Resultado**: [4, 8, 12, 16, ...]

---

### Passo 2: Números Divisores de Todos os Elementos de B

- **Condição**: Devem dividir 16, 32 e 96.
- **Resultado**: [1, 2, 4, 8, 16]

---

### Passo 3: Interseção dos Resultados

- **Números que estão nos dois grupos**: [4, 8, 16]

---

### Resultado Final

- **Total de Números Entre os Conjuntos**: 3
- **Números**: [4, 8, 16]

---

### Representação Visual

```plaintext
Array A                 Números Válidos          Array B
[2, 4] --> 4 -------->  [4]  <------.      1 <-- [16, 32, 96]
           8 -------->  [8]  <-----. `.    2
          12       ,->  [16] <----. `. `-- 4
          16 -----´                `. `--- 8
                                     `---- 16
```
