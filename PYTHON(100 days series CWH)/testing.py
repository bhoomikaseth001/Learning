# '''Prime numbers'''

# m=int(input("Enter initial limit"))
# n=int(input("Enter final limit"))

# for num in range(m,n+1):
#     if num > 1 :
#         for i in range(2,num):
#             if num % i == 0:
#                 break  
#         else: 
#             print(num, end=" ")


# '''Create a nested dictionary, store data and retirieve specific data'''
# students={
#     101:{"name":"Bhoomi", "age":19, "marks":85, "course":"CSE"}, 
#     102:{"name":"Bhoomika", "age":20, "marks":95, "course":"ECE"}, 
#     103:{"name":"Vyakhya", "age":15, "marks":90, "course":"ME"}
# }

# student_id=int(input("Enter Student ID to retrieve details: "))

# if student_id in students:
#    print("\nStudent Details:")
#    for key, value in students[student_id].items():
#         print(f"{key.capitalize()}: {value}")
# else:
#     print("Student ID not found.")


