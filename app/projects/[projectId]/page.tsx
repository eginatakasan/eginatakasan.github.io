import React from 'react';
import BottomContacts from '../../../src/components/organisms/BottomContacts';
import TopNavigation from '../../../src/components/organisms/TopNavigation';
import projects from '../../../src/constants/projects.constant';

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((_, index) => ({
    projectId: index.toString(),
  }));
}

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const project = projects.at(Number(projectId));

  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-white">
      <TopNavigation />
      <div className="flex-1 flex-col">{project?.title}</div>
      <BottomContacts />
    </div>
  );
};

export default ProjectDetailPage;
