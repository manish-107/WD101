https://drive.google.com/drive/folders/1eKhi4xzD0VZ4DJ535glP5Vy-fS4c-eG9
# User Registration Form

1. Users can enter their name, email, password, date of birth, and accept terms & conditions.
Form validation ensures that the Date of Birth (DOB) falls between 18 and 55 years.
Form Data Storage

2. User registration data (name, email, password, date of birth, terms acceptance) is stored in localStorage.
Data persists even after page reload.
Dynamic Table Display

3. A table dynamically displays the stored user data.
Table includes columns for Name, Email, Password, Date of Birth, and Terms Acceptance status.
Users can see the registered entries immediately after submission.
Date of Birth Validation

4. DOB input field ensures the selected date falls within the allowed age range of 18-55 years.
Local Storage Management

5. User entries are stored in the browser’s localStorage.
Data retrieval from localStorage on page load to populate the table with previously saved user information.
Reset Form after Submission

6. The registration form resets automatically after submission, ready for the next user entry.
