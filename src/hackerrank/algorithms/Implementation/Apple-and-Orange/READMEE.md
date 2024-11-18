Segue a tradução do conteúdo do PDF:

---

**Maçã e Laranja**

A casa de Sam possui uma macieira e uma laranjeira que produzem uma abundância de frutas. Usando as informações fornecidas abaixo, determine o número de maçãs e laranjas que caem na casa de Sam.

No diagrama abaixo:

A região vermelha denota a casa, onde \( s \) é o ponto inicial e \( t \) é o ponto final. A macieira está à esquerda da casa, e a laranjeira está à direita.

Assuma que as árvores estão localizadas em um ponto específico, onde a macieira está no ponto \( a \) e a laranjeira no ponto \( b \).

Quando uma fruta cai de sua árvore, ela aterrissa \( d \) unidades de distância de sua árvore ao longo do eixo \( x \). Um valor negativo de \( d \) significa que a fruta caiu \( |d| \) unidades para a esquerda da árvore, e um valor positivo de \( d \) significa que ela caiu \( d \) unidades para a direita.

![Minha Imagem](appleandorange2.png)

Dado o valor de \( d \) para \( m \) maçãs e \( n \) laranjas, determine quantas maçãs e laranjas cairão na casa de Sam (ou seja, na faixa inclusiva entre \( s \) e \( t \)).

Por exemplo, a casa de Sam está entre \( s = 7 \) e \( t = 11 \). A macieira está localizada em \( a = 5 \) e a laranjeira em \( b = 15 \). Há 3 maçãs e 2 laranjas. As maçãs caem a uma distância de \(-2\), \(2\) e \(1\) unidades de \( a \), e as laranjas caem a \(5\) e \(-6\) unidades de \( b \). Somando cada distância de maçã à posição da árvore, elas caem nas posições \(3\), \(7\) e \(6\). As laranjas caem nas posições \(20\) e \(9\). Uma maçã e duas laranjas caem na faixa inclusiva entre \(7\) e \(11\), então imprimimos:

```
1
2
```

### Descrição da Função

Complete a função `countApplesAndOranges` no editor abaixo. Ela deve imprimir o número de maçãs e laranjas que caem na casa de Sam, cada uma em uma linha separada.

**Parâmetros da função `countApplesAndOranges`:**

- `s`: integer, ponto inicial da localização da casa de Sam.
- `t`: integer, ponto final da localização da casa de Sam.
- `a`: integer, localização da macieira.
- `b`: integer, localização da laranjeira.
- `apples`: array de integers, distâncias em que cada maçã cai da árvore.
- `oranges`: array de integers, distâncias em que cada laranja cai da árvore.

**Formato de Entrada**

- A primeira linha contém dois inteiros separados por espaço, denotando os valores de \( s \) e \( t \).
- A segunda linha contém dois inteiros separados por espaço, denotando os valores de \( a \) e \( b \).
- A terceira linha contém dois inteiros separados por espaço, denotando os valores de \( m \) e \( n \).
- A quarta linha contém \( m \) inteiros separados por espaço, denotando as distâncias que cada maçã cai a partir do ponto \( a \).
- A quinta linha contém \( n \) inteiros separados por espaço, denotando as distâncias que cada laranja cai a partir do ponto \( b \).

**Restrições**

---

**Formato de Saída**

Imprima dois inteiros em duas linhas diferentes:

1. O primeiro inteiro: o número de maçãs que caem na casa de Sam.
2. O segundo inteiro: o número de laranjas que caem na casa de Sam.

**Exemplo de Entrada 0**

```
7 11
5 15
3 2
-2 2 1
5 -6
```

**Exemplo de Saída 0**

```
1
1
```

**Explicação 0**

- A primeira maçã cai na posição \(3\).
- A segunda maçã cai na posição \(7\).
- A terceira maçã cai na posição \(6\).
- A primeira laranja cai na posição \(20\).
- A segunda laranja cai na posição \(9\).

Apenas uma fruta (a segunda maçã) cai dentro da região entre \(7\) e \(11\), então imprimimos `1` como nossa primeira linha de saída.

Apenas a segunda laranja cai dentro da região entre \(7\) e \(11\), então imprimimos `1` como nossa segunda linha de saída.

---

Se precisar de mais alguma ajuda com este documento, estou à disposição!
