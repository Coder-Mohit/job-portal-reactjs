import React from 'react';
import JobListing from '../components/JobListing';  // Import JobListing component
import './JobSearch.css';  // Import the CSS file for styling

const JobSearch = () => {
    // Example job listings data
    const jobs = [
        { jobTitle: 'Frontend Developer', company: 'Tech Co.', location: 'Remote', description: 'Develop awesome UIs' },
        { jobTitle: 'Backend Developer', company: 'Server Co.', location: 'Onsite', description: 'Build robust APIs' },
    ];

    return (
        <div className="job-search">
            <h1>Job Listings</h1>
            {jobs.map((job, index) => (
                <JobListing key={index} {...job} />  {/* Display job listings */}
            ))}
        </div>
    );
};

export default JobSearch;
