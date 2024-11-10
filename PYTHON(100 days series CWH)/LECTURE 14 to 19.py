#CONDITIONALS
# >,<,>=,<=,==,!=
# from datetime import datetime as dt

# now=dt.now()
# print("Without Formatting : ",now)

# s=now.strftime("%a %m %y")
# print(s)

# s=now.strftime("%A %m %Y")
# print(s)

# s = now.strftime("%I %p %S")
# print(s)

# s = now.strftime("%j")
# print(s)


#MatchCase Statements
'''x=int(input("Enter the value of x : "))
match x:
    case 0: 
        #if x is 0
        print("x is zero")
    #case with if-condition
    case 4:
        print("x is four")
    case _ if x==90:
        print(x," is ninety")
    case _ if x==80:
        print(x," is eighty")
    case _:
        print(x)

    #it is not necessary to use break statement within each in python
'''

#LOOPS
'''
name="Bhoomika"
for i in name:
    print(i,end=" ")
print("\n")

colors=["RED","BLUE","GREEN","YELLOW"]
for color in colors:
    print(color)
    for c in color:
        print(c)
'''

'''
for k in range(0,5):
    print(k)

for i in range(0,21,4): #range(start,stop,step)
    print(i,end=" ")
'''

'''
count =5
while(count>0):
    print(count,end=" ")
    count=count-1
else:
    print("\ncounter is zero")

#emulation of do-while loop

i=0
while True:
    print(i)
    i=i+1
    if i%10 == 0:
        break
'''

#BREAK AND CONTINUE 
for i in range(1,12):
    if i==11:
        print("out of the loop")
        break
    print("5 X ",i," = ",5*i)

for i in range(1,13):
    if i==11:
        print("Skip the iteration")
        continue
    print("5 X ",i," = ",5*i)