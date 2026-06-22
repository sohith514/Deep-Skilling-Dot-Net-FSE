Factory Method Pattern
This folder contains a Java example of the Factory Method design pattern.

Purpose
The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. It allows a class to defer instantiation to subclasses.

Structure
Document.java: Interface representing a generic document.
DocumentFactory.java: Abstract factory defining the method for creating documents.
WordFile.java, PdfFile.java, ExcelFile.java: Concrete products that implement Document.
WordFactory.java, PdfFactory.java, ExcelFactory.java: Concrete factories that create each type of document.
FactoryDemo.java: Demo class showing how to use the factories to create documents without coupling client code to concrete product classes.
How it works
The client calls createDocument() on a factory.
The concrete factory creates and returns the appropriate Document instance.
The client uses the Document interface without knowing the concrete implementation.
Benefits
Supports open/closed principle by adding new document types without changing existing client code.
Reduces coupling between client and concrete classes.
Centralizes object creation logic in factory classes.
Usage
Run FactoryDemo to see the Factory Method pattern in action.
