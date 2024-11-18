name="Bhoomika"
friend='Sejal'
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
print(name[:8])
print(name[:])
print(name[0:-4]) #this -4 will be interpreted as len(name)-4.
print(name[-1:-3]) #this will not print anything as it will br interpreted as 7:5 which do not make any sense
print(name[-3:-1]) # 5:7 
nm="Harry"
print(nm[-4:-2])


#STRING METHODS
'''String is immutable'''
s="!!! Bhoomika !!!!"
print(len(s))
print(s.upper())
print(s.lower())
print(s.strip("!"))
print(s.lstrip("!"))
print(s.rstrip("!"))
print(s.replace("Bhoomika","Sejal")) #it will replace all the occurence of Bhoomika in s with Sejal
print(s.split(" "))

heading="introduction to Python programming"
print(heading.capitalize()) #turns the first character of the string to uppercase and rest of the string to the lowercase

str="Welcome to the Console!!!"
print(len(str))
print(len(str.center(50)))
print(str.center(50))

print(s.count("Bhoomika"))

print(str.endswith("!!!")) #returns boolean value
print(str.endswith("to",4,10))

str1="He's a good boy, and is intelligent. He is also honest."
print(str1.find("is")) #will give the index of the first occurence of the string and if the string is not present it will return -1.
print(str1.find("kind"))
#print(str1.index("kind"))  //this will give an error as "kind" is not present in str1

str2="WELCOME"
print(str2.isalpha())
str3="welcome000"
print(str2.isalnum())
print(str3.isalnum())
print(str3.islower())
print(str2.isupper())

str4="I wish you a \nHappy Diwali"
print(str3.isprintable())
print(str4.isprintable())  #\n is not a printable character

str="        "  #using spaceabar
print(str.isspace())
str1="       "  #using Tab
print(str1.isspace())

str="World Health Organisation"
print(str.istitle())
str1="Hello world"
print(str1.istitle())
print(str1.startswith("Hello"))
print(str1.title())
print(str1.swapcase())



