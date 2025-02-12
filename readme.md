# Project Idea: Campus Connect
## One-stop platform to collaborate, share, and grow on campus.

Problem Statement:
Many students face the issue of creating all notes by themselves, and most of the time struggle to use the ones that the teacher’s have provided, as they are very lengthy and don't cover the topic properly.

Students are not aware of the events that happen in the campus, so are not able to participate in them or attend them. Even the organizers find it difficult to publicise the event.

Often students tend to sell their resources, such as old electronics/clothes that they no longer use; and they are not able to find another student who needs it. This mostly happens due to the lack of reach.

## Revised Solution:
1. Post & request help: Here students will be able to request other students for notes and would be able to post notes, summaries or class recording and provide essential details about missed lectures.

2. Event Calendar: The calendar would have details about the upcoming events that can be posted by the organizers with their details, i.e.
    - Their contact information
    - When it is held
    - How to participate in it

3. Campus Marketplace: A section of the application where students can sell/trade items like books, electronics etc. within the campus community.

## Project Development Plan

### Phase 1: Planning and Requirement Gathering
**Timeframe:** 1 week  
- Finalize the core functionalities for each module:
  - Post & Request Help: Notes upload, request, and search.
  - Event Calendar: Event postings and calendar view.
  - Campus Marketplace: Item listings, search, and trade options.
- Conduct a quick user survey to validate core functionalities and prioritize key features.
- Define the tech stack:
  - Frontend: Flutter or React.js.
  - Backend: Node.js with Express or Django.
  - Database: MongoDB (flexible schema for diverse data types).
  - Storage: Firebase Storage or AWS S3 for files.
- Create ER diagrams and API specifications for database design and API endpoints.

### Phase 2: Design
**Timeframe:** 2 weeks  
- Wireframes and Prototypes:
  - Design screens for each feature:
    - Post & Request Help: Upload notes, search for notes, request interface.
    - Event Calendar: Calendar view, event details, and event creation.
    - Campus Marketplace: Item listing, item details, search, and trade request.
  - Tools: Use Figma or Adobe XD for prototyping.
- User Journey Mapping:
  - Define the flow for:
    - Uploading notes.
    - Searching for and requesting notes.
    - Browsing the event calendar and adding events.
    - Listing and searching marketplace items.

### Phase 3: Development (MVP)
**Timeframe:** 6–8 weeks  
- **Week 1–2:** Backend Development
  - Set up the backend:
    - Create APIs for:
      - Notes upload, retrieval, and search.
      - Event posting and retrieval.
      - Item listing, search, and trade options.
    - Implement database schema for:
      - Users (authentication with email validation).
      - Notes (metadata like title, subject, uploader, and file path).
      - Events (title, date, location, description).
      - Marketplace (item details, price, condition).
    - Implement basic authentication using JWT or Firebase Auth.
- **Week 3–5:** Frontend Development
  - Build user interfaces for:
    - Post & Request Help:
      - Upload form for notes with file size limit.
      - Search interface with filters (e.g., subject, uploader).
    - Event Calendar:
      - Calendar view with clickable events.
      - Event submission form.
    - Marketplace:
      - Item listing creation with photo upload.
      - Search and filter interface.
  - Integrate APIs with the frontend.
- **Week 6–7:** Storage and Validation
  - Implement file upload functionality for notes and marketplace images.
  - Use Firebase Storage or AWS S3 for efficient storage management.
  - Add basic validation:
    - File size limits for uploads.
    - Verify user identity with student email.
- **Week 8:** Testing
  - Conduct functional testing:
    - Test APIs for edge cases (e.g., invalid file format, large uploads).
    - Verify frontend interactions (e.g., search filters, upload flows).
    - Perform user acceptance testing (UAT) with a small group of students.

### Phase 4: Deployment
**Timeframe:** 1 week  
- Deploy the backend to a cloud platform like AWS or Heroku.
- Publish the app:
  - Mobile: Release APK for Android and TestFlight for iOS (if Flutter).
  - Web: Host on platforms like Netlify or Vercel.
- Monitor the system for performance and bugs.

### Phase 5: Launch and Feedback
**Timeframe:** 1 week  
- Launch the app for a single campus to start.
- Collect feedback through:
  - In-app surveys or forms.
  - Feedback sessions with early adopters.

### Phase 6: Iteration and Fixes
**Timeframe:** Ongoing (2–4 weeks post-launch)  
- Fix bugs reported by users.	
- Optimize the database for faster search and retrieval.
- Add any small features requested by users if feasible.
