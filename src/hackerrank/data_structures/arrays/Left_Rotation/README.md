Aqui está a tradução do documento em formato Markdown (.md):

# Rotação à Esquerda

Uma operação de rotação à esquerda em um array de tamanho \(n\) desloca cada elemento do array uma unidade para a esquerda. Dado um número inteiro \(d\), rotacione o array esse número de passos à esquerda e retorne o resultado.

## Exemplo

Após 4 rotações, o array [1, 2, 3, 4, 5] se transforma em [5, 1, 2, 3, 4].

## Descrição da Função

Complete a função `rotateLeft` no editor abaixo.

### Parâmetros:

- **int d**: a quantidade de rotações à esquerda.
- **int arr[n]**: o array a ser rotacionado.

### Retorno:

- **int[n]**: o array rotacionado.

## Formato de Entrada

A primeira linha contém dois números inteiros separados por espaço que indicam:

- \(n\), o número de inteiros no array.
- \(d\), o número de rotações à esquerda a serem realizadas.

A segunda linha contém \(n\) números inteiros separados por espaço que descrevem o array \(arr\).

## Restrições

- Os valores de \(d\) e \(n\) são positivos e limitados pelo tamanho do array.

## Entrada de Exemplo

```
5 4
1 2 3 4 5
```

## Saída de Exemplo

```
5 1 2 3 4
```

## Explicação

Para realizar 4 rotações à esquerda, o array sofre a seguinte sequência de alterações:

1. [1, 2, 3, 4, 5] → [2, 3, 4, 5, 1] (1ª rotação)
2. [2, 3, 4, 5, 1] → [3, 4, 5, 1, 2] (2ª rotação)
3. [3, 4, 5, 1, 2] → [4, 5, 1, 2, 3] (3ª rotação)
4. [4, 5, 1, 2, 3] → [5, 1, 2, 3, 4] (4ª rotação)
