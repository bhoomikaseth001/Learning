print ("Hello World",7,sep=" - ",end=" and ")
print("Salut")
print("Hello"+"Gurl")
print(12*8)

'''this is a multiline comment'''

print("Hello Everyone \"Welcome\"\nto the python learning with cwh")
#\" or \' is a escape sequence character


a=complex(8,4)
b= True
c="Bhoomika"
d=None
print("a: ",a,"\nThe type of a is ",type(a))
print("b: ",b,"\nThe type of b is ",type(b))
print("c: ",c,"\nThe type of c is ",type(c))
print("d: ",d,"\nThe type of d is ",type(d))

'''List: ordered collection of data separated by commas and enclosed within square brackets. They are mutable(can be modified)'''
list1=[8,2,3,{-4,5},["apple","banana"]]
print(list1)

'''Tuple: ordered collection of data separated by comma and enclosed within paranthesis. They are immutable(cannot be modified)'''
tuple1=(("parrot","sparrow",),("Lion","Tiger"))
print(tuple1)

'''Dict: A dictionary is an unordered collection of data containing a key : value pair and are enclosed within curly brackets'''
dict1={"name":"Bhoomika","age":19,"canVote":True}
print(dict1)

#OPERATORS
print(15+6)
print(15-6)
print(15*6)
print(15/6)
print(15//6)
print(15%6)
print(10**3)  #exponent operator

a="1"   #int("1") explicit type convertion
b="2"   #int("2")
print(a+b)   #int(a)+int(b) 
c=1
d=2
print(c+d)

#implicit type casting
a1=1.9
b1=5
print(a1+b1,"| type = ",type(a1+b1))

#TAKING USER INPUT
name=input("Enter your name: ")
print("Your name is ",name)

x=input("Enter first number : ") #these take input a string
y=input("Enter second number : ") 
print(x+y) #this will concatinate the values of x and y 
print(int(x)+int(y))
