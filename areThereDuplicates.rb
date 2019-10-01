# Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

# // Examples:

# // areThereDuplicates(1, 2, 3) // false
# // areThereDuplicates(1, 2, 2) // true 
# // areThereDuplicates('a', 'b', 'c', 'a') // true 

# def are_there_duplicates(*args) 
# 	counter = args.each_with_object({}) do |char, hsh|
# 		!hsh[char] ? hsh[char] = 1 : hsh[char] += 1
# 	end
# 	counter.each do |k, v| 
# 		puts v
# 		if v > 1
# 			return true
# 		end
# 	end
# 	false
# end

#OR

# def are_there_duplicates(*args)
# 	counter = args.each_with_object({}) do |char, hsh| 
# 		if hsh[char]
# 			return true
# 		else 
# 			hsh[char] = true
# 		end
# 	end
# 	false
# end

#OR

# def are_there_duplicates(*args)
# 	sorted = args.sort
# 	sorted.each_with_index do |arg, i|
# 		if arg == sorted[i + 1]
# 			return true
# 		end 
# 	end
# 	false
# end

puts are_there_duplicates(1, 2, 3)
puts are_there_duplicates(1, 2, 2)
puts are_there_duplicates('a', 'b', 'c', 'a')
