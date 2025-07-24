##  Entity Relationships

This section describes the database schema and relationships designed for the **Schedula Doctor Appointment Booking System**. The model is designed to support robust scheduling, patient management, and doctor–patient communication.

---

###  users
Holds authentication and role data for all system users.

**Fields:**
- id (PK)
- email
- password_hash
- role *(patient | doctor | admin)*
- full_name
- created_at
- updated_at

---

### doctors
Extends user with doctor-specific profile information.

**Fields:**
- id (PK)
- user_id (FK → users.id)
- specialty
- bio
- profile_image
- rating
- created_at
- updated_at

**Relationship:**
- 1-to-1 with **users**

---

###  patients
Represents patient records that belong to a user (e.g., a parent managing dependents).

**Fields:**
- id (PK)
- user_id (FK → users.id)
- name
- age
- gender
- medical_notes
- created_at
- updated_at

**Relationship:**
- Many **patients** per **user** (1:M)

---

###  availability_slots
Defines available time slots for doctor appointments.

**Fields:**
- id (PK)
- doctor_id (FK → doctors.id)
- date
- time
- is_booked
- created_at
- updated_at

**Relationship:**
- Many **availability_slots** per **doctor** (1:M)

---

###  appointments
Represents scheduled appointments between patients and doctors.

**Fields:**
- id (PK)
- patient_id (FK → patients.id)
- doctor_id (FK → doctors.id)
- scheduled_time
- status *(confirmed | cancelled | rescheduled)*
- notes
- created_at
- updated_at

**Relationships:**
- Many **appointments** per **doctor** (1:M)
- Many **appointments** per **patient** (1:M)

---

###  appointment_history
Tracks reschedules or changes to appointment timing.

**Fields:**
- id (PK)
- appointment_id (FK → appointments.id)
- previous_time
- new_time
- changed_by *(user id)*
- change_reason
- created_at

**Relationship:**
- Many **appointment_history** entries per **appointment** (1:M)

---

###  chat_messages
Enables patient–doctor messaging within the app.

**Fields:**
- id (PK)
- sender_id (FK → users.id)
- receiver_id (FK → users.id)
- message
- sent_at

**Relationships:**
- Many **chat_messages** sent by a **user** (1:M)
- Many **chat_messages** received by a **user** (1:M)

---

###  Summary of Relationships
- users **1 ↔ 1** doctors
- users **1 ↔ M** patients
- doctors **1 ↔ M** availability_slots
- doctors **1 ↔ M** appointments
- patients **1 ↔ M** appointments
- appointments **1 ↔ M** appointment_history
- users **1 ↔ M** chat_messages (as sender)
- users **1 ↔ M** chat_messages (as receiver)
