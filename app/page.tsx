import AboutMe from '@/components/AboutMe';
import RecentProjects from '@/components/RecentProjects';
import React from 'react';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      {/* About Me Section */}
      <section className="w-full">
        <AboutMe />
      </section>

      {/* Recent Projects Section */}
      <section className="w-full mt-16">
        <RecentProjects />
      </section>
    </main>
  );
};

export default Home;