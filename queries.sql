-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select ProductName, CategoryName from Product Left Join Category On Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select Id, CompanyName, OrderDate From [Order] as O Join Shipper On O.ShipVia = Shipper.Id where OrderDate < "2012-08-09" Order by CompanyName asc;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select ProductName, Quantity from Product Join OrderDetail on Product.Id = OrderDetail.ProductId where OrderDetail.OrderId =10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select O.Id as OrderId, Customer.CompanyName, Employee.LastName from [Order] as O join Customer on O.CustomerId= Customer.Id join Employee on O.EmployeeId =Employee.Id;
