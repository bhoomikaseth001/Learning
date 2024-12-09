import time
t=time.strftime('%H:%M:%S')
hour= int(time.strftime('%H'))
min= int(time.strftime('%M'))
sec= int(time.strftime('%S'))
print(hour,min,sec,sep=" : ")

if hour>0 and hour<12 : 
    print("Good Morning")
elif hour>=12 and hour<17:
    print("Good Afternoon")
else:
    print("Good Night")