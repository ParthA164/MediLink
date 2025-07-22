# MediLink

MediLink is a full-stack web application for managing doctor appointments, user registrations, notifications, and more. It features a Node.js/Express backend and a React frontend.

## Features

### For Patients/Users
- **User Registration & Authentication**
  - Secure signup and login with JWT tokens
  - Profile management with personal details (name, age, gender, mobile, address)
  - Profile picture upload capability
  - Password hashing with bcrypt

- **Doctor Discovery & Booking**
  - Browse available approved doctors
  - View doctor profiles with specialization, experience, and fees
  - Book appointments with specific date and time
  - View appointment history and status

- **Appointment Management**
  - View all personal appointments
  - Track appointment status (Pending/Completed)
  - Receive notifications for appointment updates

- **Notifications**
  - Real-time notifications for appointment bookings
  - Status updates from doctors and admin
  - View all personal notifications

### For Doctors
- **Doctor Application Process**
  - Apply to join platform with specialization, experience, and fees
  - Application review system with pending status
  - Get notified of approval/rejection decisions

- **Profile Management**
  - Set specialization (e.g., Cardiologist, Dermatologist)
  - Define consultation fees
  - Specify years of experience
  - Profile linked to user account

- **Appointment Management**
  - View incoming appointment requests
  - Mark appointments as completed
  - Receive notifications for new bookings
  - Automatic notification system for patient interactions

### For Administrators
- **User Management**
  - View all registered users (excluding admin)
  - Delete user accounts when necessary
  - Access complete user information (except passwords)

- **Doctor Application Management**
  - Review pending doctor applications
  - Approve applications (converts user to doctor status)
  - Reject applications with automatic cleanup
  - Send approval/rejection notifications to applicants
  - Delete doctor accounts and associated data

- **System Oversight**
  - View all appointments across the platform
  - Monitor doctor and patient interactions
  - Manage platform users and content
  - Handle system notifications

## User Workflows

### Patient/User Workflow
1. **Registration & Setup**
   - Sign up with firstname, lastname, email, and password
   - System assigns default profile picture
   - Complete profile with age, gender, mobile, and address

2. **Finding & Booking Doctors**
   - Browse list of approved doctors
   - View doctor specialization, experience, and consultation fees
   - Select doctor and specify appointment date and time
   - Submit appointment booking request

3. **Appointment Management**
   - Receive booking confirmation notification
   - View all appointments with status tracking
   - Get notified when appointments are marked as completed
   - Track appointment history

4. **Profile Management**
   - Update personal information (age, gender, mobile, address)
   - Change password (with automatic hashing)
   - View and manage notification history

### Doctor Workflow
1. **Application Process**
   - Submit doctor application with specialization, experience, and fees
   - Wait for admin review (status remains "pending")
   - Receive notification of approval or rejection

2. **Post-Approval Setup**
   - User account automatically upgraded to doctor status
   - Profile becomes visible to patients for booking
   - Start receiving appointment notifications

3. **Patient Interaction**
   - Receive notifications for new appointment bookings
   - View patient details for scheduled appointments
   - Mark appointments as completed when consultation is done
   - Both doctor and patient get completion notifications

### Admin Workflow
1. **Application Review**
   - Review pending doctor applications
   - Check applicant's specialization, experience, and fees
   - Approve applications (upgrades user to doctor, sends approval notification)
   - Reject applications (deletes application, sends rejection notification)

2. **User Management**
   - View all registered users (patients and doctors)
   - Delete user accounts when necessary
   - Automatic cleanup of associated doctor profiles and appointments

3. **Doctor Management**
   - View all approved doctors
   - Access doctor profiles and associated user information
   - Delete doctor accounts (removes doctor status, cleans up data)
   - Monitor appointment activities across the platform

4. **System Monitoring**
   - Track all appointments in the system
   - Search appointments by user ID or doctor ID
   - Oversee platform notifications and user interactions

## Tech Stack
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js (in `client/`)
- **State Management:** Redux
- **Styling:** CSS

## Project Structure
```
MediLink2-deployed/
├── server.js                # Express server entry point
├── package.json             # Backend dependencies
├── controllers/             # Express controllers
├── db/                      # Database connection
├── middleware/              # Auth and other middleware
├── models/                  # Mongoose models
├── routes/                  # Express routes
└── client/                  # React frontend
    ├── package.json         # Frontend dependencies
    ├── public/              # Static assets
    ├── src/                 # React source code
    │   ├── components/      # Reusable components
    │   ├── helper/          # Helper functions
    │   ├── images/          # Image assets
    │   ├── middleware/      # Frontend middleware
    │   ├── pages/           # Page components
    │   ├── redux/           # Redux store and reducers
    │   └── styles/          # CSS files
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

The React app will run on [http://localhost:3000](http://localhost:3000) by default.

## Build for Production
To build the React frontend for production:
```bash
cd client
npm run build
```
The production build will be served by Express from the `client/build` directory.

## API Endpoints
- `/api/user` - User-related routes
- `/api/doctor` - Doctor-related routes
- `/api/appointment` - Appointment-related routes
- `/api/notification` - Notification routes


