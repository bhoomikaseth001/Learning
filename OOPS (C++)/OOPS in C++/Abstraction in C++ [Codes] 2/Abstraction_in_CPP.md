# Abstraction in C++

## What is Abstraction?

1.  Delivering only essential information to the outer world while
    masking the background details.
2.  It is a design and programming method that separates the
    **interface** from the **implementation**.
3.  **Real-life example:** We use various functionalities of AirPods
    without knowing their actual implementation or working.
4.  To drive a car, one only needs to know the driving process and not
    the mechanics of the car engine.

## Abstraction in Header Files

1.  Function implementation is hidden in header files.
2.  We can use the same program without knowing its internal working.
3.  **Example:** `sort()` is used to sort an array, list, or collection
    of items. We know that providing a container to `sort()` will sort
    it, but we do not need to know the sorting algorithm used
    internally.

## Abstraction Using Classes

1.  Data members and member functions are grouped into classes using
    access specifiers.
2.  A class can choose which data members are visible to the outside
    world and which are hidden.

### Example

``` cpp
class AbstractionExample {
private:
    int num;
    char ch;

public:
    void setMyValues(int n, char c) {
        num = n;
        ch = c;
    }

    void getMyValues() {
        cout << "Number is: " << num << endl;
        cout << "Char is: " << ch << endl;
    }
};
```

### Explanation

-   `num` and `ch` are declared `private`, so they are hidden from the
    outside world.
-   These data members cannot be accessed directly outside the class.
-   Their values can be set and accessed through the public member
    functions.

## What is an Abstract Class?

1.  A class that contains at least one **pure virtual function** is
    called an abstract class.
2.  Abstract classes cannot be instantiated.
3.  The concept of an abstract class comes from abstraction.

## Design Strategy

1.  Abstraction divides code into two categories: **interface** and
    **implementation**.
2.  Keep the interface separate from the implementation so that changes
    in the underlying implementation do not affect the interface.
3.  Programs using these interfaces remain unaffected by implementation
    changes and only need recompilation with the latest implementation.
