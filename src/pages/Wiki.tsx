
import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import WikiContent from '@/components/WikiContent';

const Wiki = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-hidden">
          <WikiContent />
        </main>
      </div>
    </div>
  );
};

export default Wiki;
