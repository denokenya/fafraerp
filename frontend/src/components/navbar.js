import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer } from 'react-router-bootstrap';




const navbarhead = () => {

    return(

     <Navbar   sticky = "top"  bg="dark" variant="dark" collapseOnSelect  expand = 'sm' >

          
            <Navbar.Brand className = "text-success" href="#home" ><strong>School ERP</strong></Navbar.Brand>
            <Navbar.Toggle arial-aria-controls = 'responsive-navbar' />
            <Navbar.Collapse id='responsive-navbar-nav'className="justify-content-left" >

              <Nav >

              <NavDropdown className = "text-success" menuAlign="left" title="Front Office" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#admissionEnquiry">Admission Enquiry</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success"href="#visitoBook">Visitor Book</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#phoneCallLog">Phone Call Log</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#postalDispatch">Postal Dispatch</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#postalReceive">Postal Receive</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#complain">Complain</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#setUpFrontoffice">Setup Front Office</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Student Information" id="collasible-nav-dropdown">
                  <LinkContainer to = "/Students">  
                  <NavDropdown.Item className = "text-success" >Student Details</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item className = "text-success"href="#studentAdmission">Student Admission</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#onlineAdmission">Online Admission</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#disabledStudents">Disabled Students</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#multiClassStudent">Multi Class Student</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#bulkDelete">Bulk Delete</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#studentCategories">Student Categories</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#studentHouse">Student House</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#disabledReason">Disabled Reason</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Fees Collection" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#collectFees">Collect Fees</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#searchFeesPayment">Search Fees Payment</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#searchDueFees">Search Due Fees</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesMaster">Fees Master</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesGroup">Fees Group</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesType">Fees Type</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesDiscount">Fees Discount</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesCarryForward">Fees Carry Forward</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesReminder">Fees Reminder</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Income" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#addIncome">Add Income</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success"href="#searchIncome">Search Income</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#incomeHead">Income Head</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Expenses" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#addExpense">Add Expense</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success"href="#searchExpense">Search Expense</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#expenseHead">Expense Head</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Attendance" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#studentAttendance">Student Attendance</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success"href="#attendanceByDate">Attendance By Date</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#approveLeave">Approve Leave</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Examination" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#examGroup">Exam Group</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#examSchedule">Exam Schedule</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#examResult">Exam Result</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#designAdmitCard">Design Admit Card</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#printAdmitCard">Print Admit Card</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#designMarksheet">Design Marksheet</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#marksGrade">Marks Grade</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Online Examinations" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#onlineExam">Online Exam</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#questionBank">Question Bank</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Lesson Plan" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#manageLessonPlan">Manage Lesson Plan</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#manageSyllabusStatus">Manage Syllabus Status</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#lessons">Lessons</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#topic">Topic</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Academics" id="collasible-nav-dropdown">
                  <NavDropdown.Item className = "text-success" href="#examGroup">Class Timetable</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#examSchedule">Teachers TimeTable</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#examResult">Assign Class Teacher</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#designAdmitCard">Promote Students</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#printAdmitCard">Subject Group</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#designMarksheet">Subjects</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#marksGrade">Class</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#marksGrade">Sections</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className = "text-success" menuAlign="left" title="Human Resource" id="collasible-nav-dropdown">
                  <LinkContainer to = "/Teachers">
                  <NavDropdown.Item className = "text-success" href="#collectFees">Staff Directory</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item className = "text-success" href="#searchFeesPayment">Staff Attendance</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#searchDueFees">Payroll</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesMaster">Approve Leave Request</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesGroup">Apply Leave</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesType">Leave Type</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesDiscount">Teachers Rating</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesCarryForward">Designation</NavDropdown.Item>
                  <NavDropdown.Item className = "text-success" href="#feesReminder">Disabled Staff</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className = "text-success" href="reports">Reports</NavDropdown.Item>
              </NavDropdown>

              
              </Nav>

              </Navbar.Collapse>

             
        </Navbar>
    

    );
}

export default navbarhead;

