(fn [num lst]
  (doseq [x lst]
    (dotimes [_ num]
      (println x))))
