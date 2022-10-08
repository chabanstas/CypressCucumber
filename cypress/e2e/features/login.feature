Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Log in with valid data of a non-existent user
        When A user enters the Business Email "fake@email.com", the password "QWErty123!", and clicks on the login button
        Then The error message "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again." is displayed
    Scenario: Log in with valid data of a existent user
        When A user enters the Business Email "testmf034@gmail.com", the password "Rttubf7!qw12", and clicks on the login button
        Then The url will contains the "/app/home" subdirectory
    Scenario: Log in with incorrect Business Email
        When A user provides incorrect credentials, and clicks on the login button
            |email             |password|
            |incorrect@emailcom|QWErty123!|
        Then The email error message "Please enter a valid email address." is displayed
    Scenario: Log in with empty password field
        When A user provides "myemail@gmail.com" email field and empty password field, and clicks on the login button
        Then The Reuired password error message "Required" is displayed
    Scenario: Log in with empty email field
        When A user provides empty email field and "QWErty123!" password field, and clicks on the login button
        Then The Reuired email error message "Required" is displayed
    Scenario: Log in with empty fields
        When A user provides empty email and password fields, and clicks on the login button
        Then The "Required" error messages is displayed
    Scenario: Reset password with empty email field
        When A user clicks on Forgot your password? links, enter " " email and clicks on the reset button
        Then The Email Address "Required" error messages is displayed
    Scenario: Reset password with incorrect email
        When A user clicks on Forgot your password? links, enter "incorrect@emailcom" email and clicks on the reset button
        Then The email "Please enter a valid email address." error message is displayed
    Scenario: Reset password with valid data of a non-existent user
        When A user clicks on Forgot your password? links, enter "fake@email.com" email and clicks on the reset button
        Then The non-existent email "That email is not valid, or your browser could not be authenticated via recaptcha. Please try again." error message is displayed
    Scenario: Reset password with valid data of a existent user
        When A user clicks on Forgot your password? links, enter "testmf034@gmail.com" email and clicks on the reset button
        Then The existent email "We have accepted your password reset request." success message is displayed
    Scenario: Single Sign-On with empty email field
        When A user clicks on Single Sign-On section, enter empty email and clicks on the reset button
        Then The Company Address "Required" error messages is displayed
    Scenario: Single Sign-On with one space in email field
        When A user clicks on Single Sign-On section, enter " " email and clicks on the reset button
        Then The Single Sign-On Company Address "Please enter a valid email address." error messages is displayed
    Scenario: Single Sign-On with with incorrect email
        When A user clicks on Single Sign-On section, enter "incorrect@emailcom" email and clicks on the reset button
        Then The Single Sign-On Company Address "Please enter a valid email address." error messages is displayed
    Scenario: Single Sign-On with with valid data of a non-existent user
        When A user clicks on Single Sign-On section, enter "fake@email.com" email and clicks on the reset button
        Then The not found Company Address "The requested resource or URL could not be found." error messages is displayed
    Scenario: Single Sign-On with with valid data of a existent user
        When A user clicks on Single Sign-On section, enter "testmf034@gmail.com" email and clicks on the reset button
        Then The not found Company Address "The requested resource or URL could not be found." error messages is displayed
