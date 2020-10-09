# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Review

You are required to submit the following for review:

* The URL of the deployed application.

Here is the URL for my deployed application:
https://megancarnaghi.github.io/Password-Generator/

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

Here is my GitHub repository URL for this assignment: 
https://github.com/MeganCarnaghi/Password-Generator.git

*Here is an example of a password my code returns in the final product. 
(Password-Generator-Final-Product.jpg)

## Notes on My Code

1. CREATE VARIABLES
I began by creating variables for each of the different data types that could be included in the password (lowercase letters, uppercase letters, numbers, symbols). Each of the variables was an array containing the possible characters that could be used in the bassword.

I also created an emptyArray variable with an empty array as the value to push the data into when the user selected what data types they wanted to use in their password.

I then created a password variable with an empty string value to use for the final password.

2. DEFINE GENERATE PASSWORD FUNCTION
I created the prompt to ask the user what the length of their password would be. I used an if/else statement to either alert the user their password was too long or too short (if they input a value less than 8 or greater than 128), or moved on to the additional prompts (if they input a value between 8 and 128 characters) asking them what data types they wanted to use in their final password (lowercase letters, uppercase letters, numbers, symbols).

I then used if statements to push the appropriate data types into the empty array, based on the user's selections for what data types they wanted to use.

I used a for loop to run through the code and also set the password variable equal to the characters in the empty array.

I then returned the value of the password.

