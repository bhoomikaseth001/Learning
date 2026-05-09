# class Account:
#     def __init__(self, a_no, a_pass):
#         self.a_no=a_no
#         self.__a_pass=a_pass  #adding __ before the variable name makes it private and it can not be accessed outside the class directly


#     def reset_pass(self):
#         print(self.__a_pass)

# acc1=Account("1234", "wefdf")

# print(acc1.a_no)
# print(acc1.reset_pass())
# print(acc1.__a_pass)#will give errror
# print(acc1.a_pass) #will give error


class Person:
    __name="anonymous"

    def __hello(self):  #private method
        print("hello person!")

    def welcome(self):   #use of that private method
        self.__hello()

p1=Person()

print(p1.hello())
print(p1.welcome())

