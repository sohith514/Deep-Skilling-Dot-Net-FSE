
# Singleton Pattern Example

## Overview

This project demonstrates the implementation of the Singleton Design Pattern in Java using a Logger utility class.

The Singleton Pattern ensures that only one instance of a class exists throughout the application's lifecycle and provides a global access point to that instance.

In this example, a Logger class is used to maintain consistent logging behavior across the application.

---

## Project Structure

```
Logger.java
TestSingleton.java
```

### Logger.java

Contains the Singleton implementation.

Responsibilities:

* Creates only one Logger object.
* Prevents direct object creation using a private constructor.
* Provides a public method to access the single instance.
* Handles logging messages.

### TestSingleton.java

Tests the Singleton implementation.

Responsibilities:

* Obtains Logger instances.
* Logs multiple messages.
* Verifies that only one Logger object exists.
* Displays hash codes to prove both references point to the same object.

---

## Singleton Design Pattern

The Singleton Pattern is a Creational Design Pattern that restricts a class to a single object.

Key Features:

* Only one instance is created.
* Global access point.
* Controlled object creation.
* Memory efficient.

---

## How It Works

### Step 1

The Logger constructor is declared private.

```java
private Logger() {
    System.out.println("Logger Instance Created");
}
```

This prevents object creation using:

```java
new Logger();
```

from outside the class.

### Step 2

A static instance variable stores the single Logger object.

```java
private static Logger instance;
```

### Step 3

The getInstance() method creates the object only once.

```java
public static Logger getInstance() {
    if(instance == null) {
        instance = new Logger();
    }
    return instance;
}
```

### Step 4

All requests for Logger objects receive the same instance.

---

## Expected Output

```
Logger Instance Created
LOG: First message
LOG: Second message
Only one Logger instance exists.
Logger1 HashCode: 1450495309
Logger2 HashCode: 1450495309
```

The identical hash codes confirm that both references point to the same object.

---

## Benefits of Singleton Pattern

* Reduces unnecessary object creation.
* Saves memory.
* Provides centralized access to resources.
* Ensures consistency across the application.
* Commonly used for logging, configuration management, caching, and database connections.

---

## Time Complexity

| Operation     | Complexity |
| ------------- | ---------- |
| getInstance() | O(1)       |
| log()         | O(1)       |

---

## Conclusion

This project successfully demonstrates the Singleton Design Pattern by implementing a Logger class that guarantees a single shared instance throughout the application. The test program verifies the behavior by showing that multiple references access the same Logger object.
