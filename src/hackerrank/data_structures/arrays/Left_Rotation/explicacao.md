### Código Explicado:

```typescript
function rotateLeft(d: number, arr: number[]): number[] {
  // A quantidade de rotações pode ser reduzida para d % arr.length
  const rotations = d % arr.length;

  // Divide o array em duas partes: antes e depois da posição de rotação
  const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));

  return rotatedArray;
}
```

Agora, explicando cada linha em detalhes:

---

### 1. **Entrada da Função**:

```typescript
function rotateLeft(d: number, arr: number[]): number[] {
```

- **`d`**: Quantidade de rotações à esquerda.
  Exemplo: Se \( d = 4 \), vamos mover 4 elementos do início do array para o final.
- **`arr`**: O array que precisa ser rotacionado.
  Exemplo: Se o array for `[1, 2, 3, 4, 5]`, queremos transformá-lo em `[5, 1, 2, 3, 4]`.

---

### 2. **Reduzir o Número de Rotações**:

```typescript
const rotations = d % arr.length;
```

- **Por que reduzir?**

  - Se o número de rotações (\(d\)) for maior que o tamanho do array (\(n\)), as rotações "extras" são desnecessárias.
  - Exemplo: Rotacionar `[1, 2, 3, 4, 5]` 5 vezes é o mesmo que rotacionar 0 vezes, porque o array volta ao estado inicial.
  - Então, calculamos \(d \% n\), que é o número efetivo de rotações necessárias.

  **Exemplo**:

  - Para \( d = 4 \) e \( n = 5 \), o resultado de \( d \% n \) é \( 4 \), então faremos 4 rotações.
  - Para \( d = 7 \) e \( n = 5 \), o resultado de \( d \% n \) é \( 2 \), então faremos apenas 2 rotações.

---

### 3. **Fatiar o Array**:

```typescript
const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
```

- Aqui dividimos o array em **duas partes** e depois as juntamos de forma invertida.

#### 3.1 **Primeira Parte**:

```typescript
arr.slice(rotations);
```

- O método `slice(start)` retorna uma "fatia" do array, começando no índice **`start`** até o final.
- **`rotations`** indica onde devemos "cortar" o array.

  **Exemplo**:

  - Se \( arr = [1, 2, 3, 4, 5] \) e \( rotations = 4 \):
    - `arr.slice(4)` retorna `[5]` (do índice 4 ao final).

#### 3.2 **Segunda Parte**:

```typescript
arr.slice(0, rotations);
```

- O método `slice(start, end)` retorna uma fatia do array do índice **`start`** até **`end`** (não inclusivo).
- Aqui pegamos os elementos iniciais do array, até o índice \( rotations \).

  **Exemplo**:

  - Se \( arr = [1, 2, 3, 4, 5] \) e \( rotations = 4 \):
    - `arr.slice(0, 4)` retorna `[1, 2, 3, 4]`.

---

### 4. **Concatenar as Partes**:

```typescript
.concat()
```

- O método `concat()` combina dois arrays em um só.
- Aqui juntamos a **primeira parte** (a partir de \( rotations \)) com a **segunda parte** (até \( rotations \)).

  **Exemplo**:

  - Para \( arr = [1, 2, 3, 4, 5] \) e \( rotations = 4 \):
    - `arr.slice(4)` retorna `[5]`.
    - `arr.slice(0, 4)` retorna `[1, 2, 3, 4]`.
    - `.concat()` junta `[5]` com `[1, 2, 3, 4]`, resultando em `[5, 1, 2, 3, 4]`.

---

### 5. **Retornar o Resultado**:

```typescript
return rotatedArray;
```

- A função retorna o array rotacionado.

---

### Exemplo Completo Passo a Passo:

Dado \( arr = [1, 2, 3, 4, 5] \) e \( d = 4 \):

1. **Reduzir rotações**:
   - \( rotations = d \% arr.length = 4 \% 5 = 4 \).
2. **Fatiar o array**:
   - Parte 1: `arr.slice(4)` → `[5]`.
   - Parte 2: `arr.slice(0, 4)` → `[1, 2, 3, 4]`.
3. **Concatenar as partes**:
   - `[5]` + `[1, 2, 3, 4]` → `[5, 1, 2, 3, 4]`.
4. **Resultado final**:
   - `[5, 1, 2, 3, 4]`.

---

# O que seria %?

O símbolo `%` em programação representa o **operador de módulo** (ou resto da divisão). Ele retorna o **resto** de uma divisão inteira.

### Como Funciona:

Se você fizer \( a \% b \), o resultado será o resto da divisão de \( a \) por \( b \). Isso significa que ele calcula **quanto sobra depois de dividir \( a \) por \( b \)**.

---

### Exemplos:

1. **Exemplo simples:**

   - \( 10 \% 3 \):
     - Divida \( 10 \) por \( 3 \): \( 10 \div 3 = 3 \) com resto \( 1 \).
     - Resultado: \( 10 \% 3 = 1 \).

2. **Sem resto (divisão exata):**

   - \( 6 \% 2 \):
     - Divida \( 6 \) por \( 2 \): \( 6 \div 2 = 3 \), resto \( 0 \).
     - Resultado: \( 6 \% 2 = 0 \).

3. **Quando o divisor é maior que o dividendo:**
   - \( 2 \% 5 \):
     - Divida \( 2 \) por \( 5 \): \( 2 \div 5 = 0 \) com resto \( 2 \) (porque 5 não cabe em 2 nenhuma vez).
     - Resultado: \( 2 \% 5 = 2 \).

---

### Por que usamos `%` no código?

No caso do **problema de rotação à esquerda**, usamos \( d \% n \) para calcular o número de rotações **reais** necessárias:

- Se \( d > n \) (número de rotações maior que o tamanho do array), o array "volta ao início" após \( n \) rotações completas.
- Assim, \( d \% n \) elimina as rotações redundantes e nos dá o deslocamento mínimo necessário.

---

### Exemplo no problema:

Se você tem um array de 5 elementos (\( n = 5 \)) e quer rotacionar 7 vezes (\( d = 7 \)):

- \( d \% n = 7 \% 5 = 2 \).
- Isso significa que fazer 7 rotações é o mesmo que fazer **2 rotações**.
