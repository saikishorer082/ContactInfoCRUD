CREATE TABLE ContactsInfo_tbl (
    ID int NOT NULL IDENTITY(1001,1),
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
	Email varchar(255),
    PhoneNumber bigint,
	status int NOT NULL,
    PRIMARY KEY (ID)
);