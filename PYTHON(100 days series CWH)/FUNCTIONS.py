#FUNCTIONS

def calculateGmean(a,b):
    gmean=(a*b)/(a+b)
    print(gmean)

def isGreater(a,b):
    if(a>b):
        print("First number is greater")
    else:
        print("Second number is greater or equal")

def isLesser(a,b):
    pass
    #if we do not use pass here it will throw error, using 'pass' will let the control execute the other statements
    

a=9
b=8
isGreater(a,b)
calculateGmean(a,b)

c=18
d=90
isGreater(c,d)
calculateGmean(c,d)

'''def average(a=3,b=6):
    print("The average is ",(a+b)/2)
average()'''
#average(4,8)
#average(1,5)
#average(b=9)

def average(*numbers):
    sum=0
    for i in numbers:
        sum=sum+i
    #return 7
    return sum/len(numbers)

avg=average(5,5)
print("Average is : ",avg)

def name(*name):
    print("Hello,",name[0],name[1],name[2])

name("James", "Helena", "Josh")


def NAME(**NAME):
    print("Hello,",NAME["FNAME"],NAME["LNAME"])
NAME(LNAME="Seth",FNAME="Bhoomika")
