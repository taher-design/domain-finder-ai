import React from 'react';
import Header from './components/Header';
import DomainGenerator from './components/DomainGenerator';
import NicheIdeas from './components/NicheIdeas';
import ResourceLinks from './components/ResourceLinks';
import DroppedDomainsSection from './components/DroppedDomainsSection';
import { REGISTRARS, ANALYSIS_TOOLS } from './constants';
import CustomCssModal from './components/CustomCssModal';

const App: React.FC = () => {

  const RegistrarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );

  const AnalysisIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-sky-300 selection:text-sky-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        <main className="max-w-4xl mx-auto mt-8">
          <DomainGenerator />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <NicheIdeas />
            <div className="space-y-8">
              <ResourceLinks title="Popular Domain Registrars" resources={REGISTRARS} icon={<RegistrarIcon/>} />
              <ResourceLinks title="Domain Analysis Tools" resources={ANALYSIS_TOOLS} icon={<AnalysisIcon/>} />
              <DroppedDomainsSection />
            </div>
          </div>
        </main>
        <footer className="text-center mt-16 text-slate-500 text-sm">
          <p>Powered by AI</p>
        </footer>
        <CustomCssModal />
      </div>
    </div>
  );
};

export default App;
