CREATE DATABASE CampusNet;
USE CampusNet;

CREATE TABLE Professors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE Students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE Grades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  grade FLOAT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE Attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  attendance TINYINT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id)
);

CREATE TABLE Courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  professor_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  FOREIGN KEY (professor_id) REFERENCES Professors(id)
);

CREATE TABLE CourseAssignment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id),
  FOREIGN KEY (course_id) REFERENCES Courses(id)
);

CREATE TABLE Resources (
  id INT AUTO_INCREMENT PRIMARY KEY,
  path VARCHAR(200) NOT NULL
);