# create a function that replicates the rub .map() or .collect() function

class Array

	def my_map(cb)
		arr = []
		for el in self
			arr << cb(el)
		end
		arr
	end

end


def times_two(el)
	el * 2
end

array = [1, 2, 3]

array.my_map()
