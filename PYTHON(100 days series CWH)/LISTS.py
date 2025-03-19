#Lists are mutable
marks=[30,50,60,"Harry",True]
print(marks)
print(type(marks))
print(marks[0])
print(marks[1])
print(marks[2])
print(marks[3])
print(marks[-3])
print(marks[len(marks)-3]) #better than using negative indexing
print(marks[5-3])
print(marks[2])

if "60" in marks:
    print("yes")
else:
    print("no")

if 60 in marks:
    print("yes")
else:
    print("no")

if "rry" in "Harry":
    print("yes")
else:
    print("no")

print(marks)
print(marks[1:-1]) 
print(marks[:]) #listname[start:len(listname)]
print(marks[::2])  #listname[start:end:jumpIndex]


'''List Comprehension'''
lst=[[i*i for i in range(20)]]
print(lst)
lst=[i*i for i in range(20) if i%2==0]
print(lst)

'''List Methods'''
l=[11,2,8,6,2]
print(l)
#l.append(7)  add 7 at the end of the list
#l.reverse()   reverse the list
#l.sort()   sort list in ascending order
#l.sort(reverse=True)  sort list in descending order
#print(l.index(2)) #this method returns the index of the first occurence of the list item
#print(l.count(2))
#print(l)

'''m=l assigning list like this will tend to alter the original list
m[0]=0
print(l)  '''

m=l.copy()
m[0]=0
print(l)

#l.insert(1,456)
n=[900,1000,1100]
k=l+n  #using this will not change the original list l
print(k)
#l.extend(n)        m ko kholo aur l ke end me daal do and this will change the original l list

#print(l)
