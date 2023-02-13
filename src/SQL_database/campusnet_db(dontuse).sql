CREATE DATABASE CampusNet;
USE CampusNet;

CREATE TABLE Professors (
  id CHAR(36) PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE Students (
  id CHAR(36) PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE Grades (
  id CHAR(36) PRIMARY KEY,
  student_id CHAR(36) NOT NULL,
  grade FLOAT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id),
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE Attendance (
  id CHAR(36) PRIMARY KEY,
  student_id CHAR(36) NOT NULL,
  attendance TINYINT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id),
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE Courses (
  id CHAR(36) PRIMARY KEY,
  professor_id CHAR(36) NOT NULL,
  name VARCHAR(100) NOT NULL,
  FOREIGN KEY (professor_id) REFERENCES Professors(id),
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE CourseAssignment (
  id CHAR(36) PRIMARY KEY,
  student_id CHAR(36) NOT NULL,
  course_id CHAR(36) NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id),
  FOREIGN KEY (course_id) REFERENCES Courses(id),
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE Resources (
  id CHAR(36) PRIMARY KEY,
  path VARCHAR(200) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
);