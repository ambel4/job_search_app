import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await axios.get('/api/jobs');
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default HomePage;

