def likes(names)
  if names.count === 1
  return "#{names [0]} likes this"
  elsif names.count === 2
  return "#{names [0]} and #{names [1]} like this"
  elsif names.count === 3
  return "#{names [0]}, #{names [1]} and #{names [2]} like this"
  elsif names.count > 3
  return "#{names [0]}, #{names [1]} and #{names.count - 2} others like this"
  else names.count === 0
  return 'no one likes this'
  end
end