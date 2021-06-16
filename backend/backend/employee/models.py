from django.db import models
from datetime import datetime
from django.utils import timezone
from django.contrib.auth.models import User

# ***************Department*******************
# _____________________________________________

FACULTY = "Faculty"
ACCOUNTANT = "Accountant"
ADMIN = "Admin"
RECEPTIONIST = "Receptionist"
PRINCIPAL = "Principal"
DIRECTOR = "Director"
TECHNICAL_HEAD = "Technical Head"
ACADEMIC = "Academic"
LIBRARY = "Library"
SPORTS = "Sports"
SCIENCE = "Science"
COMMERCE = "Commerce"
ARTS = "Arts"
EXAM = "Exam"
FINANCE = "Finance"
TEACHER = "Teacher"
LIBRARIAN = "Librarian"
SUPER_ADMIN = "Super Admin"
MALE = "Male"
FEMALE = "Female"
SINGLE = "Single"
MARRIED = "Married"
WIDOWED = "Widowed"
SEPARATED = "Separated"
NOT_SPECIFIED = "Not Specified"

# ***************Designation*******************
# _____________________________________________
DESIGNATION = (
    (FACULTY, "Faculty"),
    (ACCOUNTANT, "Accountant"),
    (ADMIN, "Admin"),
    (RECEPTIONIST, "Receptionist"),
    (DIRECTOR, "Director"),
    (TECHNICAL_HEAD, "Technical Head"),

)
# ***************Department*******************
# _____________________________________________


DEPARTMENT = (
    (ACADEMIC, "Academic"),
    (LIBRARY, "Library"),
    (SPORTS, "Sports"),
    (SCIENCE, "Science"),
    (COMMERCE, "Commerce"),
    (ARTS, "Arts"),
    (EXAM, "Exam"),
    (ADMIN, "Admin"),
    (FINANCE, "Finance"),

)

# ***************Designation*******************
# _____________________________________________


ROLE = (
    (ADMIN, "Admin"),
    (TEACHER, "Teacher"),
    (ACCOUNTANT, "Accountant"),
    (LIBRARIAN, "Librarian"),
    (RECEPTIONIST, "Receptionist"),
    (SUPER_ADMIN, "Superadmin"),
)

# ***************Designation*******************
# _____________________________________________

GENDER = (

    (MALE, "Male"),
    (FEMALE, "Female"),
)

# ***************MARITAL STATUS*******************
# _____________________________________________

MARITAL_STATUS = (
    (SINGLE, "Single"),
    (MARRIED, "Married"),
    (WIDOWED, "Widowed"),
    (SEPARATED, "Separated"),
    (NOT_SPECIFIED, "Not Specified")


)


class Employee (models.Model):
    employeeID = models.CharField("Employee ID",
                                  max_length=50, null=False, blank=False, unique=True)
    user = models.ForeignKey(
        User, related_name="employees",
        on_delete=models.CASCADE, null=True
    )
    employeeRole = models.CharField("Role",
                                    choices=ROLE, max_length=50, blank=False,  default=ADMIN)
    employeeDesignation = models.CharField("Designation",
                                           choices=DESIGNATION, max_length=50, blank=False, default=FACULTY)
    employeeDepartment = models.CharField("Department",
                                          choices=DEPARTMENT, max_length=50, blank=False,  default=ACADEMIC)
    employeeFirstName = models.CharField("First Name",
                                         max_length=60, blank=False, null=False, default='name')
    employeeLastName = models.CharField("Last Name",
                                        max_length=60, blank=False, null=False, default='name')
    employeeFatherName = models.CharField("Father Name",
                                          max_length=60, blank=True, null=True, default='name')
    employeeEmail = models.EmailField("Email",
                                      null=False, blank=False, unique=True, default='de@gmail.com')
    employeeGender = models.CharField("Gender",
                                      choices=GENDER, max_length=10, blank=False, default=MALE)
    employeeDateOfBirth = models.DateField("Date Of Birth",
                                           null=True, blank=True, default='1900-01-01')
    employeeDateOfJoining = models.DateTimeField(
        "Date Of Joining", null=True, blank=True)

    employeePhone = models.CharField("Mobile Number",
                                     max_length=17, null=False, blank=False, unique=True, default='0711210516')
    employeeEmergencyContactNumber = models.CharField("Emergency Contact Number",
                                                      max_length=17, null=False, blank=True, default='11111111')
    employeeMaritialStatus = models.CharField("Maritial Status",
                                              choices=MARITAL_STATUS, max_length=200, blank=True, default=SINGLE)
    employeeCurrentAddress = models.TextField("Current Address",
                                              max_length=300, null=True, blank=True)
    employeeParmanentAddress = models.TextField("Parmanent Address",
                                                max_length=300, null=True, blank=True)
    employeeQualification = models.TextField("Qualification",
                                             max_length=300, null=True, blank=True)
    employeeWorkExperience = models.TextField("Work Experience",
                                              max_length=300, null=True, blank=True)
    employeeNote = models.CharField(
        "Note", max_length=300, null=True, blank=True)

    def __str__(self):
        return self.employeeFirstName

    class Meta:
        ordering = ["employeeRole"]
        verbose_name = "employee"
        verbose_name_plural = "employees"
