def filter_list(l)
  l.select {|element| element.is_a?(Integer)}
end