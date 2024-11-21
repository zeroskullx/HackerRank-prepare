# Problema: Matriz 2D - Soma de Ampulhetas

## Descrição

Dado um 6x6, **Array 2D**:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

Uma ampulheta em uma A matriz é um subconjunto de valores com índices caindo no seguinte padrão gráfico:

```
a b c
  d
e f g
```

Existem 16 ampulhetas possíveis em uma matriz 6x6. A soma de uma ampulheta é a soma dos valores dentro dela. O objetivo é calcular a soma de cada ampulheta na matriz e imprimir o maior valor encontrado. A matriz terá sempre o tamanho 6x6.

---

## Exemplo

### Matriz de entrada:

```
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
```

### Somas de todas as 16 ampulhetas:

```
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18
```

A maior soma é **28**, vinda da ampulheta que começa na linha 1, coluna 2 (lembre que a array inicia no ponteiro 0):

```
0 4 3
  1
8 6 6
```

---

## Descrição da Função

Complete a função `hourglassSum` com a assinatura:

```typescript
function hourglassSum(arr: number[][]): number;
```

### Parâmetros

- **`arr`**: uma matriz 2D de inteiros de tamanho 6x6.

### Retorno

- **`number`**: o maior valor da soma de uma ampulheta.

---

## Restrições

1. A matriz é sempre 6x6.
2. Cada linha contém 6 inteiros separados por espaço.

---

## Entrada e Saída

### Entrada Exemplo:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

### Saída Exemplo:

```
19
```

### Explicação:

A matriz contém as seguintes ampulhetas, e a ampulheta com a maior soma (19) é:

```
2 4 4
  2
1 2 4
```
