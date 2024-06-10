# Sets - like lists BUT 
# cannot be indexed 
# dont hold duplicate values 

# When to use:
# 1. all values have to be unique --store has many dif. transactions, store the names of the companys in a set, (there can never be a duplicate so they wonr be able to accidently readd...)
# 2. When we want to comapre between two groups of values/sets of values 
# (ex)two sets of comanys working w/- African ountries and European, want to comapre 

a_set = {1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,} #1,2,3

print(a_set)

#a_set[1] cannot be indexes - returns an error - need to be converted to a list to do so

b_set = {3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,} #3,4,5

print(a_set.difference(b_set)) #1,2
print(b_set.difference(a_set)) #4,5

print(a_set.intersection(b_set)) #3

print(a_set.union(b_set)) #1,2,3,4,5

# lookup - checking if value is inside the data collection
print(1 in a_set)

a_set.add(4)
print(a_set)
