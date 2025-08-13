<<<<<<< HEAD
# Vulnerable-application
Testing
=======
# OWASP Top Ten Vulnerable Application

This project is designed for educational purposes to demonstrate common web application vulnerabilities as outlined in the OWASP Top Ten. It includes intentionally vulnerable code patterns to help users learn about security flaws and test tools for detecting vulnerable libraries.

## Project Structure

```
owasp-top-ten-vulnerable-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── index.js         # Contains the IndexController with vulnerable methods
│   ├── routes
│   │   └── index.js         # Sets up application routes, potentially vulnerable
│   ├── models
│   │   └── user.js          # User model with potential vulnerabilities
│   └── views
│       └── index.ejs        # Main view template with user input fields
├── package.json              # npm configuration file with dependencies
└── README.md                 # Project documentation
```

## Getting Started

To set up and run the application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd owasp-top-ten-vulnerable-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Included Vulnerabilities

This application includes examples of the following vulnerabilities:

- **Injection Flaws:** Demonstrated in the user model with SQL injection patterns.
- **Broken Authentication:** Potentially insecure user authentication methods.
- **Sensitive Data Exposure:** Insecure password storage practices.
- **XML External Entities (XXE):** Vulnerabilities in XML processing (if applicable).
- **Broken Access Control:** Inadequate checks for user permissions.
- **Security Misconfiguration:** Default configurations that are insecure.
- **Cross-Site Scripting (XSS):** User input fields in the view that are not properly sanitized.
- **Insecure Deserialization:** Potential issues with deserializing user input.
- **Using Components with Known Vulnerabilities:** Intentionally including vulnerable libraries in `package.json`.
- **Insufficient Logging & Monitoring:** Lack of proper logging mechanisms.

## Disclaimer

This application is intended for educational purposes only. Do not deploy it in a production environment. Always follow best practices for security in real-world applications.
>>>>>>> 1faae14 (Add OWASP Top Ten vulnerable demo app)
