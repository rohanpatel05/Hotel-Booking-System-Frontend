
# Hotel Booking System - Frontend

This repository contains the frontend code for the Hotel Booking System, a fully-featured web application that allows users to book hotel rooms with ease. The frontend is built using React and incorporates a range of modern web development practices and tools.

A Hotel Booking System is a comprehensive platform designed to facilitate the booking and management of hotel rooms for both customers and hotel staff. This system provides an intuitive interface for users to search for available rooms, make reservations, and handle payments. It also offers backend management capabilities for hotel staff to oversee bookings, manage room availability, and ensure smooth operations.

## Key Features

- **User Registration and Login**: Secure authentication and authorization mechanisms to protect user data and provide personalized experiences.
- **Room Search and Booking**: Allows users to search for available rooms based on various criteria such as date, room type, and number of guests. Users can view room details, including photos, amenities, and pricing, and make reservations.
- **Payment Processing**: Integrated payment gateway for secure and efficient payment processing, supporting various payment methods.
- **Booking Management**: Users can view their booking history, modify existing reservations, and cancel bookings if necessary.
- **Room Management**: Hotel staff can add, edit, and remove room listings, set room availability, and manage pricing.
- **Reporting and Analytics**: Generate reports on bookings, revenue, and customer behavior to help hotel management make informed decisions.
- **Security**: Implements security measures such as data encryption, secure payment processing, and access control to protect sensitive information.

**Note:** The payment gateway is in the test mode, so don't use real payment info, instead use the [Stripe's test payment methods](https://docs.stripe.com/testing/) - https://docs.stripe.com/testing/.

## Features

- **Authentication and Authorization**: Utilizes JWT tokens for secure user authentication and authorization, managed with cookies.
- **State Management**: State is managed efficiently using Redux and TanStack Query, including custom hooks for seamless data fetching and caching.
- **Protected Routes**: Ensures that certain routes are accessible only to authenticated users.
- **Responsive Design**: Built with Bootstrap and styled-components to ensure a responsive and visually appealing design across all devices.
- **Payment Integration**: Integrated with Stripe for secure and reliable payment processing.
- **Validation**: Implements robust form validation and state validation using regular expressions and custom validation logic.
- **Testing**: Comprehensive testing suite using Jest to ensure code quality and reliability.
- **CI/CD Pipeline**: Automated build, test, and deployment pipeline using Jenkins and Docker, with Docker images pushed to a Docker repository.
- **Deployment**: Deployed on Render for a seamless deployment experience.
- **Linting and Best Practices**: Code quality maintained with (ES) Linting and adherence to best practices.
- **Folder Structure**: Organized and scalable folder structure for maintainability and scalability.

## Technologies and Tools

- React
- Cookies (for JWT tokens and secure storage mechanism)
- User Auth Context
- Redux State Management
- TanStack Query (functions and custom hooks)
- Custom Hooks
- Protected Routes
- Stripe Payment Gateway
- Bootstrap
- Styled-Components
- Docker
- Jenkins CI/CD Pipeline
- Regular Expressions
- (ES) Linting
- Jest Testing
- Render (Deployment)

## Links

- [Deployed App](https://hotel-booking-system-tczx.onrender.com/)
- [Backend Repository](https://github.com/rohanpatel05/Hotel-Booking-System-Backend/)
- [Docker Repository (App)](https://hub.docker.com/repository/docker/rohankp/hotel-booking-system-frontend/general/)

**Note:** the server will spin down with inactivity, which can delay requests by 50 seconds or more. So, if this is encountered, please try again.
