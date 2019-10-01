
# // Multiple Pointers - averagePair
# // Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

# // Sample Input:

# // averagePair([1,2,3],2.5) // true
# // averagePair([1,3,3,5,6,7,10,12,19],8) // true
# // averagePair([-1,0,3,4,5,6], 4.1) // false
# // averagePair([],4) // false

def average_pair(arr, target)
	first = 0
	last = arr.length - 1
	while first < last
		avg = (arr[first] + arr[last]).to_f / 2.to_f
		# puts "avg #{avg}"
		# puts "first #{arr[first]}"
		# puts "last #{arr[last]}"
		if avg == target
			return true
		elsif avg > target
			last -= 1
		else 
			first += 1
		end
	end
	false
end

puts average_pair([1,2,3],2.5)
puts average_pair([1,3,3,5,6,7,10,12,19],8)
puts average_pair([-1,0,3,4,5,6], 4.1)
puts average_pair([],4)