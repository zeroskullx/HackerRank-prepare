(fn [arr]
  (let [result (reduce (fn [acc curr]
    (if (odd? curr)
       (+ acc curr)
          acc))
            0
      arr)]
    (if (number? result)
      result
      nil)))
