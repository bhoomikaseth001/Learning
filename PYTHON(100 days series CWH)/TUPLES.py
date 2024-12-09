'''Tuples are immutable, hence if you want to add, remove or change tuple items, then first convert tuple to a list'''
tup=(1,2,3)
tup=(1)   #<class 'int'> 1
tup=(1,)  #<class 'tuple'> (1,)
print(type(tup),tup)
tup1=(1,4,678,"Hello",False)
if 3421 in tup:
    print("Yes present")
tup2=tup1[1:4]
print((tup2))

print("\n")

'''Manipulating Tuples'''

countries=("Spain","Italy","India","England","Germany")
temp=list(countries)
temp.append("Russia")
temp.pop(3)
temp[2]="Finland"
countries=tuple(temp)
print(countries)

#we can convert the tuple to a list, manipulate items of the list using list methods, then convert list back to tuple
#However,we can directly concatenate two tuple without converting them to list as then we will be creating a new tuple instead to changing the existing one

name1=("Bhoomi","Ananya","Sejal","Ananya","Ananya")
name2=("Arnav","Ashwani","Ayush")
friends=name1+name2
print(friends)
print(name1.count("Ananya"))
print(name1.index("Ananya",1,4)) #first index 
