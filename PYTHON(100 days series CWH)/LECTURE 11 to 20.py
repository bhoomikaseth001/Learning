name="Bhoomika"
friend="Sejal"
print("Hello, "+name)

# Multiline string
n1='''bhoomika 
seth'''
print(n1)
print(friend[0],end=" ")
print(friend[1],end=" ")
print(friend[2],end=" ")
print(friend[3],end=" ")
print(friend[4])
#print(friend[5],end=" ")  #This will throw an error(string index out of range)

#looping with strings
for ch in name:
    print(ch,end=" ")
print()
print("Hello")

#SLICING
print(len(name))
print(name[0:len(name)])
print(name[8])