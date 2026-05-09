class Student:
    college_name="PSIT college"  #class attribute...this will be stored only once in the memory doesn;t matter how many objects are there
    #all those attributes which are common to all the object are created as class attributes

    name = "anonymous"


    '''  this defalt constructor will be called automatically by the python if not created 
    self is the very first parameter to be added in the constructor
    '''

    #default constructor
    def __init__(self):
        pass

    #parameterized constructor
    def __init__(self, name, marks):
        #if we want different values everytime we call the constructor then we will declare it like this....self.name
        self.name = name  #object attribute > class attribute
        self.marks = marks
        print("new student added")


    def welcome(self):
        print("welcome",self.name)

    ''' def hello():
        print("hello") '''
    #if we try to run this method, it will give error bcz we have not used self parameter here( we didn;t use cz there is no need
    # this means we can create this method as a static method )   


    #static methods wirk at class level and they can be called without creating an object of the class
    @staticmethod   #decorator
    def hello():
        print("hello")

s1=Student("karan",97)
s1.welcome()
print(s1.name,s1.marks)

s2=Student("raj",93)
print(s2.name,s2.marks)

print(s2.college_name) 
#or
print(Student.college_name)
s1.hello()





