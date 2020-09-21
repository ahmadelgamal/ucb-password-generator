# Password Generator

This app can be used by an employee to generate a random password based on criteria they’ve selected. The app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## User Story

- AS AN employee with access to sensitive data
- I WANT to randomly generate a password that meets certain criteria
- SO THAT I can create a strong password that provides greater security

## Functionality

- GIVEN I need a new, secure password:<br /><br />
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria<br /><br />
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password<br /><br />
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters<br /><br />
- WHEN prompted for character types to include in the password
- THEN I choose lowercase, uppercase, numeric, and/or special characters<br />
  (Special characters: `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`)
  <br /><br />
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected<br /><br />
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria<br /><br />
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page

## Screenshot

![Screenshot of web application, demonstrating appearance (UI), experience (UX) and functionality](./assets/images/demo.png)
