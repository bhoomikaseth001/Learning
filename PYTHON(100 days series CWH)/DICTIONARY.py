dic={
    "Bhoomika" : "Human being",
    "Spoon" : "Object"
}

print(dic["Bhoomika"])

dict = { 154:"Bhawani", 155:"Bhoomi", 156:"Bhoomika" }
print(dict[155])


info={'name':'Karan', 'age':19, 'eligible':True}
print(info)
print(info['name'])  #Karan
#print(info['name1'])   this will give a KeyError
print(info.get('eligible'))  #True
print(info.get('eligible1'))  #None  (This will not give the error)
print(info.keys())  #will print all the keys
print(info.values())  #will print all the values
for key in info.keys():
    print(f"The value corresponding to the key {key} is {info[key]}")

print(info.items())
for key, value in info.items():
   print(f"The value corresponding to the key {key} is {info[key]}")



"""DICTIONARY METHODS"""

ep1={122:45, 123:89, 567: 69,670:69}
ep2={222:67, 566:90}

print(ep1)

# ep1.update(ep2)
# print(ep1)
# ep1.clear()
 
ep1.pop(122)
print(ep1)  #an empty dictionary will be printed

ep1.popitem() # removes the last item from the dict
print(ep1)

del ep1[123]   #delete key 123
print(ep1)

del ep1["123"]   #KeyError : is 123 is present as an integer in the dictionary and not as a string
print(ep1)

# del ep1  #delelte the entire dictionary
# print(ep1)

empt={}   #initializing and printing an empty dictionary
print(empt)
